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

const productPage = {
  props: ["product", "toggleShow"],
  components: {
    productContent,
    shoppingInfo,
    deliveryMethod,
    // productContent: productContent,
    // shoppingInfo: shoppingInfo,
    // deliveryMethod: deliveryMethod
  },
  data() {
    return {
      content: "productContent",
      selected: 1,
      currentSrc: 0,
      imgURL: "./images/ff/",
      addAlert:null
    };
  },
  methods: {
    myToggleShow(product) {
      this.currentSrc = 0;
      product.isShow = !product.isShow;
    },
    addToCart(product) {
      // let { isShow, info, ...newProduct } = { ...product };
      let newProduct = {
        pdId: product.pdId,
        name: product.name,
        image: product.imgList[0],
        price: product.price,
        inventory: product.inventory,
        quantity: product.quantity,
      };
      // newProduct = { image: newProduct.imgList[0], ...newProduct };
      // delete newProduct.imgList;

      // console.log(newProduct);

      this.$store.dispatch("addProductToCart", { ...newProduct });
      this.putInCart();
    },
    limit(product) {
      return product.quantity >= product.inventory
        ? (product.quantity = product.inventory)
        : product.quantity;
    },
    putInCart() {
      this.addAlert = true;
      setTimeout(() => { return this.addAlert = false }, 3000);
    }
  },
  // computed: {
    
  // },
  mounted() {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 16,
      slidesPerGroup: 4,
      loop: false,
      loopFillGroupWithBlank: false,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    });
  },
  updated() {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 16,
      slidesPerGroup: 4,
      loop: false,
      loopFillGroupWithBlank: false,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    });
  },

  template: `
  <div
  v-show="product.isShow"
  class="productPageDrop"
  @click="myToggleShow(product)">
  
  <transition>
  <div class="alertArea"
  @click="addAlert = false"
  @touchend="addAlert = false"
  v-if="addAlert"
  key="alertArea"
  >{{product.name}} {{product.quantity}} pcs 加入購物車</div>
  </transition>

  <div
  @click.stop
  @touchend.stop.prevent="product.isShow = true"
    class="productPageWrapper" 
    >
      <div class="productImageArea">
        <div class="imgLarge">
          <img :src="imgURL+product.imgList[currentSrc]" alt="product" />
        </div>

        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div
              v-for="(pic, picIndex) in product.imgList"
              :key="picIndex"
              class="swiper-slide"
            >
              <img :src="imgURL+pic" 
              @touchend.stop.prevent="currentSrc=picIndex"
              @click="currentSrc=picIndex" />
            </div>
          </div>
        </div>
      </div>

      <div class="productInfo">
      <div class="pageClose" @click="myToggleShow(product)"></div>
        <h3>{{product.name}}</h3>
        <ul class="changePageButton">
          <li
            @click="content='productContent', selected = 1"
            @touchend="content='productContent', selected = 1"
            :class="{'highlight':selected === 1}"
          >
            商品資訊
          </li>
          <li
            @click="content='shoppingInfo', selected = 2"
            @touchend="content='shoppingInfo', selected = 2"
            :class="{'highlight':selected === 2}"
          >
            購物須知
          </li>
          <li
            @click="content='deliveryMethod', selected = 3"
            @touchend="content='deliveryMethod', selected = 3"
            :class="{'highlight':selected === 3}"
          >
            寄送方式
          </li>
        </ul>
        <component :is="content" :pd-info="product.info">
          <!-- <div class="textArea"></div> -->
        </component>
        <p class="price">金額 NT.{{product.price}}</p>
        <p class="num">現有庫存 {{product.inventory}}</p>
        <div>
          <div class="counter">
            <button class="btn-minus" @click="product.quantity <=1?1:product.quantity--"
            @touchend="product.quantity <=1?1:product.quantity--"
            ></button>
            <input type="number" v-model.number="limit(product)" />
            <button class="btn-plus" @click="product.quantity >= product.inventory ? product.inventory:product.quantity++"
            @touchend="product.quantity >= product.inventory ? product.inventory:product.quantity++"
            ></button>
          </div>
          <button 
          @click="addToCart(product)"
          @touchend="addToCart(product)"
          class="btn-0 btn-shopping">
            <iconify-icon icon="eva:shopping-cart-fill"></iconify-icon>
            加入購物車
          </button>
        </div>
      </div>

      <button class="btn-1"
      @touchend.stop.prevent="myToggleShow(product)"
      @click="myToggleShow(product)">返回上一頁</button>
    </div>
  </div>
  `,
};
export default productPage;

// product.quantity >= product.inventory ? product.inventory :product.quantity