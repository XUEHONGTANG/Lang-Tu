Vue.component('listli', {
    props:['lists','currentPage'],
    data(){
        return{
            htmlURL:'./sponsored_page.html?id=',
            imgURL:'./images/Meteor/',
            // lists:[
            //     // {
            //     //     pet:'sponsored_page.html',
            //     //     image: 'dogeat.png', 
            //     //     title:'與浪共食｜浪毛孩不再飢餓',
            //     //     lowTime:'剩下11小時',
            //     //     lowMoney:'222,345',
            //     // },
            // ]
        }
    },
    computed: {
        // 這邊做篩選
        filterAnimals() {
                // return this.animals;
                let _lists = [];
                _lists = this.lists.slice((this.currentPage-1)*6, (this.currentPage-1)*6+6);
                return _lists;
            }
    },
    template: `
    <ul class="sponsored_List-ul">
        <li v-for="list in filterAnimals" :key="fid" class="sponsored_List-li">
            <div class="sponsored_List-div">
                <a  :href="'./sponsored_page.html?id='+list.fid">
                    <img :src="imgURL+list.ListImg" alt="">
                    <h3>{{list.Name}}</h3>
                    <div class="sponsored_List-border radius"></div>
                    <div class="sponsored_List-in">
                        <svg class="sponsored_List-svg" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4154 8.08398C16.1966 6.86523 14.6029 6.25065 12.9987 6.25065V12.5007L8.58203 16.9173C11.0195 19.3548 14.9779 19.3548 17.4258 16.9173C19.8633 14.4798 19.8633 10.5215 17.4154 8.08398ZM12.9987 2.08398C7.2487 2.08398 2.58203 6.75065 2.58203 12.5007C2.58203 18.2507 7.2487 22.9173 12.9987 22.9173C18.7487 22.9173 23.4154 18.2507 23.4154 12.5007C23.4154 6.75065 18.7487 2.08398 12.9987 2.08398ZM12.9987 20.834C8.39453 20.834 4.66536 17.1048 4.66536 12.5007C4.66536 7.89648 8.39453 4.16732 12.9987 4.16732C17.6029 4.16732 21.332 7.89648 21.332 12.5007C21.332 17.1048 17.6029 20.834 12.9987 20.834Z" fill="#2D2D2D"/></svg>
                        <h4>{{list.EndDate}}</h4>
                        <p>NT{{list.Now}}</p>
                    </div>
                </a>
            </div>
        </li>
    </ul>
    `,
})


new Vue({
    el:'#sponsored_ListApp',
    data:{
        pages:0,
        currentPage: 1,
        content: 'listli',
        lists:[],
    },
    mounted() {
        fetch('../php/sponsored_List.php')
        .then(resp => resp.json())
        .then(resp => {
            this.lists = resp;
            this.pages = Math.ceil(this.lists.length /6);
            // 上面是陣列的頁碼長度去除已三 讓頁碼可以劃分資料
        });
    },
    methods: {
        pagepet(index){
            console.log(index)
            this.currentPage = index;
            // 點擊頁碼等於他的質去控制顯示第幾頁
            
        },
        left(){
            this.currentPage--
            if(this.currentPage <=0){
                this.currentPage=1
            }
        },
        right(){
            this.currentPage++
            if(this.currentPage >= this.pages){
                this.currentPage = this.pages
            }
        },
    },
});

// 

