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
        imgList:[],
        //裝圖片的陣列
        fakeList:[0,1,2,3,4,5],
        //讓圖片可以做顯示 所以給他預設值
        content:'pettext',
        textnames:[],
        //資料取值的陣列 傳值到子層
        
    },
    mounted(){
        var getUrlString = location.href;
        var url = new URL(getUrlString);
        var id = url.searchParams.get('id');
        //上面三段可以從php取得我們要的值 去做網頁篩選
            
            fetch(`./php/searchCatAndDog-content.php?id=`+id,{
                method: "GET",
            })
            .then(resp => resp.json())
            .then(resp => {this.textnames = resp;});
            
           
            fetch(`./php/searchCatAndDog-image.php?id=`+id,{
                method: "GET",
            })
            .then(resp => resp.json())
            .then(resp => {
                // console.log(resp);
                this.imgList = resp[0].image2.substr(0,resp[0].image2.length-1).split(",");
                // 資料室放在一起的陣列 所以需要從第二筆選取 且篩選掉，
            
            });
            // console.log(imgList);

        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 5,
            spaceBetween: 16,
            slidesPerGroup: 5,
            loop: false,
            loopFillGroupWithBlank: false,
            pagination: {
                clickable: true
            },
          })
    },
    methods: {
        nextpet(){
            //這邊判斷有沒有登入會員 sessionStorage裡面有沒有資料 去決定頁面導向
            if(sessionStorage.account){
                sessionStorage.setItem("pid",this.textnames[0].pid)
                window.location.href = "./precautions.html";
            }else{
                sessionStorage.setItem("pid",this.textnames[0].pid)
                window.location.href = "./login_page.html";
            }
        },
    },
    computed: {
        
    },
    
});