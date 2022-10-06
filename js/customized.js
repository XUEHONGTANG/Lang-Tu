import store from "./store.js";

WebFont.load({
  google: {
    families: ["DFKai-sb", "Arial", "Pacifico", "Quicksand", "Inconsolata"],
  },
});

const circles = document.querySelectorAll(".circle");
const defaultColor = "#796143";

new Vue({
  store,
  el: "#customizedApp",
  data: {
    currentPage: 0,
    content: "customBtn",
    message: "",
    choosCollar: -1,
    chooseTags: -1,
    current_animal: "",
    strokeWidth: "-1",
    textFontFamily: "default",
    strokeColor: defaultColor,
    imgURL: "./images/ff/",
    // noActivated: false,

    schemas: [
      {
        title: "今天想幫誰挑項圈呢？",
        animals: ["dog", "cat"],
      },
      {
        step: "第一步",
        title: "挑選皮帶",
        product_images: [
          "pd-501-01.jpg",
          "pd-502-01.jpg",
          "pd-503-01.jpg",
          "pd-504-01.jpg",
          "pd-505-01.jpg",
          "pd-506-01.jpg",
        ],

        id: ["pd-501", "pd-502", "pd-503", "pd-504", "pd-505", "pd-506"],
        name: [
          "紅色項圈",
          "黃色項圈",
          "深藍項圈",
          "淺藍項圈",
          "銀色項圈",
          "咖啡項圈",
        ],

        price: ["400", "450", "500", "550", "600", "550"],
        cat_collar: [
          "./images/customized/custom-cat_red.png",
          "./images/customized/custom-cat_yellow.png",
          "./images/customized/custom-cat_blue.png",
          "./images/customized/custom-cat_lightblue.png",
          "./images/customized/custom-cat_gray.png",
          "./images/customized/custom-cat_coffee.png",
        ],
        collar: [
          "./images/customized/custom-dog_red.png",
          "./images/customized/custom-dog_yellow.png",
          "./images/customized/custom-dog_blue.png",
          "./images/customized/custom-dog_lightblue.png",
          "./images/customized/custom-dog_gray.png",
          "./images/customized/custom-dog_coffee.png",
        ],
        tags: [],
        // "./images/customized/custom-dogb1.png"
        inventory: ["12", "15", "13", "16", "14", "11"],
      },
      {
        step: "第二步",
        title: "挑選吊牌",
        product_images: [
          "pd-507-Tags.jpg",
          "pd-508-Tags.jpg",
          "pd-509-Tags.jpg",
          "pd-510-Tags.jpg",
          "pd-511-Tags.jpg",
          "pd-512-Tags.jpg",
        ],
        id: ["pd-507", "pd-508", "pd-509", "pd-510", "pd-511", "pd-512"],
        name: [
          "骨頭吊牌(大)",
          "蝴蝶吊牌",
          "貓咪吊牌",
          "愛心吊牌",
          "骨頭吊牌(小)",
          "星星吊牌",
        ],
        price: ["120", "100", "80", "80", "90", "130"],
        cat_collar: [
          "./images/customized/custom-cat_red.png",
          "./images/customized/custom-cat_yellow.png",
          "./images/customized/custom-cat_blue.png",
          "./images/customized/custom-cat_lightbliue.png",
          "./images/customized/custom-cat_gray.png",
          "./images/customized/custom-cat_coffee.png",
        ],
        collar: [
          "./images/customized/custom-dog_red.png",
          "./images/customized/custom-dog-yellow.png",
          "./images/customized/custom-dog-blue.png",
          "./images/customized/custom-dog_lightbliue.png",
          "./images/customized/custom-dog-gray.png",
          "./images/customized/custom-dog-coffee.jpg",
        ],
        tags: [
          "./images/customized/bbon_original-01.png",
          "./images/customized/tie_original-02.png",
          "./images/customized/cat_original-03.png",
          "./images/customized/heart_original-04.png",
          "./images/customized/sbon_original-05.png",
          "./images/customized/star_original-06.png",
        ],
        inventory: ["12", "15", "13", "16", "14", "11"],
      },
      {
        step: "第三步",
        title: "吊牌刻字",
        collar: [],
        tags: [
          "./images/customized/pd-507-BigTags.png",
          "./images/customized/pd-508-BigTags.png",
          "./images/customized/pd-509-BigTags.png",
          "./images/customized/pd-510-BigTags.png",
          "./images/customized/pd-511-BigTags.png",
          "./images/customized/pd-512-BigTags.png",
        ],
        textFontFamily: [
          "",
          "NotoSans",
          "DFKai-sb",
          "Arial",
          "Pacifico",
          "Quicksand",
          "Inconsolata",
        ],
      },
      {
        step: "訂購完成",
        title: "您的商品已添加至購物車",
        collar: [
          "./images/customized/custom-dog_red.png",
          "./images/customized/custom-dog-yellow.png",
          "./images/customized/custom-dog-blue.png",
          "./images/customized/custom-dog_lightbliue.png",
          "./images/customized/custom-dog-gray.png",
          "./images/customized/custom-dog-coffee.png",
        ],
        tags: [
          "./images/customized/bbon_original-01.png",
          "./images/customized/tie_original-02.png",
          "./images/customized/cat_original-03.png",
          "./images/customized/heart_original-04.png",
          "./images/customized/sbon_original-05.png",
          "./images/customized/star_original-06.png",
        ],
        cat_collar: [
          "./images/customized/custom-cat_red.png",
          "./images/customized/custom-cat_yellow.png",
          "./images/customized/custom-cat_blue.png",
          "./images/customized/custom-cat_lightbliue.png",
          "./images/customized/custom-cat_gray.png",
          "./images/customized/custom-cat_coffee.png",
        ],
      },

      {
        collar: [
          "./images/customized/custom-dogb1.png",
          "./images/customized/custom-catb1.png",
        ],
      },
    ],
  },
  methods: {
    addToCart() {
      // let { isShow, info, ...newProduct } = { ...product };

      if (this.currentPage === 4) {
        let collar = {
          pdId: this.schemas[1].id[this.choosCollar],
          name: this.schemas[1].name[this.choosCollar],
          image: this.schemas[1].product_images[this.choosCollar],
          price: this.schemas[1].price[this.choosCollar],
          inventory: this.schemas[1].inventory[this.choosCollar],
          quantity: 1,
        };
        console.log(collar);

        let tags = {
          pdId: this.schemas[2].id[this.chooseTags],
          name: this.schemas[2].name[this.chooseTags],
          image: this.schemas[2].product_images[this.chooseTags],
          price: this.schemas[2].price[this.chooseTags],
          inventory: this.schemas[2].inventory[this.chooseTags],
          quantity: 1,
        };
        console.log(tags);

        this.$store.dispatch("addProductToCart", { ...collar });
        this.$store.dispatch("addProductToCart", { ...tags });
      } else {
      }
    },

    DogNext() {
      this.currentPage++;
      this.current_animal = "dog";
    },
    CatNext() {
      this.currentPage++;
      this.current_animal = "cat";
    },
    next() {
      this.currentPage++;
      $("#next-btn").fadeOut();
      if (this.currentPage > circles.length) {
        this.currentPage = circles.length;
      }
      this.update();
    },

    prev() {

      if(this.currentPage = 1){
        this.currentPage = 0
      }else{
      this.currentPage--;
      $("#next-btn").fadeOut();
      if (this.currentPage < 1) {
        this.currentPage = 1;
      }
      this.update();
    }
    },
    prdClickfirst() {
      $("#next-btn").fadeIn();
      $(".presetPet").css("display", "none");
    },
    prdClick() {
      $("#next-btn").fadeIn();
    },

    update() {
      let prevbtn = document.getElementById("prev-btn");
      let nextbtn = document.getElementById("next-btn");
      let circles = document.querySelectorAll(".circle");
      circles.forEach((circle, idx) => {
        if (idx < this.currentPage) {
          circle.classList.add("active");
        } else {
          circle.classList.remove("active");
        }
      });
      let actives = document.querySelectorAll(".active");
      let progress = document.getElementById("progress");
      progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

      if (this.currentPage === 1) {
        prevbtn.disabled = true;
      } else if (this.currentPage === circles.length) {
        nextbtn.disabled = true;
      } else {
        prevbtn.disabled = false;
        nextbtn.disabled = false;
      }
    },
    addText() {
      if (this.strokeWidth == -1) {
        alert("請選擇一種文字風格");
        return;
      } else if (this.textFontFamily === "default") {
        alert("請選擇一種字體");
        return;
      } else if ($("#textContent1").value == "") {
        alert("請先輸入文字");
        return;
      } else if (this.strokeWidth == 1) {
        let text = new fabric.Text($("#textContent1").val(), {
          fontFamily: this.textFontFamily,
          fontSize: 24,
          left: 100,
          top: 100,
          stroke: defaultColor,
          strokeWidth: this.strokeWidth,
          fill: "rgba(0,0,0,0)",
        }).setControlsVisibility(HideControls);
        canvas.add(text);
        $("#textContent1").value = "";
      } else {
        let text = new fabric.Text($("#textContent1").val(), {
          fontFamily: this.textFontFamily,
          fontSize: 24,
          left: 100,
          top: 100,
          fill:defaultColor,
          strokeWidth: this.strokeWidth,
        }).setControlsVisibility(HideControls);
        canvas.add(text);
        $("#textContent1").value = "";
      }
    },
    ////

    delbtn() {
      if (canvas.getActiveObject() == null) {
        alert("請先選取一組文字");
      } else {
        canvas.remove(canvas.getActiveObject());
      }
    },

    // addPetclick(e){
    //   this.noActivated = true,
    //   this.choosCollar = pid
    // },
  },

  mounted() {},
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

// ============================= js =========================


      //hover
      $('#dogbtn').mouseenter(function(){
        $('.dogbtn_dog').fadeIn();
        $('.dogbtn_dog').css('bottom','-20vw');
    }).mouseleave(function(){
        $('.dogbtn_dog').css('bottom','-50vw');
        $('.dogbtn_dog').fadeOut();
    })


      $('#catbtn').mouseenter(function(){
        $('.catbtn_cat').fadeIn();
        $('.catbtn_cat').css('bottom','-20vw');
    }).mouseleave(function(){
        $('.catbtn_cat').css('bottom','-50vw');
        $('.catbtn_cat').fadeOut();
    })


var canvas = document.getElementById("canvas");
var heightRatio = 4.3;
var widthRatio = 2.8;
canvas.width = canvas.width * widthRatio;
canvas.height = canvas.height * heightRatio;
var canvas = new fabric.Canvas("canvas");
// var canvas = new fabric.Canvas('canvas', {
//   width: 600,
//   height: 450
// })

var HideControls = {
  tl: true, //左上   top left
  tr: true, //右上   top right
  bl: true, //左下   bottom left
  br: true, //右下   bottom right
  ml: true, //中左   middle left
  mt: true, //中上   middle top
  mr: true, //中右   middle right
  mb: true, //中下   middle bottom
  mtr: true, //中上控制角度     middle top rotate
};

//手機版變touch
function touchHandler(event) {
  var touch = event.changedTouches[0];
  var simulatedEvent = document.createEvent("MouseEvent");
  simulatedEvent.initMouseEvent(
    {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
    }[event.type],
    true,
    true,
    window,
    1,
    touch.screenX,
    touch.screenY,
    touch.clientX,
    touch.clientY,
    false,
    false,
    false,
    false,
    0,
    null
  );

  touch.target.dispatchEvent(simulatedEvent);
  event.preventDefault();
}
