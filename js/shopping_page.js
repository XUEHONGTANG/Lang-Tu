import store from "./store.js";
import productPage from "./product_page.js";



// let productContent = {
//   props: ['pdInfo'],

//   template: `
//       <div class="textArea" v-html="pdInfo">

//       </div>
//       `,
// };

// const shoppingInfo = {
//   template: `
//       <div class="textArea">
//       付款方式<br>
//       <br>
//       信用卡即時線上一次刷卡付款<br>
//       <br>
//       方便又好用的付款方式，當您選擇線上刷卡方式進行交易時，作業流程透過SSL加密機制，保障您的個人隱私資料。<br>
//       <br>
//       超商付款取貨<br>
//       <br>
//       適合不方便在家收貨或者不方便使用ATM與無信用卡的消費者。<br>
//       <br>
//       ATM付款<br>
//       <br>
//       適用沒有信用卡或者不方便前往超商取貨付款的消費者。使用ATM付款方式只需將訂單款項透過實體/網路ATM或者網路銀行直接匯入系統指定帳號即可完成付款。<br>
//       <br>
//       退換貨說明<br>
//       <br>
//       ►換貨◄<br>
//       1.浪途商店只提供【退貨不換貨】服務，收到瑕疵/破件商品者除外，收到瑕疵品者如欲辦理換貨，請於七日鑑賞期內問答發問或是來電詢問。<br>
//       2.如收到不滿意商品需換其他等值商品，請於七天鑑賞期內問答發問或是來電詢問。<br>
//       <br>
//       ►退貨◄<br>
//       取貨後如有不滿意、瑕疵或收到錯誤商品於7日鑑賞期內(非試用期，包含例假日)商品全新狀態下可辦理退貨，請於鑑賞期內線上申請，待賣場確認收到商品後續將由賣場處理退款。<br>
//       <br>
//       退貨注意事項<br>
//       <br>
//       單筆訂單僅提供一次退換貨，需退貨之商品須請您一次性退回。
//       超過七天退貨時效(含假日)，即無法退貨。<br>
//       <br>
//       收到商品務必先行檢查看看是否有問題，破件或使用過、修改(含標)等商品不完整皆一律無法接受退貨。<br>
//       <br>
//       賣場販售之商品，依消費者保護法規定，提供到貨七天猶豫期權益非使用期。退品須全新且完整( 原包裝、附隨訂單、發票 ) 若有判斷出已拆封、使用、商品損毀等恕賣場不接受退貨，賣場則將商品回寄。<br>
//       <br>
//       退回商品之原包裝須保持完整無損毀，若因無包裝完整而導致退回商品有遺漏，後續費用須自行承擔，賣場僅依照退回商品處理退款事宜；如有贈品，須連同商品一併包裝退回，透明袋外請再用另一個袋子封裝，以免商品汙損。貓盆等外包裝：不得拆解凹折、黏膠帶、托運單或寫字等。<br>
//       <br>
//       若經常性退貨商品(賣場將自行判別)、多次退貨包裝不完整，將列入賣場黑名單，浪途商店有權不再服務您。<br>
//       購物小叮嚀<br>
//       ● 如因廠商因素而遇商品斷貨/停售無法追加，賣場將會主動與您聯繫，造成不便請見諒。<br>
//       </div>
//       `,
// };

// const deliveryMethod = {
//   template: `
//       <div class="textArea">
//       運送方式<br>
//       <br>
//       帳款確認後將立即處理追加您的訂單，浪途商品採現貨+預購制(若現貨售完會自動轉預購追加，系統不另行通知)，追加期為7-20工作天(不含例假日)，商品全數追加到貨，會盡快安排出貨商品。<br>
//       如本店無法接受您的訂單，將於收到您的訂單後二個工作日內通知您。但法令另有規定者除外。<br>
//       配送範圍限台灣本島各縣市(不含郵政信箱及外島)。<br>
//       ►宅急便◄<br>
//       1.一般運費$100<br>
//       2.貨到付款$100<br>
//       3.賣場出貨後1-2天送達指定收件地址<br>
//       <br>
//       ►超商取貨◄<br>
//       1.運費$60<br>
//       2.賣場出貨後2-3天送達指定門市。<br>
//       3.因超商有限制包裹大小，如購物超過4.5公斤，請改選宅急便方式，或分開訂購，如包裹被退回，訂單將直接被取消，賣場不另進行通知。<br>
//       4.訂單指定的門市若系統判別門市關轉，系統將自動取消訂單，賣場不另行通知。<br>
//       ※如還需商品請重新下訂，依目前優惠為主※<br>
//       5.超取簡訊皆由系統自動發送通知，由於超商簡訊漏發嚴重，請買家到訂單查詢中，都會顯示出貨進度，如因未收到通知或其他因素錯失包裹領取時間，恕無法再提重新補寄服務<br>
//       <br>
//       </div>
//       `,
// };

new Vue({
  store,
  productPage,
  el: "#shoppingApp",
  data: {
    isOpen: false,
    reactArr: [],
    olClass: "hide",
    pages: 0,
    currentPage: 1,
    // content: 'productContent',
    // selected: 1,
    // counter: 1,
    // currentSrc: 0,
    products: [],
    productType: [],
    productInPage: [],
    imgURL: "./images/ff/",
    filterCondition: "pd-1",
    searchCondition: "",
  },
  components: {
    productPage,
  },
  methods: {
    toggle(order) {
      let length = this.reactArr.length,
        i = 0;
      // console.log(length);
      // console.log(this.reactArr[order]);

      if (this.isOpen === false) {
        // console.log(this.reactArr[order]);
        this.reactArr[order].classList.remove("hide");
        this.reactArr[order].classList.add("show");
        // console.log(this.reactArr[order].previousElementSibling);
        this.reactArr[order].previousElementSibling.classList.add("turnRight");

        this.isOpen = true;
        for (i; i < length; i++) {
          if (order != i) {
            this.reactArr[i].classList.remove("show");
            this.reactArr[i].classList.add("hide");
            this.reactArr[i].previousElementSibling.classList.remove(
              "turnRight"
            );

            // this.reactArr[i].class = 'hide';
            // this.reactArr[i].chevron = 'fa fa-chevron-down';
          }
        }
      } else if (
        this.isOpen === true &&
        this.reactArr[order].classList.contains("hide")
      ) {
        this.reactArr[order].classList.remove("hide");
        this.reactArr[order].classList.add("show");
        this.reactArr[order].previousElementSibling.classList.add("turnRight");

        for (i; i < length; i++) {
          if (order != i) {
            this.reactArr[i].classList.remove("show");
            this.reactArr[i].classList.add("hide");
            this.reactArr[i].previousElementSibling.classList.remove(
              "turnRight"
            );
          }
        }
      } else {
        this.reactArr[order].classList.remove("show");
        this.reactArr[order].classList.add("hide");
        this.reactArr[order].previousElementSibling.classList.remove(
          "turnRight"
        );

        // this.reactArr[order].class = 'hide';
        // this.reactArr[order].chevron = 'fa fa-chevron-down';
        this.isOpen = false;
      }
    },
    // changeCounter(num) {
    //   this.counter += num;
    //   this.counter > 1 ? this.counter : (this.counter = 1);
    // },
    replaceStr(str) {
      str = str.replace(".jpg", "");
      return str;
    },
    // change() {
    // this.products = this.products.filter(pd => { return pd.pdId.includes('pd-0')})

    //   // products.filter(pd => { return pd.pdId.includes('pd-0')})
    // },
    toggleShow(product) {
      this.currentSrc = 0;
      product.isShow = !product.isShow;
    },
    changeType() {
      this.productType = [];
      this.productType = this.products.filter((pd) => {
        return pd.pdId.includes(this.filterCondition);
      });
      this.pages = Math.ceil(this.productType.length / 6);
      this.currentPage = 1;
      this.reLoading();
    },
    searching() {
      this.productType = [];
      this.productType = this.products.filter((pd) => {
        return pd.name.includes(this.searchCondition);
      });
      this.pages = Math.ceil(this.productType.length / 6);
      this.currentPage = 1;
      this.reLoading();
    },
    changePage(index) {
      this.currentPage = index;
      // this.productInPage = this.products.slice((this.currentPage-1)*9,this.currentPage*9)
      this.reLoading();
    },
    pageMinus() {
      this.currentPage <= 1 ? 1 : this.currentPage--;
      this.reLoading();
    },
    pagePlus() {
      this.currentPage >= this.pages ? this.pages : this.currentPage++;
      this.reLoading();
    },
    reLoading() {
      this.productInPage = this.productType.slice(
        (this.currentPage - 1) * 6,
        this.currentPage * 6
      );
    },
  },
  computed: {
    // productOnChosen() {
    //   // 方法三 不適合這頁
    //   return this.products.filter(pd =>pd.pdId.includes('pd-0'))
    // },
  },
  mounted() {
    let reactTotal = document.querySelectorAll(".hide");
    // console.log(reactTotal);
    reactTotal.forEach((item) => {
      this.reactArr.push(item);
      // console.log(this.reactArr);
    });

    // const swiper = new Swiper('.mySwiper', {
    //   slidesPerView: 4,
    //   spaceBetween: 16,
    //   slidesPerGroup: 4,
    //   loop: false,
    //   loopFillGroupWithBlank: false,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   // navigation: {
    //   // nextEl: '.swiper-button-next',
    //   // prevEl: '.swiper-button-prev',
    //   // },
    // });

    fetch("../php/shopping_page.php")
      .then((resp) => resp.json())
      .then((resp) => {
  
        this.products = resp.filter(pd => {
          return !(pd.pdId.includes('pd-5'));
        });
        // console.log(this.products);
        // this.products = resp;

        this.products.forEach((pd, i) => {
          this.products[i].imgList = this.products[i].imgList.split(",");
          this.products[i] = {
            ...this.products[i],
            isShow: false,
            quantity: 1,
          };
        });

        // 方法一
        // this.products = this.products.filter((pd) => { return pd.type === 'pd-0' })
        // 方法二
        this.productType = this.products.filter((pd) => {
          return pd.pdId.includes(this.filterCondition);
        });
        this.pages = Math.ceil(this.productType.length / 6);
        this.productInPage = this.productType.slice(
          (this.currentPage - 1) * 6,
          this.currentPage * 6
        );
      });

    // this.$store.dispatch('getProducts');
  },
  updated() {
    // fetch('../php/shopping_page.php')
    //   .then((resp) => resp.json())
    //   .then((resp) => {
    //     this.products = resp;
    //     this.products.forEach((pd,i) => {
    //       this.products[i].imgList = this.products[i].imgList.split(',')
    //       this.products[i] = { ...this.products[i], isShow: false, quantity: 0 }
    //     })
    //     // 方法一
    //     // this.products = this.products.filter((pd) => { return pd.type === 'pd-0' })
    //     // 方法二
    //     this.products = this.products.filter(pd => { return pd.pdId.includes(this.change)})
    //   });
    // const swiper = new Swiper('.mySwiper', {
    //   slidesPerView: 4,
    //   spaceBetween: 16,
    //   slidesPerGroup: 4,
    //   loop: false,
    //   loopFillGroupWithBlank: false,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   // navigation: {
    //   // nextEl: '.swiper-button-next',
    //   // prevEl: '.swiper-button-prev',
    //   // },
    // });
  },
  created() {
    //在頁面刷新時將vuex裏的信息保存到sessionStorage裏
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });

    // 在頁面加載時讀取sessionStorage裏的狀態信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
  },
});

// [{ imgSrc: './images/ff/pd-001-1.jpg' }, { imgSrc: './images/ff/pd-001-2.jpg' }, { imgSrc: './images/ff/pd-001-3.jpg' }, { imgSrc: './images/ff/pd-001-4.jpg' }, { imgSrc: './images/ff/pd-001-5.jpg' }, { imgSrc: './images/ff/pd-001-6.jpg' }, { imgSrc: './images/ff/pd-001-7.jpg' }, { imgSrc: './images/ff/pd-001-8.jpg' }, { imgSrc: './images/ff/pd-001-9.jpg' }, { imgSrc: './images/ff/pd-001-10.jpg' }]

// ['pd-001-1.jpg','pd-001-2.jpg','pd-001-3.jpg','pd-001-4.jpg','pd-001-5.jpg','pd-001-6.jpg','pd-001-7.jpg','pd-001-8.jpg','pd-001-9.jpg','pd-001-10.jpg']
