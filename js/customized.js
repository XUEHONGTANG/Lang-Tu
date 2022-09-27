$(document).ready(function () {


  Vue.component('custom_btn',{
    data () {
      return {
        
      }
    },

   
    methods: {
      process() {
        let currentPage = 1;
        const prevbtn = document.getElementById("prev-btn");
        const nextbtn = document.getElementById("next-btn");
        const circles = document.querySelectorAll(".circle");
        const progress = document.getElementById("progress");
        const actives = document.querySelectorAll(".active");

        nextbtn.addEventListener("click", () => {
          currentPage++;
          if (currentPage > circles.length) {
            currentPage = circles.length;
          }
          update()
        });
  
        prevbtn.addEventListener("click", () => {
          currentPage--;
  
          if (currentPage < 1) {
            currentPage = 1;
          }
          update()
  
        })
        function update () {
            circles.forEach((circle, idx) => {
              if (idx < currentPage) {
                circle.classList.add("active");
              } else {
                circle.classList.remove("active");
              }
            });
      
            progress.style.width =
              ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
      
            if (currentPage === 1) {
              prevbtn.disabled = true;
            } else if (currentPage === circles.length) {
              nextbtn.disabled = true;
            } else {
              prevbtn.disabled = false;
              nextbtn.disabled = false;
            }
          }
          
      }
    }
    
    ,
    template: `
    <div class="progress-content">
    <div class="cus_step-select">
        <button id="prev-btn" class="custom_btn" @click="process"  disabled><i
                class="fa-solid fa-circle-arrow-left"></i>上一步</button>
        <button id="next-btn" class="custom_btn" @click="process"  >下一步<i
                class="fa-solid fa-circle-arrow-right"></i></button>
    </div>
    <div class="progress-cont">
        <div class="progress-container">
            <div class="progress" id="progress"></div>
            <div class="circle active">1</div>
            <div class="circle">2</div>
            <div class="circle">3</div>
            <div class="circle">4</div>
        </div>
    </div>
  </div>
    `,
  })




  let vm = new Vue({
    el: '#customizedApp',
    data: {
      currentPage: 1,
      schemas: [
        {
          step: "第一步",
        },

        {
          step: "第二步",
          title: "挑選皮帶",
          image: [
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
          ]
        },

        {
          step: "第三步",
          title: "挑選吊牌",
          pruduct: [
            "./images/customized/custom- tag01.png",
            "./images/customized/custom- tag01.png",
            "./images/customized/custom- tag01.png",
            "./images/customized/custom- tag01.png",
            "./images/customized/custom- tag01.png",
            "./images/customized/custom- tag01.png",

          ],
          price: [
            "100",
            "150",
            "100",
            "100",
            "100",
            "150",
          ]
        },
      ],
    },
  

  })



  // let currentPage = 1;

  // nextbtn.addEventListener("click", () => {
  //   currentPage++;

  //   if (currentPage > circles.length) {
  //     currentPage = circles.length;
  //   }
  //   update();
  // });

  // prevbtn.addEventListener("click", () => {
  //   currentPage--;

  //   if (currentPage < 1) {
  //     currentPage = 1;
  //   }

  //   update();
  // });

  // function update() {
  //   circles.forEach((circle, idx) => {
  //     if (idx < currentPage) {
  //       circle.classList.add("active");
  //     } else {
  //       circle.classList.remove("active");
  //     }
  //   });

  //   const actives = document.querySelectorAll(".active");
  //   progress.style.width =
  //     ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  //   if (currentPage === 1) {
  //     prevbtn.disabled = true;
  //   } else if (currentPage === circles.length) {
  //     nextbtn.disabled = true;
  //   } else {
  //     prevbtn.disabled = false;
  //     nextbtn.disabled = false;
  //   }
  // }



});