import store from "./store.js";

// codepen https://codepen.io/JavaScriptJunkie/pen/YzzNGeR?editors=0010
const creditCard = {
  // props:["sendOrder"],
  data() {
    return {
      currentCardBackground: Math.floor(Math.random() * 25 + 1),
      cardName: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      cardCvv: "",
      minCardYear: new Date().getFullYear(),
      amexCardMask: "#### ###### #####",
      otherCardMask: "#### #### #### ####",
      cardNumberTemp: "",
      isCardFlipped: false,
      focusElementStyle: null,
      isInputFocused: false,
    };
  },
  mounted() {
    this.cardNumberTemp = this.otherCardMask;
    document.getElementById("cardNumber").focus();
  },
  computed: {
    getCardType() {
      let number = this.cardNumber;
      let re = new RegExp("^4");
      if (number.match(re) != null) return "visa";

      re = new RegExp("^(34|37)");
      if (number.match(re) != null) return "amex";

      re = new RegExp("^5[1-5]");
      if (number.match(re) != null) return "mastercard";

      re = new RegExp("^6011");
      if (number.match(re) != null) return "discover";

      re = new RegExp("^9792");
      if (number.match(re) != null) return "troy";

      return "visa"; // default type
    },
    generateCardNumberMask() {
      return this.getCardType === "amex"
        ? this.amexCardMask
        : this.otherCardMask;
    },
    minCardMonth() {
      if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
      return 1;
    },
  },
  watch: {
    cardYear() {
      if (this.cardMonth < this.minCardMonth) {
        this.cardMonth = "";
      }
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    checkCard() {
      // this.$emit('check-card',true);
      if (
        this.cardName &&
        this.cardNumber &&
        this.cardMonth &&
        this.cardYear &&
        this.cardCvv
      ) {
        this.$emit("check-card", true);
      } else {
        // this.$emit('close');
        this.$emit("check-card", false);
      }
    },

    flipCard(status) {
      this.isCardFlipped = status;
    },
    focusInput(e) {
      this.isInputFocused = true;
      let targetRef = e.target.dataset.ref;
      let target = this.$refs[targetRef];
      this.focusElementStyle = {
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
        transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`,
      };
    },
    blurInput() {
      let vm = this;
      setTimeout(() => {
        if (!vm.isInputFocused) {
          vm.focusElementStyle = null;
        }
      }, 300);
      vm.isInputFocused = false;
    },
  },
  template: `
  <div
  @click="close"
  class="cardWrapperDrop">
    <div 
    @click.stop
    class="cardWrapper">
          <div class="card-form">
            <div class="card-list">
              <div class="card-item" v-bind:class="{ '-active' : isCardFlipped }">
                <div class="card-item__side -front">
                  <div class="card-item__focus" v-bind:class="{'-active' : focusElementStyle }" v-bind:style="focusElementStyle" ref="focusElement"></div>
                  <div class="card-item__cover">
                    <img
                    v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + currentCardBackground + '.jpeg'" class="card-item__bg">
                  </div>
                  
                  <div class="card-item__wrapper">
                    <div class="card-item__top">
                      <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" class="card-item__chip">
                      <div class="card-item__type">
                        <transition name="slide-fade-up">
                          <img v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + getCardType + '.png'" v-if="getCardType" v-bind:key="getCardType" alt="" class="card-item__typeImg">
                        </transition>
                      </div>
                    </div>
                    <label for="cardNumber" class="card-item__number" ref="cardNumber">
                      <template v-if="getCardType === 'amex'">
                      <span v-for="(n, $index) in amexCardMask" :key="$index">
                        <transition name="slide-fade-up">
                          <div
                            class="card-item__numberItem"
                            v-if="$index > 4 && $index < 14 && cardNumber.length > $index && n.trim() !== ''"
                          >*</div>
                          <div class="card-item__numberItem"
                            :class="{ '-active' : n.trim() === '' }"
                            :key="$index" v-else-if="cardNumber.length > $index">
                            {{cardNumber[$index]}}
                          </div>
                          <div
                            class="card-item__numberItem"
                            :class="{ '-active' : n.trim() === '' }"
                            v-else
                            :key="$index + 1"
                          >{{n}}</div>
                        </transition>
                      </span>
                      </template>
      
                      <template v-else>
                        <span v-for="(n, $index) in otherCardMask" :key="$index">
                          <transition name="slide-fade-up">
                            <div
                              class="card-item__numberItem"
                              v-if="$index > 4 && $index < 15 && cardNumber.length > $index && n.trim() !== ''"
                            >*</div>
                            <div class="card-item__numberItem"
                              :class="{ '-active' : n.trim() === '' }"
                              :key="$index" v-else-if="cardNumber.length > $index">
                              {{cardNumber[$index]}}
                            </div>
                            <div
                              class="card-item__numberItem"
                              :class="{ '-active' : n.trim() === '' }"
                              v-else
                              :key="$index + 1"
                            >{{n}}</div>
                          </transition>
                        </span>
                      </template>
                    </label>
                    <div class="card-item__content">
                      <label for="cardName" class="card-item__info" ref="cardName">
                        <div class="card-item__holder">持卡人姓名</div>
                        <transition name="slide-fade-up">
                          <div class="card-item__name" v-if="cardName.length" key="1">
                            <transition-group name="slide-fade-right">
                              <span class="card-item__nameItem" v-for="(n, $index) in cardName.replace(/\s\s+/g, ' ')" v-if="$index === $index" v-bind:key="$index + 1">{{n}}</span>
                            </transition-group>
                          </div>
                          <div class="card-item__name" v-else key="2">Full Name</div>
                        </transition>
                      </label>
                      <div class="card-item__date" ref="cardDate">
                        <label for="cardMonth" class="card-item__dateTitle">有效期限</label>
                        <label for="cardMonth" class="card-item__dateItem">
                          <transition name="slide-fade-up">
                            <span v-if="cardMonth" v-bind:key="cardMonth">{{cardMonth}}</span>
                            <span v-else key="2">MM</span>
                          </transition>
                        </label>
                        /
                        <label for="cardYear" class="card-item__dateItem">
                          <transition name="slide-fade-up">
                            <span v-if="cardYear" v-bind:key="cardYear">{{String(cardYear).slice(2,4)}}</span>
                            <span v-else key="2">YY</span>
                          </transition>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-item__side -back">
                  <div class="card-item__cover">
                    <img
                    v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + currentCardBackground + '.jpeg'" class="card-item__bg">
                  </div>
                  <div class="card-item__band"></div>
                  <div class="card-item__cvv">
                      <div class="card-item__cvvTitle">卡片背面末三碼</div>
                      <div class="card-item__cvvBand">
                        <span v-for="(n, $index) in cardCvv" :key="$index">
                          *
                        </span>
      
                    </div>
                      <div class="card-item__type">
                          <img v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + getCardType + '.png'" v-if="getCardType" class="card-item__typeImg">
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-form__inner">
              <div class="card-input">
                <label for="cardNumber" class="card-input__label">信用卡卡號</label>
                <input type="text" id="cardNumber" class="card-input__input" v-mask="generateCardNumberMask" v-model="cardNumber" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardNumber" autocomplete="off">
              </div>
              <div class="card-input">
                <label for="cardName" class="card-input__label">持卡人姓名</label>
                <input type="text" id="cardName" class="card-input__input" v-model="cardName" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardName" autocomplete="off">
              </div>
              <div class="card-form__row">
                <div class="card-form__col">
                  <div class="card-form__group">
                    <label for="cardMonth" class="card-input__label">有效期限</label>
                    <select class="card-input__input -select" id="cardMonth" v-model="cardMonth" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardDate">
                      <option value="" disabled selected>Month</option>
                      <option v-bind:value="n < 10 ? '0' + n : n" v-for="n in 12" v-bind:disabled="n < minCardMonth" v-bind:key="n">
                          {{n < 10 ? '0' + n : n}}
                      </option>
                    </select>
                    <select class="card-input__input -select" id="cardYear" v-model="cardYear" v-on:focus="focusInput" v-on:blur="blurInput" data-ref="cardDate">
                      <option value="" disabled selected>Year</option>
                      <option v-bind:value="$index + minCardYear" v-for="(n, $index) in 12" v-bind:key="n">
                          {{$index + minCardYear}}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="card-form__col -cvv">
                  <div class="card-input">
                    <label for="cardCvv" class="card-input__label">卡片背面末三碼</label>
                    <input type="text" class="card-input__input" id="cardCvv" v-mask="'####'" maxlength="4" v-model="cardCvv" v-on:focus="flipCard(true)" v-on:blur="flipCard(false)" autocomplete="off">
                  </div>
                </div>
              </div>
      
              <button 
              @click="checkCard"
              class="card-form__button">
                確認付款
              </button>
          </div>
        </div>
    </div>
  </div>  

  `,
};

// const alertArea = {
//   props: ['cart', 'product', 'deleteincartalert'],
//   data() {
//     return {
//       addAlert: null
//     }
//   },
//   // methods(){
//   //   deleteInCartAlert() {

//   //     this.addAlert = true;
//   //     setTimeout(() => { return this.addAlert = false }, 3000);
//   //   }
//   // },
//   template: `
//   <div class="alertArea"

//     >
//       {{product.name}} {{product.quantity}} pcs 移出購物車
//   </div>
//   `,
// };

const alertArea = {
  props: ["alert-text"],
  template: `
  <transition>
    <div class="alertArea"
    >{{alertText}}</div>
  </transition>
  `,
};

// const alertLoginArea = {
//   template: `
//   <transition>
//     <div class="alertText"
//     >請先登入會員</div>
//   </transition>
//   `,
// }

// const alertRemoveArea = {
//   props:['product'],
//   template: `
//   <transition>
//     <div class="alertText"
//     >{{product.name}} {{product.quantity}} pcs 移出購物車</div>
//   </transition>
//   `,
// }

new Vue({
  store,
  el: "#shoppingCartApp",
  components: {
    // alertRemoveArea,
    alertArea,
    creditCard,
  },
  data: {
    theOrder: [],
    currentPage: 1,
    changeAddressIsActive: false,
    imgURL: "./images/ff/",
    alertText: "",
    alert: null,
    cardShow: false,
    isChecked: false,
    cartTitle: [
      { id: 1, name: "購物車" },
      { id: 2, name: "結帳頁面" },
      { id: 3, name: "完成訂單" },
    ],
    memberRec: {
      name: null,
      address: "",
      phone: null,
    },
    otherRec: {
      name: null,
      address: "",
      phone: null,
    },
    recipientInfo: {
      email: null,
      invoce: null,
      note: "",
      payment: "",
      deliveryFee: null,
      deliveryWay: "",
      datetime: "",
      total: null,
      method: "",
    },
    memberErrors: {
      name: false,
      address: false,
      phone: false,
    },
    otherErrors: {
      name: false,
      address: false,
      phone: false,
    },
    recipientErrors: {
      email: false,
      invoce: false,
      payment: false,
      deliveryFee: false,
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      let total = 0;
      // console.log(this.$store.state.cart);

      this.$store.state.cart.forEach((pd) => {
        total += pd.price * pd.quantity;
      });

      return total;
    },
    deliveryWayText() {
      if (this.recipientInfo.deliveryFee === 60) {
        this.recipientInfo.deliveryWay = "超商取貨";
        return "超商取貨 NT$ 60";
      } else if (this.recipientInfo.deliveryFee === 100) {
        this.recipientInfo.deliveryWay = "常溫宅配送貨";
        return "常溫宅配送貨 NT$ 100";
      }
    },
    totalPlusDeliveryFee() {
      let total = 0;
      // console.log(this.$store.state.cart);

      this.$store.state.cart.forEach((pd) => {
        total += pd.price * pd.quantity;
      });
      total += this.recipientInfo.deliveryFee;
      this.recipientInfo.total = total;
      return total;
    },
  },
  methods: {
    closeCardShow() {
      this.cardShow = false;
    },
    limit(product) {
      return product.quantity >= product.inventory
        ? (product.quantity = product.inventory)
        : product.quantity;
    },
    changeCounter(num) {
      this.counter += num;
      this.counter > 1 ? this.counter : (this.counter = 1);
    },
    changeAddress() {
      this.changeAddressIsActive = !this.changeAddressIsActive;
    },
    deleteProduct(product) {
      // this.alertRemove = true;
      // setTimeout(() => { return this.alertRemove = false }, 3000);
      // console.log(product);

      // this.deleteInCartAlert();
      // setTimeout(this.$store.dispatch("deleteProductToCart", product), 3000);
      this.$store.dispatch("deleteProductToCart", product);
    },
    // deleteInCartAlert() {
    //     this.addAlert = true;
    //     setTimeout(() => { return this.addAlert = false }, 3000);
    //   },
    checkout() {
      if (sessionStorage.getItem("account")) {
        if (this.$store.state.cart.length === 0) {
          this.alertText = "購物車內沒有商品";
          this.alert = true;
          setTimeout(() => {
            return (this.alert = false);
          }, 3000);
          return false;
        }
        this.currentPage = 2;
      } else {
        this.alertText = "請先登入會員";
        this.alert = true;
        setTimeout(() => {
          return (this.alert = false);
        }, 3000);
        return false;
      }
      this.currentPage = 2;
    },
    sendOrder(isChecked) {
      if (this.$store.state.cart.length === 0) {
        this.alertText = "購物車內沒有商品";
        this.alert = true;
        setTimeout(() => {
          return (this.alert = false);
        }, 3000);
        return false;
      }

      const memberCounty = $('.twzipcode1 > select[name="county"]').val();
      const memberDistrict = $('.twzipcode1 > select[name="district"]').val();
      const memberZipcode = $('.twzipcode1 > input[name="zipcode"]').val();
      const memberPostal = memberCounty + memberDistrict + memberZipcode;

      const otherCounty = $('.twzipcode2 > select[name="county"]').val();
      const otherDistrict = $('.twzipcode2 > select[name="district"]').val();
      const otherZipcode = $('.twzipcode2 > input[name="zipcode"]').val();
      const otherPostal = otherCounty + otherDistrict + otherZipcode;

      (() => {
        for (let key in this.memberErrors) {
          this.memberErrors[key] = false;
        }

        for (let key in this.otherErrors) {
          this.otherErrors[key] = false;
        }

        for (let key in this.recipientErrors) {
          this.recipientErrors[key] = false;
        }
      })();

      (() => {
        if (!this.changeAddressIsActive) {
          if (!this.memberRec.name) {
            this.memberErrors.name = true;
          }

          if (this.recipientInfo.deliveryFee === 100) {
            if (
              !this.memberRec.address ||
              !memberCounty ||
              !memberDistrict ||
              !memberZipcode
            ) {
              this.memberErrors.address = true;
            }
          }

          if (
            !this.memberRec.phone ||
            !/(\d{2,3}-?|\(\d{2,3}\))\d{3,4}-?\d{4}|09\d{2}(\d{6}|-\d{3}-\d{3})/.test(
              this.memberRec.phone
            )
          ) {
            this.memberErrors.phone = true;
          }
        }

        if (this.changeAddressIsActive) {
          if (!this.otherRec.name) {
            this.otherErrors.name = true;
          }

          if (this.recipientInfo.deliveryFee === 100) {
            if (
              !this.otherRec.address ||
              !otherCounty ||
              !otherDistrict ||
              !otherZipcode
            ) {
              this.otherErrors.address = true;
            }
          }

          if (
            !this.otherRec.phone ||
            !/(\d{2,3}-?|\(\d{2,3}\))\d{3,4}-?\d{4}|09\d{2}(\d{6}|-\d{3}-\d{3})/.test(
              this.otherRec.phone
            )
          ) {
            this.otherErrors.phone = true;
          }
        }

        if (
          !this.recipientInfo.email ||
          !/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(this.recipientInfo.email)
        ) {
          this.recipientErrors.email = true;
        }

        if (!this.recipientInfo.invoce) {
          this.recipientErrors.invoce = true;
        }

        if (!this.recipientInfo.payment) {
          this.recipientErrors.payment = true;
        }

        if (!this.recipientInfo.deliveryFee) {
          this.recipientErrors.deliveryFee = true;
        }
      })();

      // (() => {
      if (!this.changeAddressIsActive) {
        for (let key in this.memberErrors) {
          if (this.memberErrors[key] === true) {
            return false;
          }
        }

        for (let key in this.recipientErrors) {
          if (this.recipientErrors[key] === true) {
            return false;
          }
        }
      } else {
        for (let key in this.otherErrors) {
          if (this.otherErrors[key] === true) {
            return false;
          }
        }

        for (let key in this.recipientErrors) {
          if (this.recipientErrors[key] === true) {
            return false;
          }
        }
      }
      // })();

      (() => {
        if (!this.changeAddressIsActive) {
          this.memberRec.address = memberPostal + this.memberRec.address;
          this.recipientInfo = { ...this.memberRec, ...this.recipientInfo };
        } else {
          this.otherRec.address = otherPostal + this.otherRec.address;
          this.recipientInfo = { ...this.otherRec, ...this.recipientInfo };
        }

        // console.log(this.recipientInfo);
      })();

      if (this.recipientInfo.payment === "信用卡付款") {
        if (isChecked === true) {
          // console.log(isChecked);
          this.alertText = "信用卡付款成功";
          this.alert = true;
          setTimeout(() => {
            return (this.alert = false);
          }, 3000);
          this.recipientInfo.method = "已付款";
          this.cardShow = false;
        } else if (isChecked === false) {
          this.alertText = "信用卡付款失敗";
          this.alert = true;
          setTimeout(() => {
            return (this.alert = false);
          }, 3000);
          this.cardShow = false;
          return false;
        } else {
          this.cardShow = true;
          return false;
        }
      } else {
        this.recipientInfo.method = "待付款";
      }

      (() => {
        const dt = new Date();
        this.recipientInfo.datetime = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;

        if (this.recipientInfo.deliveryFee === 60) {
          this.recipientInfo.deliveryWay = "超商取貨";
        } else if (this.recipientInfo.deliveryFee === 100) {
          this.recipientInfo.deliveryWay = "常溫宅配送貨";
        }

        // if (this.recipientInfo.payment === '信用卡付款') {
        //   this.recipientInfo.method = '已付款'
        // } else {
        //   this.recipientInfo.method = '待付款'
        // }
        // console.log(
        //   this.recipientInfo.datetime,
        //   this.recipientInfo.name,
        //   this.$store.state.cart,
        //   this.recipientInfo.payment,
        //   this.recipientInfo.deliveryWay,
        //   this.recipientInfo.deliveryFee,
        //   this.totalPlusDeliveryFee,
        //   this.recipientInfo.invoce,
        //   this.recipientInfo.email,
        //   this.recipientInfo.phone,
        //   this.recipientInfo.address,
        //   this.recipientInfo.note);
        // console.log(
        //   JSON.stringify({
        //     // datetime: this.recipientInfo.datetime,
        //     consignee: this.recipientInfo.name,
        //     cartlist: this.$store.state.cart,
        //     payment: this.recipientInfo.payment,
        //     deliveryWay: this.recipientInfo.deliveryWay,
        //     deliveryFee: this.recipientInfo.deliveryFee,
        //     total: this.totalPlusDeliveryFee,
        //     invoce: this.recipientInfo.invoce,
        //     email: this.recipientInfo.email,
        //     phone: this.recipientInfo.phone,
        //     address: this.recipientInfo.address,
        //     note: this.recipientInfo.note,
        //   })
        // );

        fetch('./php/insertOrder.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
              body: JSON.stringify({
                datetime: this.recipientInfo.datetime,
                consignee: this.recipientInfo.name,
                cartlist: JSON.stringify(this.$store.state.cart),
                payment: this.recipientInfo.payment,
                method: this.recipientInfo.method,
                deliveryWay: this.recipientInfo.deliveryWay,
                deliveryFee: this.recipientInfo.deliveryFee,
                total: this.totalPlusDeliveryFee,
                invoce: this.recipientInfo.invoce,
                email: this.recipientInfo.email,
                phone: this.recipientInfo.phone,
                address: this.recipientInfo.address,
                note: this.recipientInfo.note,
                status: '處理中',
              })
          })
      })();

      this.theOrder = [];
      this.theOrder = [...this.$store.state.cart];
      // console.log(this.$store.state.cart);
      this.$store.dispatch("clearCart");
      this.currentPage = 3;
    },
  },
  mounted() {
    this.currentPage = 1;
    $(".twzipcode1").twzipcode();
    $(".twzipcode2").twzipcode();
    // this.$store.dispatch('getProducts');

    fetch("./php/loading_info.php")
      .then((resp) => resp.json())
      .then((resp) => {
        resp.forEach((user) => {
          if (user.email === sessionStorage.getItem("account")) {
            this.recipientInfo.email = user.email;
            this.memberRec.name = user.name;
            this.memberRec.phone = user.phone;
          }
        });
      });
    if (sessionStorage.getItem("store")) {
      // console.log("讀取sessionstorage前的數據")
      // console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))

      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );

      // console.log("讀取sessionstorage後的數據")
      // console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))
    }
  },
  updated() {
    $(".twzipcode1").twzipcode();
    $(".twzipcode2").twzipcode();
  },
  created() {
    // https://www.twblogs.net/a/5f01bf025352062f754e96c2
    //在頁面刷新時將vuex裏的信息保存到sessionStorage裏
    window.addEventListener("beforeunload", () => {
      // console.log("存vuex前的數據")
      // console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))

      sessionStorage.setItem("store", JSON.stringify(this.$store.state));

      // console.log("存vuex後的數據")
      // console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))
    });

    // 在頁面加載時讀取sessionStorage裏的狀態信息
    if (sessionStorage.getItem("store")) {
      // console.log("讀取sessionstorage前的數據")
      // console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))

      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );

      // console.log("讀取sessionstorage後的數據")
      // console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))
    }
  },
});
