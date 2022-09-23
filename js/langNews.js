
//容器方式
        // Vue.component('news-card', {
        //     // template: '#vue-card',
        //     props: ['post'],
        //     // data() {
        //     //     return {

        //     //     }
        //     // },
        //     template: `
        //     <div>
        //     <a href="./langNews-cont.html" class="News_cont">
        //         <img :src="post.image"  alt="">
        //             <p>{{ post.title }}</p>
        //             <div class="date_box">
        //                 <span class="year">{{ post.year }}</span>
        //                 <span class="date">{{ post.date }}</span>
        //             </div>
        //         </a>
        //     </div>
        //     `,
        // });

        // date:'2022-10-14',
        // views:'1.4k',
        // title: '狗狗出門就爆衝？正確遛狗有撇步｜PetTalk愛寵健康談',
        // image: './images/news_cont/4HYqC4RBV=7pi7i_191008散步CS5.png',
        // collet: '160',
        // category: 'NEWS',



        new Vue({
            el: '#app',
            data: {
                currentFilter: 'ALL',
                posts: [
            
                    {   
                        views:' ',
                        title: '',
                        image: ' ',
                        year: ' ',
                        date: ' ',
                        category: ' ',
                        collet:'',
                        content:'',
                        
                    },
                    // {
                    //     title: '對於結紮你也有這些疑問嗎?',
                    //     image: './images/Derrick/new3.jpg',
                    //     year: '2022',
                    //     date: '02/20',
                    //     category: 'NEWS',
                    //     collet:'20',
                    // },
                    // {
                    //     title: '犬隻體溫高於人體1-2度，更容易在炎熱氣候產生不適，飼主於家中室內可開空調風扇降低溫度',
                    //     image: './images/Derrick/new4.jpg',
                    //     year: '2022',
                    //     date: '03/20',
                    //     category: 'NEWS',
                    //     collet:'20',
                    // },
                    // {
                    //     title: '多用耐心陪伴狗狗，並且也要多做功課',
                    //     image: './images/Derrick/new5.jpg',
                    //     year: '2022',
                    //     date: '03/20',
                    //     category: 'NEWS',
                    //     collet:'20',
                    // },
                    // {
                    //     title: '做個好主人，請為家中犬貓絕育吧！',
                    //     image: './images/Derrick/new6.jpg',
                    //     year: '2022',
                    //     date: '04/20',
                    //     category: 'NEWS',
                    //     collet:'20',
                    // },
                    // {
                    //     title: '預防毛寶貝高溫中暑 浪途中途之家啟動防熱措施',
                    //     image: './images/Derrick/new7.jpg',
                    //     year: '2022',
                    //     date: '05/20',
                    //     category: 'ANNOUNCE',
                    //     collet:'20',
                    // },
                    // {
                    //     title: '浪浪問題該如何解決?',
                    //     image: './images/Derrick/new8.jpg',
                    //     year: '2022',
                    //     date: '03/20',
                    //     category: 'NEWS',
                    //     collet:'20',
                    // },
                    // {
                    //     title: '動物保護觀念已是全球普世價值，對流浪動物管理現階段採取零安樂死及全面結紮等措施',
                    //     image: './images/Derrick/new9.jpg',
                    //     year: '2022',
                    //     date: '06/20',
                    //     category: 'ACTIVITY',
                    //     collet:'20',
                    // },
                    // {
                    //     title: '毛小孩老是犯錯怎麼辦? 四招教給你!',
                    //     image: './images/Derrick/new10.jpg',
                    //     year: '2022',
                    //     date: '01/20',
                    //     category: 'NEWS',
                    //     collet:'20',
                    // },
                    // {
                    //     title: '浪途中途之家致力守護轄內收容毛寶貝身心健康',
                    //     image: './images/Derrick/new11.jpg',
                    //     year: '2022',
                    //     date: '01/20',
                    //     category: 'NEWS',
                    //     collet:'20',
                    // },
                    // {
                    //     title: '2022 寵物用品展 贈票中',
                    //     image: './images/Derrick/new12.jpg',
                    //     year: '2022',
                    //     date: '01/20',
                    //     category: 'ACTIVITY',
                    //     collet:'20',
                    // },
                    // {
                    //     title: '世界糖尿病日 毛小孩也可能會得糖尿病!',
                    //     image: './images/Derrick/new13.jpg',
                    //     year: '2022',
                    //     date: '01/20',
                    //     category: 'NEWS',
                    //     collet:'20',
                    // },
                    // {
                    //     title: '共度白色情人節 單身狗貓要小心!',
                    //     image: './images/Derrick/new14.jpg',
                    //     year: '2022',
                    //     date: '01/20',
                    //     category: 'ACTIVITY',
                    //     collet:'20',
                    // },
                    // {
                    //     title: '其實貓狗跟人類一樣，都會調皮犯錯誤',
                    //     image: './images/Derrick/new15.jpg',
                    //     year: '2022',
                    //     date: '01/20',
                    //     category: 'NEWS',
                    //     collet:'20',
                    // },
                ]
            },
            methods: {
                setFilter: function (filter) {
                    this.currentFilter = filter;
                },
            },
            mounted() {
                fetch('../php/news_content.php')
                .then(resp => resp.json())
                .then(resp => this.posts = resp)

            },

        });



