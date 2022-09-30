$(document).ready(function(){

// const prevbtn = document.getElementById("prev-btn");
// const nextbtn = document.getElementById("next-btn");
const circles = document.querySelectorAll(".circle");
// const progress = document.getElementById("progress");
// const actives = document.querySelectorAll(".active");
  new Vue({
    el: '#customizedApp',
    data: {
      currentPage: 1,
      content: 'customBtn',
      message:"",
      choosePet:  0,
      chooseTags: -1,
      schemas: [
        {
          title: "今天想幫誰挑項圈呢？",
          animals: ['dog' , 'cat'],
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
          chooscollar:[
            "./images/customized/custom-dog_red.png",
            "./images/customized/custom-dog-yellow.png",
            "./images/customized/custom-dog-blue.png",
            "./images/customized/custom-dog_lightbliue.png",
            "./images/customized/custom-dog-gray.png",
            "./images/customized/custom-dog-coffee.jpg",
          ],
          tags:[]
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
            "NT 200",
            "NT 150",
            "NT 100",
            
          ],
          chooscollar:[
            "./images/customized/custom-dog_red.png",
            "./images/customized/custom-dog-yellow.png",
            "./images/customized/custom-dog-blue.png",
            "./images/customized/custom-dog_lightbliue.png",
            "./images/customized/custom-dog-gray.png",
            "./images/customized/custom-dog-coffee.jpg",
          ],
          tags:[
            "../images/customized/costom-choosetags.png",
            "./images/customized/custom- tag02.png",
            "./images/customized/custom- tag03.png",
            "./images/customized/custom- tag04.png",
            "./images/customized/custom- tag05.png",
   
          ],
        },
        {
          step: "第三步",
          title: "吊牌刻字",
          image: [
            "./images/customized/custom-tag1-big.png",
          ],
          chooscollar:[] 
        },
        {
          step: "訂購完成",
          title: "您的商品已添加至購物車",
          chooscollar:[]
         
        },

        {
          chooscollar:["./images/customized/custom-dogb1.png"]
        },
      ]
    },
    methods: {
    
      next() {
        this.currentPage++;

        if (this.currentPage > circles.length) {
          this.currentPage = circles.length;
        };
        this.update()
      },

      prev() {
        this.currentPage--;

        if (this.currentPage < 1) {
          this.currentPage = 1;
        };
        this.update()
      },

      update(){
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


    },


  })
// ============================= js =========================
    // var customized= {
    //     "id": new Date(),
    //     "boxType":"",
    //     "itemName": '',
    //     "productId":[],
    //     "price": '',
    //     "quantity": 1,
    //     "detail": [],
    //     "detail_Quantity": [],
    //     "card":"",
    //     "cardType":"",
    //     "cardContent": "",
    //     "iconType":[],
    //     "status": false, 
    //     'img': '../images/cart/customized_box.png',      
    // };

// 第一部預設
    $('.currentPet').css('opacity','0');    
    $('.product1>.prd').click(function(e){
      $('.currentPet').css('opacity','1')
      // e.stopPropagation();
    });
// 第二部預設

  // $('.PetTag').css('opacity','0');
  //   $('.tag').click(function(e){
  //     $('.PetTag').css('opacity','1');
  //    e.stopPropagation();
  //   })
});
