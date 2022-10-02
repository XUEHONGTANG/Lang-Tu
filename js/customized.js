
$(document).ready(function () {
  WebFont.load({
    google: {
      families: ['DFKai-sb','Arial', 'Pacifico', 'Quicksand', 'Inconsolata']
  }
  });
  // const prevbtn = document.getElementById("prev-btn");
  // const nextbtn = document.getElementById("next-btn");
  const circles = document.querySelectorAll(".circle");
  const defaultColor = 'rgba(0,0,0,1)';

  // const progress = document.getElementById("progress");
  // const actives = document.querySelectorAll(".active");
  new Vue({
    el: '#customizedApp',
    data: {
      currentPage: 1,
      content: 'customBtn',
      message: "",
      choosePet: -1,
      chooseTags: -1,
      strokeWidth: '-1',
      textFontFamily: 'default',
      strokeColor:defaultColor,
      // noActivated: false,
 
      schemas: [
        {
          title: "今天想幫誰挑項圈呢？",
          animals: ['dog', 'cat'],
        },
        {
          step: "第一步",
          title: "挑選皮帶",
          product_images: [
            "./images/customized/collar01.png",
            "./images/customized/collar02.png",
            "./images/customized/collar03.png",
            "./images/customized/collar04.png",
            "./images/customized/collar05.png",
            "./images/customized/collar06.png",
          ],
          price: [
            "NT 400",
            "NT 450",
            "NT 500",
            "NT 550",
            "NT 600",
            "NT 550",
          ],
          chooscollar: [
            "./images/customized/custom-dog_red.png",
            "./images/customized/custom-dog-yellow.png",
            "./images/customized/custom-dog-blue.png",
            "./images/customized/custom-dog_lightbliue.png",
            "./images/customized/custom-dog-gray.png",
            "./images/customized/custom-dog-coffee.jpg",
          ],
          tags: []
          // "./images/customized/custom-dogb1.png"

        },
        {
          step: "第二步",
          title: "挑選吊牌",
          product_images: [
            "./images/customized/custom- tag01.png",
            "./images/customized/custom- tag02.png",
            "./images/customized/custom- tag03.png",
            "./images/customized/custom- tag04.png",
            "./images/customized/custom- tag05.png",
            "./images/customized/custom- tag06.png",

          ],
          price: [
            "NT 100",
            "NT 150",
            "NT 100",
            "NT 150",
            "NT 100",
            "NT 150",

          ],
          chooscollar: [
            "./images/customized/custom-dog_red.png",
            "./images/customized/custom-dog-yellow.png",
            "./images/customized/custom-dog-blue.png",
            "./images/customized/custom-dog_lightbliue.png",
            "./images/customized/custom-dog-gray.png",
            "./images/customized/custom-dog-coffee.jpg",
          ],
          tags: [
            "../images/customized/bbon_original-01.png",
            "../images/customized/tie_original-02.png",
            "../images/customized/cat_original-03.png",
            "../images/customized/heart_original-04.png",
            "../images/customized/sbon_original-05.png",
            "../images/customized/star_original-06.png",

          ],
        },
        {
          step: "第三步",
          title: "吊牌刻字",
          chooscollar: [],
          tags: [
            "./images/customized/custom-tag1-big.png",
            "./images/customized/custom-tag2-big.png",
            "./images/customized/custom-tag3-big.png",
            "./images/customized/custom-tag4-big.png",
            "./images/customized/custom-tag5-big.png",
            "./images/customized/custom-tag6-big.png",
          ],
          textFontFamily:['', 'NotoSans', 'DFKai-sb', 'Arial', 'Pacifico', 'Quicksand', 'Inconsolata']

        },
        {
          step: "訂購完成",
          title: "您的商品已添加至購物車",
          chooscollar: [
            "./images/customized/custom-dog_red.png",
            "./images/customized/custom-dog-yellow.png",
            "./images/customized/custom-dog-blue.png",
            "./images/customized/custom-dog_lightbliue.png",
            "./images/customized/custom-dog-gray.png",
            "../images/customized/custom-dog-coffee.png",
          ],
          tags: [
            "../images/customized/bbon_original-01.png",
            "../images/customized/tie_original-02.png",
            "../images/customized/cat_original-03.png",
            "../images/customized/heart_original-04.png",
            "../images/customized/sbon_original-05.png",
            "../images/customized/star_original-06.png",

          ],

        },

        {
          chooscollar: ["./images/customized/custom-dogb1.png"]
        },
      ]
    },
    methods: {

   
      next() {
        if (this.choosePet > -1 ) {
        this.currentPage++;
        
        if (this.currentPage > circles.length) {
          this.currentPage = circles.length;
        };
        this.update()
      }else {
        alert("請選擇一種文字風格");
      }
      },

      pag2next(){
        if (this.chooseTags > -1 ) {
          this.currentPage++;
          
          if (this.currentPage > circles.length) {
            this.currentPage = circles.length;
          };
          this.update()
        }else {
          alert("請選擇一種文字風格");
        }
      },

      prev() {

        this.currentPage--;

        if (this.currentPage < 1) {
          this.currentPage = 1;
        };
        this.update()
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
        progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

        if (this.currentPage === 1) {
          prevbtn.disabled = true;
        } else if (this.currentPage === circles.length) {
          nextbtn.disabled = true;
        } else {
          prevbtn.disabled = false;
          nextbtn.disabled = false;
        }
      },
      addText(e) {
        if (this.strokeWidth == -1) {
          alert("請選擇一種文字風格");
          return;
        } else if (this.textFontFamily === "default") {
          alert("請選擇一種字體");
          return;
        } else if ($('#textContent1').value == "") {
          alert("請先輸入文字");
          return;
        } else if (this.strokeWidth == 1)  {
          let text = new fabric.Text($('#textContent1').val(), {
            fontFamily: this.textFontFamily,
            fontSize: 24,
            left: 100,
            top: 100,
            stroke: defaultColor,
            strokeWidth: this.strokeWidth,
            fill: 'rgba(0,0,0,0)',
          }).setControlsVisibility(HideControls);
          canvas.add(text);
          $('#textContent1').value = "";
        }else {
          let text = new fabric.Text($('#textContent1').val(), {
            fontFamily: this.textFontFamily,
            fontSize: 24,
            left: 100,
            top: 100,
            stroke: defaultColor,
            strokeWidth: this.strokeWidth,
          }).setControlsVisibility(HideControls);
          canvas.add(text);
          $('#textContent1').value = "";
        }},
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
        //   this.choosePet = pid
        // },

        
      },


    })
  // ============================= js =========================



  // 第一部預設
  $('.currentPet').css('opacity', '0')
  $('#next-btn').css('display', 'none')

  $('.prd').click(function () {
    $('.currentPet').css('opacity', '1')
    $('#next-btn').fadeIn()
  })
//回來重新按
  $('#prev-btn').click(function (e) {
    $('#next-btn').fadeOut();
    $('.prd').click(function () {
        $('#next-btn').fadeIn()
    })
  })


  //2
  $('#next-btn').click(function (e) {
    $(this).fadeOut();
    $('.prd').click(function () {
        $('#next-btn').fadeIn()
    });

    $('#cus_step3').click(function () {
      $('#next-btn').fadeIn()
      return;
  });


  })




  var HideControls = {
    'tl': true, //左上   top left
    'tr': true, //右上   top right          
    'bl': true, //左下   bottom left
    'br': true, //右下   bottom right
    'ml': true, //中左   middle left
    'mt': true, //中上   middle top
    'mr': true, //中右   middle right
    'mb': true, //中下   middle bottom
    'mtr': true, //中上控制角度     middle top rotate 
  };
  // var previewArea = document.getElementById('preview_area');
  var canvas = new fabric.Canvas('canvas');
  var context = canvas.getContext('2d');
  //color

  
 //手機版變touch
function touchHandler(event) {
  var touch = event.changedTouches[0];
  var simulatedEvent = document.createEvent("MouseEvent");
      simulatedEvent.initMouseEvent({
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup"
  }[event.type], true, true, window, 1,
      touch.screenX, touch.screenY,
      touch.clientX, touch.clientY, false,
      false, false, false, 0, null);

  touch.target.dispatchEvent(simulatedEvent);
  event.preventDefault();
}


});

