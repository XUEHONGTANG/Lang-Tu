        Vue.component('news-card', {
            // template: '#vue-card',
            name: 1,
            // props: ['post'],
            // data() {
            //     return {

            //     }
            // },
            template: `
            <p>帶狗狗外出散步時，你是和狗狗「一起散步」還是「被拖著散步」呢？<br>
                        狗狗一出門就想暴衝，除了因為太有精力外，大多是因為毛爸媽沒有堅守「主導」的角色喔！<br>
                        讓狗狗學會放慢腳步與你一起並行，就能訓練狗狗避免出現失控的行為。</p>
                    <img class="solid" src="./images/Derrick/solid.png" alt="solid">
                    <p>根據2017年由英國利物浦大學刊載於《國際環境研究與公共衛生期刊》上的一篇研究指出：
                        <strong>飼主帶狗狗出門散步，不僅是為了狗狗的健康，同時自己也會因遛狗而增加快樂與幸福的感覺。</strong>
                        <br>
                        結果還顯示：<br>
                        <strong>遛狗可以增加飼主體能活動量，並與其他狗狗主人社交互動的連帶效益等</strong>。
                    </p>
                    <br>
                    <h4><strong>掌握正確遛狗方式，讓人寵都健康</strong></h4>

                    <p>為了讓狗狗擁有足夠的運動量，以保持身心健康愉快，每天出門散步是必須的！<br>
                        但，每當帶狗狗出門時，你是和狗狗「一起散步」還是「被拖著散步」呢？</p>
                    <br>
                    <p>
                        <br>

                        <strong>主導一切，不讓狗狗拖著你走</strong>

                        <br>
                        當狗狗開始暴衝時，這時<u>抓緊牽繩並站在原點不動</u>，等到狗狗幾次嘗試往前衝但發現你還是不動時，就會停下來，或是回頭找你。
                    </p>
                    <br>
                    <p><strong>適時的獎勵，讓狗狗喜歡上訓練</strong><br>
                        如果狗狗回頭找你，<u>記得用愉悅的音調來讚美牠</u>，<u>也可以給牠小零食獎勵</u>，並繼續剛剛中斷的散步。<br>
                        如果下一次狗狗又想暴衝，就重複剛剛的動作，反覆訓練，通常狗狗就會漸漸趨於穩定的與你並排走。
                    </p>
                    <br>
                    <p> <strong>抓緊牽繩，而非猛拉牽繩</strong> <br>
                        用蠻力制止狗狗的行為可能會造成狗狗受傷，而且還會讓狗狗從此討厭或懼怕外出散步，甚至讓行為更加偏差。
                    </p>

                  


                    <h4><strong>還有其他的遛狗學問，你知道嗎？</strong></h4>

                    <p><strong>凡出門必帶牽繩且不離手</strong><br>
                        有些爸媽會認為家裡的狗狗很乖不會隨便亂跑，或是覺得繫上牽繩可能會限制了狗狗的自由、不舒服，但意外往往就是在一瞬間發生。<br>
                        所以記得確保繫上牽繩再出門，<u>讓危險性降到到最低</u>，<u>也維護路上行人的權益</u>。
                    </p>
                    <br>
                    <p> <strong>依狗狗體型斟酌遛狗的時長</strong> <br>
                        每天散步的時間長度：<br>
                        - 小型犬控制在20～30分鐘<br>
                        - 中型犬約30～40分鐘<br>
                        - 大型犬需要一小時左右
                    </p>
                    <br>
                    <p><strong>要有規律地進行運動</strong><br>
                        有些毛爸媽可能平日沒有時間遛狗，就會選擇在周末帶狗狗各種爬山涉水，但<u>突增的大量運動</u>，<u>容易因為身體難以負荷而讓狗狗有不適反應</u>；如果是年紀稍長的狗狗，還有可能讓關節、脊椎、心臟等受到傷害。
                    </p>
                    <br>

                    <p><strong>做好除蟲防護措施</strong><br>
                        <u>台灣一年四季都有外寄生蟲</u>，最愛毛孩們溫暖又毛絨絨的身體，假如帶狗狗出門卻沒有做任何防護，回家後可能就會在狗狗身上看到壁蝨或跳蚤了。
                    </p>
                    <br>

            

                    <p>遛狗不僅僅是為了讓狗狗的擁有充足的運動量，出門走走、吹吹風、看看路上行人或車子，這些都會給予狗狗的腦部刺激，對預防「失智症」是重要的幫助。
                    </p>

                    <p>此外，如果狗狗已養成每天外出散步及如廁的習慣，就更需要帶牠們出門遛遛，最好不要隨意更改狗狗的生活作息喔！</p>
                    <br>
          
                    <img class="solid" src="./images/Derrick/solid.png" alt="solid" width="100%">
            `,
        });






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
                        views:'1.4k',
                        title: '狗狗出門就爆衝？正確遛狗有撇步｜PetTalk愛寵健康談',
                        image: './images/news_cont/4HYqC4RBV=7pi7i_191008散步CS5.png',
                        year: '2022',
                        date: '01/20',
                        category: 'NEWS',
                        collet:'20',
                        text: `
                        <p><strong>做好除蟲防護措施</strong><br>
                            <u>台灣一年四季都有外寄生蟲</u>，最愛毛孩們溫暖又毛絨絨的身體，假如帶狗狗出門卻沒有做任何防護，回家後可能就會在狗狗身上看到壁蝨或跳蚤了。
                        </p>
                        <br>
    
                
    
                        <p>遛狗不僅僅是為了讓狗狗的擁有充足的運動量，出門走走、吹吹風、看看路上行人或車子，這些都會給予狗狗的腦部刺激，對預防「失智症」是重要的幫助。
                        </p>
    
                        <p>此外，如果狗狗已養成每天外出散步及如廁的習慣，就更需要帶牠們出門遛遛，最好不要隨意更改狗狗的生活作息喔！</p>
                        <br>
              
                        <img class="solid" src="./images/Derrick/solid.png" alt="solid" width="100%">`
                    },
                    {   
                        views:'1.4k',
                        title: '別將巧克力放在犬貓可及之處，避免毛小孩誤食中毒，而留下遺憾',
                        image: './images/Derrick/new2.jpg',
                        year: '2022',
                        date: '02/20',
                        category: 'NEWS',
                        collet:'20',
                        
                    },
                    {
                        title: '對於結紮你也有這些疑問嗎?',
                        image: './images/Derrick/new3.jpg',
                        year: '2022',
                        date: '02/20',
                        category: 'NEWS',
                        collet:'20',
                    },
                    {
                        title: '犬隻體溫高於人體1-2度，更容易在炎熱氣候產生不適，飼主於家中室內可開空調風扇降低溫度',
                        image: './images/Derrick/new4.jpg',
                        year: '2022',
                        date: '03/20',
                        category: 'NEWS',
                        collet:'20',
                    },
                    {
                        title: '多用耐心陪伴狗狗，並且也要多做功課',
                        image: './images/Derrick/new5.jpg',
                        year: '2022',
                        date: '03/20',
                        category: 'NEWS',
                        collet:'20',
                    },
                    {
                        title: '做個好主人，請為家中犬貓絕育吧！',
                        image: './images/Derrick/new6.jpg',
                        year: '2022',
                        date: '04/20',
                        category: 'NEWS',
                        collet:'20',
                    },
                    {
                        title: '預防毛寶貝高溫中暑 浪途中途之家啟動防熱措施',
                        image: './images/Derrick/new7.jpg',
                        year: '2022',
                        date: '05/20',
                        category: 'ANNOUNCE',
                        collet:'20',
                    },
                    {
                        title: '浪浪問題該如何解決?',
                        image: './images/Derrick/new8.jpg',
                        year: '2022',
                        date: '03/20',
                        category: 'NEWS',
                        collet:'20',
                    },
                    {
                        title: '動物保護觀念已是全球普世價值，對流浪動物管理現階段採取零安樂死及全面結紮等措施',
                        image: './images/Derrick/new9.jpg',
                        year: '2022',
                        date: '06/20',
                        category: 'ACTIVITY',
                        collet:'20',
                    },
                    {
                        title: '毛小孩老是犯錯怎麼辦? 四招教給你!',
                        image: './images/Derrick/new10.jpg',
                        year: '2022',
                        date: '01/20',
                        category: 'NEWS',
                        collet:'20',
                    },
                    {
                        title: '浪途中途之家致力守護轄內收容毛寶貝身心健康',
                        image: './images/Derrick/new11.jpg',
                        year: '2022',
                        date: '01/20',
                        category: 'NEWS',
                        collet:'20',
                    },
                    {
                        title: '2022 寵物用品展 贈票中',
                        image: './images/Derrick/new12.jpg',
                        year: '2022',
                        date: '01/20',
                        category: 'ACTIVITY',
                        collet:'20',
                    },
                    {
                        title: '世界糖尿病日 毛小孩也可能會得糖尿病!',
                        image: './images/Derrick/new13.jpg',
                        year: '2022',
                        date: '01/20',
                        category: 'NEWS',
                        collet:'20',
                    },
                    {
                        title: '共度白色情人節 單身狗貓要小心!',
                        image: './images/Derrick/new14.jpg',
                        year: '2022',
                        date: '01/20',
                        category: 'ACTIVITY',
                        collet:'20',
                    },
                    {
                        title: '其實貓狗跟人類一樣，都會調皮犯錯誤',
                        image: './images/Derrick/new15.jpg',
                        year: '2022',
                        date: '01/20',
                        category: 'NEWS',
                        collet:'20',
                    },
                ]
            },
            methods: {
                setFilter: function (filter) {
                    this.currentFilter = filter;
                },
                // shuffle() { 
                //     this.post.sort(() => Math.random() - 0.5); 
                // }
            }
        });


