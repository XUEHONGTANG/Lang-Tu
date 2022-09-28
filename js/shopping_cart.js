import store from './store.js';


new Vue({
  store,
  el: "#shoppingCartApp",
  data: {
    // counter: 1,
    currentPage: 1,
    changeAddressIsActive: false,
    imgURL: './images/ff/',
    cartTitle: [
      { id: 1, name: "購物車" },
      { id: 2, name: "結帳頁面" },
      { id: 3, name: "完成訂單" },
    ],
    // cartList: [
    //   {
    //     img: "./images/ff/pd-001-1.jpg",
    //     title: "貓貓罐罐",
    //     price: "NT$300",
    //     sum: 300,
    //   },
    //   {
    //     img: "./images/ff/pd-002.png",
    //     title: "狗狗罐罐",
    //     price: "NT$400",
    //     sum: 400,
    //   },
    // ],
    memberRec: {
      name: null,
      address: null,
      phone: null,
    },
    otherRec: {
      name: null,
      address: null,
      phone: null,
    },
    recipientInfo: {
      email: null,
      invoce: null,
      note: "",
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
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    changeCounter(num) {
      this.counter += num;
      this.counter > 1 ? this.counter : (this.counter = 1);
    },
    changeAddress() {
      this.changeAddressIsActive = !this.changeAddressIsActive;
    },
    sendOrder() {
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

          if (
            !this.memberRec.address ||
            !memberCounty ||
            !memberDistrict ||
            !memberZipcode
          ) {
            this.memberErrors.address = true;
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

          if (
            !this.otherRec.address ||
            !otherCounty ||
            !otherDistrict ||
            !otherZipcode
          ) {
            this.otherErrors.address = true;
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
          !/^\b[A-Z0-9-]+@[A-Z0-9]+\.com\b/i.test(this.recipientInfo.email)
        ) {
          this.recipientErrors.email = true;
        }

        if (!this.recipientInfo.invoce) {
          this.recipientErrors.invoce = true;
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

        console.log(this.recipientInfo);
      })();

      this.currentPage = 3;
    },
  },
  mounted() {
    this.currentPage = 1;
    $(".twzipcode1").twzipcode();
    $(".twzipcode2").twzipcode();
    // this.$store.dispatch('getProducts');
    
  },
  updated() {
    $(".twzipcode1").twzipcode();
    $(".twzipcode2").twzipcode();
  },
  created () {
    // https://www.twblogs.net/a/5f01bf025352062f754e96c2
    //在頁面刷新時將vuex裏的信息保存到sessionStorage裏
    window.addEventListener("beforeunload", () => {
      console.log("存vuex前的數據")
      console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))
      
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))

      console.log("存vuex後的數據")
      console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))
    })

  // 在頁面加載時讀取sessionStorage裏的狀態信息
  if (sessionStorage.getItem("store")) {
    console.log("讀取sessionstorage前的數據")
    console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))

    this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))

    console.log("讀取sessionstorage後的數據")
    console.log(this.$store.state,JSON.parse(sessionStorage.getItem("store")))
  }

}
});
