import store from "./store.js";
import productPage from "./product_page.js";

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

    // current_popup:null, //老師建議以後作法
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

    // openProduct(product) {
    //   // this.currentSrc = 0;
    //   // product.isShow = true;
    // },
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

    fetch("./php/shopping_page.php")
      .then((resp) => resp.json())
      .then((resp) => {
        // resp = resp.filter((pd) => {
        //   return !pd.state.includes("0");
        // });
        // console.log(resp[0].state);
        let products = resp.filter(pd => {
          return !pd.pdId.includes("pd-5") && pd.state !== 0;
          // return !pd.pdId.includes("pd-5") && !pd.state.includes(false);
        });
        // console.log(products);
        // products = resp;

        products.forEach((pd, i) => {
          products[i].imgList = products[i].imgList.split(",");
          products[i] = {
            ...products[i],
            isShow: false,
            quantity: 1,
          };
        });

        this.products = products;

        // console.log(this.products);

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
