//   codepen參考: https://codepen.io/abdon-gahungu/pen/eYdxVmz?editors=1000

// const productContent = {
//   template: `
//       <div class="textArea">
//       ★歐盟認證有機標章<br>

//           ★連續四年榮獲最佳德國品牌<br>

//           ★單一肉源蛋白<br>

//           ★90~96%超高含肉量<br>

//           ★嚴選有機農牧場<br>

//           ★不含人工維生素、增稠乳化劑、膠類、肉粉<br>
//           <br>
//           ｜有機放牧雞肉H-755｜<br>
//           <br>
//           成分: 96%有機雞肉(75%雞胸肉、10%雞肝、5%雞脖子、5%雞心、5%架).2%有機紅蘿蔔,有機椰子薄片,有機卡姆小麥 營養添加物(每公斤):1000mg牛磺酸<br>
//           <br>
//           營養分析: 粗蛋白11.5%、粗脂肪7.7%、粗0.5%、粗灰粉1.5%、水分76.2%、鈣0.65、磷0.22%<br>
//           <br>

//           ｜有機放牧鴨肉H-761｜<br>
//           <br>
//           成分:96%有機鴨肉(75%鴨胸肉、10%鴨肝、5%鴨脖子、5%鴨心、5%骨架),2%有機馬鈴薯,有機椰子薄片,有機香蕉薄片<br>
//           <br>
//           營養添加物(每公斤):1000mg牛磺酸 營養分析:粗蛋白14.1%、粗脂肪7.4%、粗維0.7%、粗灰粉1.1%、水分70.2%、鈣0.28%、磷0.21%<br>
//           <br>

//           ｜有機放牧鵝肉H-763｜<br>
//           <br>
//           成分:96%有機鵝肉(75%鵝胸肉、10%鵝肝、5%鵝脖子、5%鵝心、5%骨架),2%有機櫛瓜,有機椰子薄片,1%有機番茄,有機優格<br>
//           <br>
//           營養添加物(每公斤):1000mg牛磺酸 營養分析:粗蛋11.6%、粗脂肪8.1%、維0.3%、粗灰粉1.1%、水分74.1%、鈣0.16%、磷0.13%<br>

//           <br>

//           ｜海鮮全餐H-765｜<br>
//           <br>
//           成分:90%野生捕撈魚,5%鮮蝦,1%綠貽貝,啤酒酵母,有機椰子薄片,有機螺旋藻 營養添加物(每公斤):1000mg牛磺酸 <br>
//           <br>
//           營養分析:粗蛋白17.21%、粗脂肪10.03%、粗纖維0.7%、粗灰粉1.97%、水分68.01%、鈣0.19%、磷0.17%<br>

//           <br>

//           ｜*幼貓*有機放牧鵝肉H-852｜<br>
//           <br>
//           成分:90%有機鵝肉(75%鵝胸肉、10%鵝肝、5%鵝脖子、5%鵝心、5%鵝骨架).5%有機鴨脂肪,2%有機南瓜,有機椰子薄 片,有機亞麻籽,有機貓草 營養添加物(每公斤):1000mg牛磺酸<br>
//           <br>
//           營養分析:粗蛋白11.9%、粗脂肪16.7%、粗纖維1.2%、粗灰粉2.26%、水分65.82%、鈣0.62%、磷0.45%  <br>
//           <br>

//           ｜野生鹿肉-綠貽貝H-977｜<br>
//           <br>
//           成分:94%野生鹿肉(60%鹿肉、20%鹿心、10%鹿肺、10%鹿肝),綠胎貝.1%有機芹菜,有機椰子薄片、1%有機水梨,有 機貓草,有機月見草油 營養添加物(每公斤):1000mg牛磺酸<br>
//           <br>
//           營養分析:粗蛋白14.25%、粗脂肪3.14%、粗維0.88%、粗灰粉1.31%、水分77.41%、鈣0.01%、磷0.15%<br>

//           <br>

//           ｜純天然馬肉H-978｜<br>
//           <br>
//           成分:96%馬肉(60%馬肉、20$馬心、10%馬肺、10%馬肝、)2%有機紅蘿蔔、2%有機椰子薄片 營養添加物(每公斤):1000mg牛磺酸<br>
//           <br>
//           營養分析:粗蛋白7.95%、粗脂肪6.98%、粗纖維2.19%、粗灰粉0.56%、水分81.97%、鈣0.01%、磷0.06%<br>
//           <br>

//           ｜野味兔肉+起司H-982｜ 成分:90%兔肉(60%兔肉、20%兔心、10%兔肺、10%兔肝)啤酒酵母,4%起司,有機椰子薄片,有機椰子油 營養添加物(每公斤):1000mg牛磺酸<br>
//           <br>
//           營養分析:粗蛋白13%、粗脂肪8.02%、粗纖維0.9%、粗灰粉2.1%、水分74.5%、鈣2.13%、磷1.11%<br>

//           <br>

//           ｜有機放牧雞肉+野生鮭魚H-984｜<br>
//           <br>
//           成分:46%有機雞肉(75%雞胸肉、10%雞肝、5%雞脖子、5%雞心、5%骨架),45%鮭魚,有機紅蘿蔔,有機椰子薄片 營養添加物(每公斤):1000mg牛磺酸<br>
//           <br>
//           營養分析:粗蛋白11%、粗脂肪9.5%、粗纖維1%、粗灰粉1.1%、水分77.6%、鈣0.13%、磷0.17%<br>

//           <br>

//           保存方法:<br>
//           <br>
//           請放置於陰涼處，開封後請存放於冰箱並於三天內餵食完畢<br>
//           <br>
//           餵食方法:<br>
//           <br>
//           請根據體重及寵物飲食習慣調整餵食量<br>

//           建議量為3~5公斤貓咪每日100g~225g、5~10公斤貓咪每日餵食175g~450g<br>

//           <br>

//           淨重:200g<br>

//           產地:德國<br>

//           有效日期:標示於罐底<br>

//           保存期限:3年<br>
//           </div>
//       `,
// };

let productContent = {
  props: ["pdInfo"],

  template: `
      <div class="textArea" v-html="pdInfo">
     
      </div>
      `,
};

const shoppingInfo = {
  template: `
      <div class="textArea">
      付款方式<br>
      <br>
      信用卡即時線上一次刷卡付款<br>
      <br>
      方便又好用的付款方式，當您選擇線上刷卡方式進行交易時，作業流程透過SSL加密機制，保障您的個人隱私資料。<br>
      <br>
      超商付款取貨<br>
      <br>
      適合不方便在家收貨或者不方便使用ATM與無信用卡的消費者。<br>
      <br>
      ATM付款<br>
      <br>
      適用沒有信用卡或者不方便前往超商取貨付款的消費者。使用ATM付款方式只需將訂單款項透過實體/網路ATM或者網路銀行直接匯入系統指定帳號即可完成付款。<br>
      <br>
      退換貨說明<br>
      <br>
      ►換貨◄<br>
      1.浪途商店只提供【退貨不換貨】服務，收到瑕疵/破件商品者除外，收到瑕疵品者如欲辦理換貨，請於七日鑑賞期內問答發問或是來電詢問。<br>
      2.如收到不滿意商品需換其他等值商品，請於七天鑑賞期內問答發問或是來電詢問。<br>
      <br>
      ►退貨◄<br>
      取貨後如有不滿意、瑕疵或收到錯誤商品於7日鑑賞期內(非試用期，包含例假日)商品全新狀態下可辦理退貨，請於鑑賞期內線上申請，待賣場確認收到商品後續將由賣場處理退款。<br>
      <br>
      退貨注意事項<br>
      <br>
      單筆訂單僅提供一次退換貨，需退貨之商品須請您一次性退回。
      超過七天退貨時效(含假日)，即無法退貨。<br>
      <br>
      收到商品務必先行檢查看看是否有問題，破件或使用過、修改(含標)等商品不完整皆一律無法接受退貨。<br>
      <br>
      賣場販售之商品，依消費者保護法規定，提供到貨七天猶豫期權益非使用期。退品須全新且完整( 原包裝、附隨訂單、發票 ) 若有判斷出已拆封、使用、商品損毀等恕賣場不接受退貨，賣場則將商品回寄。<br>
      <br>
      退回商品之原包裝須保持完整無損毀，若因無包裝完整而導致退回商品有遺漏，後續費用須自行承擔，賣場僅依照退回商品處理退款事宜；如有贈品，須連同商品一併包裝退回，透明袋外請再用另一個袋子封裝，以免商品汙損。貓盆等外包裝：不得拆解凹折、黏膠帶、托運單或寫字等。<br>
      <br>
      若經常性退貨商品(賣場將自行判別)、多次退貨包裝不完整，將列入賣場黑名單，浪途商店有權不再服務您。<br>
      購物小叮嚀<br>
      ● 如因廠商因素而遇商品斷貨/停售無法追加，賣場將會主動與您聯繫，造成不便請見諒。<br>
      </div>
      `,
};

const deliveryMethod = {
  template: `
      <div class="textArea">
      運送方式<br>
      <br>
      帳款確認後將立即處理追加您的訂單，浪途商品採現貨+預購制(若現貨售完會自動轉預購追加，系統不另行通知)，追加期為7-20工作天(不含例假日)，商品全數追加到貨，會盡快安排出貨商品。<br>
      如本店無法接受您的訂單，將於收到您的訂單後二個工作日內通知您。但法令另有規定者除外。<br>
      配送範圍限台灣本島各縣市(不含郵政信箱及外島)。<br>
      ►宅急便◄<br>
      1.一般運費$100<br>
      2.貨到付款$100<br>
      3.賣場出貨後1-2天送達指定收件地址<br>
      <br>
      ►超商取貨◄<br>
      1.運費$60<br>
      2.賣場出貨後2-3天送達指定門市。<br>
      3.因超商有限制包裹大小，如購物超過4.5公斤，請改選宅急便方式，或分開訂購，如包裹被退回，訂單將直接被取消，賣場不另進行通知。<br>
      4.訂單指定的門市若系統判別門市關轉，系統將自動取消訂單，賣場不另行通知。<br>
      ※如還需商品請重新下訂，依目前優惠為主※<br>
      5.超取簡訊皆由系統自動發送通知，由於超商簡訊漏發嚴重，請買家到訂單查詢中，都會顯示出貨進度，如因未收到通知或其他因素錯失包裹領取時間，恕無法再提重新補寄服務<br>
      <br>
      </div>
      `,
};

new Vue({
  el: "#shoppingApp",
  data: {
    isOpen: false,
    reactArr: [],
    olClass: "hide",
    // products: ["1", "2", "3", "4", "5", "6", "7", "8"],
    // pages: ["2", "3", "4"],
    pages: 0,
    currentPage: 1,
    content: "productContent",
    selected: 1,
    // counter: 1,
    currentSrc: 0,
    products: [],
    productType: [],
    productInPage: [],
    imgURL: "./images/ff/",
    changeFilter: "pd-0",
  },
  components: {
    productContent: productContent,
    shoppingInfo: shoppingInfo,
    deliveryMethod: deliveryMethod,
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
        return pd.pdId.includes(this.changeFilter);
      });
      this.pages = Math.ceil(this.productType.length / 9);
      this.currentPage = 1;
      this.productInPage = this.productType.slice((this.currentPage - 1) * 9, this.currentPage * 9);

      // this.products = [];

      // fetch("../php/shopping_page.php")
      // .then((resp) => resp.json())
      // .then((resp) => {
      //   this.products = resp;

      //   this.products.forEach((val,i) => {
      //     this.products[i].imgList = this.products[i].imgList.split(',')
      //     this.products[i] = { ...this.products[i], isShow: false, quantity: 0 }
      //   })
      //   this.products = this.products.filter(pd => {
      //     return pd.pdId.includes(this.change)
      //   })
      //   this.pages = Math.ceil(this.products.length / 9);
      //   this.currentPage = 1;
      //   this.productInPage = this.products.slice((this.currentPage-1)*9,9)
      // });
    },
    changePage(index) {
      this.currentPage = index;
      // this.productInPage = this.products.slice((this.currentPage-1)*9,this.currentPage*9)
      this.reLoading();
    },
    pageMinus() {
      this.currentPage === 1 ? 1 : this.currentPage--;
      this.reLoading();
    },
    pagePlus() {
      this.currentPage === this.pages ? this.pages : this.currentPage++;
      this.reLoading();
    },
    reLoading() {
      this.productInPage = this.productType.slice(
        (this.currentPage - 1) * 9,this.currentPage * 9);
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

    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 16,
      slidesPerGroup: 4,
      loop: false,
      loopFillGroupWithBlank: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // navigation: {
      // nextEl: ".swiper-button-next",
      // prevEl: ".swiper-button-prev",
      // },
    });

    fetch("../php/shopping_page.php")
      .then((resp) => resp.json())
      .then((resp) => {
        this.products = resp;

        this.products.forEach((val, i) => {
          this.products[i].imgList = this.products[i].imgList.split(",");
          this.products[i] = {...this.products[i],isShow: false, quantity: 0,};
        });

        // 方法一
        // this.products = this.products.filter((pd) => { return pd.type === 'pd-0' })
        // 方法二
        this.productType = this.products.filter((pd) => {
          return pd.pdId.includes(this.changeFilter);
        });
        this.pages = Math.ceil(this.productType.length / 9);
        this.productInPage = this.productType.slice((this.currentPage - 1) * 9,this.currentPage * 9);
      });
  },
  updated() {
    // fetch("../php/shopping_page.php")
    //   .then((resp) => resp.json())
    //   .then((resp) => {
    //     this.products = resp;

    //     this.products.forEach((val,i) => {
    //       this.products[i].imgList = this.products[i].imgList.split(',')
    //       this.products[i] = { ...this.products[i], isShow: false, quantity: 0 }
    //     })
    //     // 方法一
    //     // this.products = this.products.filter((pd) => { return pd.type === 'pd-0' })
    //     // 方法二
    //     this.products = this.products.filter(pd => { return pd.pdId.includes(this.change)})
    //   });

    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 16,
      slidesPerGroup: 4,
      loop: false,
      loopFillGroupWithBlank: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // navigation: {
      // nextEl: ".swiper-button-next",
      // prevEl: ".swiper-button-prev",
      // },
    });
  },
});

// [{ imgSrc: './images/ff/pd-001-1.jpg' }, { imgSrc: './images/ff/pd-001-2.jpg' }, { imgSrc: './images/ff/pd-001-3.jpg' }, { imgSrc: './images/ff/pd-001-4.jpg' }, { imgSrc: './images/ff/pd-001-5.jpg' }, { imgSrc: './images/ff/pd-001-6.jpg' }, { imgSrc: './images/ff/pd-001-7.jpg' }, { imgSrc: './images/ff/pd-001-8.jpg' }, { imgSrc: './images/ff/pd-001-9.jpg' }, { imgSrc: './images/ff/pd-001-10.jpg' }]

// ['pd-001-1.jpg','pd-001-2.jpg','pd-001-3.jpg','pd-001-4.jpg','pd-001-5.jpg','pd-001-6.jpg','pd-001-7.jpg','pd-001-8.jpg','pd-001-9.jpg','pd-001-10.jpg']
