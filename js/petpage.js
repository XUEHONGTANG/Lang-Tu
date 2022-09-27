Vue.component('pettext', {
    props:['textnames'],
    data(){
        return{
            
        }
    },
    template:
    `<div>
        <div v-for="textname in textnames"  class="petpage-tt-on">
            <h1>救援經過</h1>
            <p>{{textname.dest}}</p>
            <ul>
                <li>預防針施打狀況(下一次施打時間)7/18、8/5</li>
                <li>幼犬(2-6個月)驗腸炎、犬瘟快篩是否通過：過關</li>
                <li>上一次體內驅蟲時間：8/1</li>
                <li>上一次體外驅蟲時間：8/1</li>
                <li>是否結紮：{{textname.fix}}</li>
                <li>目前是否已植入晶片：{{textname.microchip}}</li>
                <li>是否親貓：親</li>
                <li>是否親人：親</li>
                <li>是否親狗：親</li>
                <li>有沒有特別習慣：無</li>
                <li>有沒有什麼需要特別照顧的地方：奶狗一天四餐一餐6分米杯</li>
            </ul>
        </div>
    </div>`,
    mounted(){
    },
})

new Vue({
    el:'#petPageApp',
    data: {
        petimg: 0,
        imgURL:'./images/Meteor/',
        imgList:[
            // "./images/Meteor/sdog2.png",
            // "./images/Meteor/sdog2-1.png",
            // "./images/Meteor/sdog2-2.png",
            // "./images/Meteor/sdog2-3.png",
            // "./images/Meteor/sdog2-4.png",
            // "./images/Meteor/sdog2-5.png",
        ],
        fakeList:[0,1,2,3,4,5],
        content:'pettext',
        textnames:[],
    },
    mounted(){
        var getUrlString = location.href;
        var url = new URL(getUrlString);
        var id = url.searchParams.get('id');
            
            fetch(`../php/searchCatAndDog-content.php?id=`+id,{
                method: "GET",
            })
            .then(resp => resp.json())
            .then(resp => {this.textnames = resp;});
            // .then(resp => {this.imgList = resp;});
           
            fetch(`../php/searchCatAndDog-image.php?id=`+id,{
                method: "GET",
            })
            .then(resp => resp.json())
            .then(resp => {
                // console.log(resp);
                this.imgList = resp[0].image2.substr(0,resp[0].image2.length-1).split(",");
                // this.imgList = resp;
            
            });
            // console.log(imgList);

        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 5,
            spaceBetween: 16,
            slidesPerGroup: 5,
            loop: false,
            loopFillGroupWithBlank: false,
            pagination: {
            //   el: ".swiper-pagination",
              clickable: true
            },
            // navigation: {
            // nextEl: ".swiper-button-next",
            // prevEl: ".swiper-button-prev",
            // },
          })
    },
    computed: {
        
    },
    
});