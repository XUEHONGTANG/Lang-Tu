Vue.component('pettext', {
    data(){
        return{
            textnames:[
                {
                    dest:`在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂，賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。<br>(若有救援時的照片影片請提供)`,
                    fix:`未`,
                    microchip:`已植入`,
                }
            ],
        }
    },
    template:
    `
        <div v-for="textname in textnames" class="petpage-tt-on">
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
    `,
})

new Vue({
    el:'#petPageApp',
    data: {
        petimg: 0,
        imgList:[
            "./images/Meteor/dog4.png",
            "./images/Meteor/dog5.png",
            "./images/Meteor/dog6.png",
            "./images/Meteor/dog7.png",
            "./images/Meteor/dog8.png",
            "./images/Meteor/dog9.png",
            "./images/Meteor/dog9.png",
            "./images/Meteor/dog9.png",
            "./images/Meteor/dog9.png",
        ],
        content:'pettext',
    },
    mounted(){
        // var swiper = new Swiper(".mySwiper", {
        //     loop: false,
        //     pagination: {
        //         el: ".swiper-pagination",
        //     },
        // });
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
    
});