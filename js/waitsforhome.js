
Vue.component('smalldog', {
    data(){
        return{
            htmlURL:'./',
            imgURL:'./images/Meteor/',
            animals:[
                {
                    pet:'petpage.html',
                    image: 'sdog1.png', 
                    name: '小黃', 
                    year: '2022', 
                    month: '3', 
                    gender: '女生',
                    dest: `
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '7/31'
                },
                {
                    pet:'petpage.html',
                    image: 'sdog2.png', 
                    name: '可樂', 
                    year: '2022', 
                    month: '4', 
                    gender: '男生',
                    dest: `
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '5/10'
                },
                {
                    pet:'petpage.html',
                    image: 'sdog3.png', 
                    name: '球球', 
                    year: '2022', 
                    month: '5', 
                    gender: '女生',
                    dest: `浪途志工在執行偏鄉節育任務時，意外發現一隻懷孕的狗媽媽因為現場環境覓食不易，志工就將狗媽媽帶回動物醫院安置待產。狗媽媽一共生下四隻小幼犬， 其中一隻就是球球。幼犬們一度因營養不良而生命垂危；所幸在醫生和志工細心的照護下，小幼犬們都健康活潑的長大了！球球較為害怕陌生人及外面的環境，外出散步可能還需花時間適應，個性溫和對於貓狗都相當友善，喜歡與其他狗狗互動。`,
                    vax: '8/30'
                }
            ],
        }
    },
    template: `
    <ul>
        <a v-for="animal in animals" :href="htmlURL+animal.pet">
            <li class="waitsforhome-li">
                <div class="home-1">
                    <div class="dogpp">
                        <img :src="imgURL+animal.image" alt="">
                    </div>
                    <div class="dogtt">
                        <h1>{{animal.name}}</h1>
                        <h4>收養日期:約{{animal.year}}/{{animal.month}}月 性別:{{animal.gender}}</h4>
                        <p>◎救援經過：{{animal.dest}}</p>
                        <p>◎預防針施打狀況(下一次施打時間)：{{animal.vax}}</p>
                    </div>
                </div>
            </li>
        </a>
    </ul>
    `,
})
Vue.component('mediumdog', {
    // data: function(){},
    data(){
        return{
            htmlURL:'./',
            imgURL:'./images/Meteor/',
            animals:[
                {
                    pet:'petpage.html',
                    image: 'mdog1.png', 
                    name: '金寶三', 
                    year: '2018', 
                    month: '3', 
                    gender: '女生',
                    dest: `
                    浪途志工偶然發現獨自在外流浪的小幼犬-金寶三。志工擔心險惡的環境不利於幼犬生存，便將幼犬送往動物醫院檢查及安置，幸好金寶三的身體十分健康。金寶三雖然有點怕生，但給她一點時間適應後就會恢復親人又親狗的個性囉！`,
                    vax: '7/31'
                },
                {
                    pet:'petpage.html',
                    image: 'mdog2.png', 
                    name: '理容號', 
                    year: '2021', 
                    month: '4', 
                    gender: '男生',
                    dest: `
                    個性容易緊張但沒有攻擊性，親狗但有些怕人，需有耐心培養信任，適應環境也需要較長時間`,
                    vax: '5/10'
                },
                {
                    pet:'petpage.html',
                    image: 'mdog3.png', 
                    name: '志祥', 
                    year: '2019', 
                    month: '9', 
                    gender: '女生',
                    dest: `
                    浪途救援小組接獲通報，前往屏東來義一處校園救援白骨外露的志祥。志祥的左後腿小腿處整截消失露出大腿骨，因斷裂處十分整齊，很有可能是遭利器砍傷。即使遭受這樣的傷害，志祥仍十分乖巧溫馴。因志祥一直在流鼻血，獸醫為他檢查後發現鼻腔裡有多隻水蛭入侵，總共夾出了15隻水蛭，數量相當驚人。左後腳進行截肢手術，傷口已癒合，雖然只有三隻腳但不影響日常散步行走，健康狀況無礙。親人親狗但陌生人碰觸斷肢會感到恐懼，易受到驚嚇所以互動時動作不能太大，需花一點時間培養信任。`,
                    vax: '8/30'
                }
            ],
        }
    },
    template: `
    <ul>
        <a v-for="animal in animals" :href="htmlURL+animal.pet">
            <li class="waitsforhome-li">
                <div class="home-1">
                    <div class="dogpp">
                        <img :src="imgURL+animal.image" alt="">
                    </div>
                    <div class="dogtt">
                        <h1>{{animal.name}}</h1>
                        <h4>收養日期:約{{animal.year}}/{{animal.month}}月 性別:{{animal.gender}}</h4>
                        <p>◎救援經過：{{animal.dest}}</p>
                        <p>◎預防針施打狀況(下一次施打時間)：{{animal.vax}}</p>
                    </div>
                </div>
            </li>
        </a>
    </ul>
    `,
})
Vue.component('bigdog', {
    // data: function(){},
    data(){
        return{
            htmlURL:'./',
            imgURL:'./images/Meteor/',
            animals:[
                {
                    pet:'petpage.html',
                    image: 'ldog1.png', 
                    name: '俊傑', 
                    year: '2022', 
                    month: '3', 
                    gender: '女生',
                    dest: `
                    個性容易緊張但沒有攻擊性，親狗但有些怕人，需有耐心培養信任，適應環境也需要較長時間`,
                    vax: '7/31'
                },
                {
                    pet:'petpage.html',
                    image: 'ldog2.png', 
                    name: '依林', 
                    year: '2010', 
                    month: '8', 
                    gender: '男生',
                    dest: `
                    個性容易緊張有攻擊性，親狗但有些怕人，需有耐心培養信任，適應環境也需要較長時間`,
                    vax: '5/10'
                },
                {
                    pet:'petpage.html',
                    image: 'ldog3.png', 
                    name: '紫棋', 
                    year: '2020', 
                    month: '8', 
                    gender: '女生',
                    dest: `
                    紫棋、俊傑、球球三隻小狗為一母同胎的姊妹，親人親狗，個性活潑，吃東西相當積極會搶食，`,
                    vax: '8/30'
                }
            ],
        }
    },
    template: `
    <ul>
        <a v-for="animal in animals" :href="htmlURL+animal.pet">
            <li class="waitsforhome-li">
                <div class="home-1">
                    <div class="dogpp">
                        <img :src="imgURL+animal.image" alt="">
                    </div>
                    <div class="dogtt">
                        <h1>{{animal.name}}</h1>
                        <h4>收養日期:約{{animal.year}}/{{animal.month}}月 性別:{{animal.gender}}</h4>
                        <p>◎救援經過：{{animal.dest}}</p>
                        <p>◎預防針施打狀況(下一次施打時間)：{{animal.vax}}</p>
                    </div>
                </div>
            </li>
        </a>
    </ul>
    `,
})

Vue.component('brown', {
    // data: function(){},
    data(){
        return{
            htmlURL:'./',
            imgURL:'./images/Meteor/',
            animals:[
                {
                    pet:'petpage.html',
                    image: 'brcat1.png', 
                    name: '花花', 
                    year: '2021', 
                    month: '1', 
                    gender: '女生',
                    dest: `
                    於自小生長在不當環境，使得花花不知道如何與人及其他貓貓相處，以致於非常敏感及怕生。雖然照護員和志工們都很有耐心的協助花花，不過他還是經常閃躲陌生人的接觸。`,
                    vax: '7/31'
                },
                {
                    pet:'petpage.html',
                    image: 'brcat2.png', 
                    name: '小雨', 
                    year: '2021', 
                    month: '7', 
                    gender: '男生',
                    dest: `
                    小雨過去是一隻流浪貓，曾經因為營養不良導致皮膚問題，所幸被一位好心民眾救援，送到了浪途配合的動物醫院。在醫院待了一段時間的小雨，儘管皮膚問題已經痊癒，卻一直沒能等到溫暖的家，最後由浪途志工帶回收容所照顧。`,
                    vax: '5/10'
                },
                {
                    pet:'petpage.html',
                    image: 'brcat3.png', 
                    name: '大東', 
                    year: '2019', 
                    month: '9', 
                    gender: '女生',
                    dest: `
                    她在街頭流浪長大，沒有一個安穩固定的家，而其他貓貓總是欺負她，讓她從很小就懂得要如何保護自己抵抗其他貓。直到有人救援，並把她送到浪途之家。現在，大東在浪途能過著不需要隨時警戒的日子，也開始變得更愛笑了。經過評估以及訓練等種種考驗，大東現在等著一個願意永遠接納她的家！`,
                    vax: '8/30'
                }
            ],
        }
    },
    template: `
    <ul>
        <a v-for="animal in animals" :href="htmlURL+animal.pet">
            <li class="waitsforhome-li">
                <div class="home-1">
                    <div class="dogpp">
                        <img :src="imgURL+animal.image" alt="">
                    </div>
                    <div class="dogtt">
                        <h1>{{animal.name}}</h1>
                        <h4>收養日期:約{{animal.year}}/{{animal.month}}月 性別:{{animal.gender}}</h4>
                        <p>◎救援經過：{{animal.dest}}</p>
                        <p>◎預防針施打狀況(下一次施打時間)：{{animal.vax}}</p>
                    </div>
                </div>
            </li>
        </a>
    </ul>
    `,
})
Vue.component('flower', {
    // data: function(){},
    data(){
        return{
            htmlURL:'./',
            imgURL:'./images/Meteor/',
            animals:[
                {
                    pet:'petpage.html',
                    image: 'fcat1.png', 
                    name: '陳小春', 
                    year: '2022', 
                    month: '3', 
                    gender: '女生',
                    dest: `
                    個性容易緊張但沒有攻擊性，親貓但有些怕人，需有耐心培養信任，適應環境也需要較長時間`,
                    vax: '7/31'
                },
                {
                    pet:'petpage.html',
                    image: 'fcat2.png', 
                    name: '柏岳', 
                    year: '2009', 
                    month: '6', 
                    gender: '女生',
                    dest: `
                    柏岳在還是小puppy的時候被人發現在髒亂的巷弄中，奄奄一息。慶幸的是，發現他的路人即時把他送到醫院治療。在醫院慢慢恢復健康的柏岳非常活潑可愛，但卻一直沒有遇到願意帶她回家的人，獸醫院迫於無奈向浪途求助，柏岳才開始了在浪途的生活。`,
                    vax: '5/10'
                },
                {
                    pet:'petpage.html',
                    image: 'fcat3.png', 
                    name: '倪安東', 
                    year: '2022', 
                    month: '5', 
                    gender: '女生',
                    dest: `
                    倪安東很年輕時就來到浪途。當時他的狀況並不好，虛弱、營養不良、皮膚病還有寄生蟲的問題，浪途收留並治療他之後，他就一直待在浪途生活。好幾個月前，在經過浪途的評估與訓練之後，我們開始為倪安東找家，但這並不順利。原因並不是倪安東有任何行為問題，僅僅是因為他是一隻花貓，而大部分的人不想要領養一隻花貓。`,
                    vax: '8/30'
                }
            ],
        }
    },
    template: `
    <ul>
        <a v-for="animal in animals" :href="htmlURL+animal.pet">
            <li class="waitsforhome-li">
                <div class="home-1">
                    <div class="dogpp">
                        <img :src="imgURL+animal.image" alt="">
                    </div>
                    <div class="dogtt">
                        <h1>{{animal.name}}</h1>
                        <h4>收養日期:約{{animal.year}}/{{animal.month}}月 性別:{{animal.gender}}</h4>
                        <p>◎救援經過：{{animal.dest}}</p>
                        <p>◎預防針施打狀況(下一次施打時間)：{{animal.vax}}</p>
                    </div>
                </div>
            </li>
        </a>
    </ul>
    `,
})
Vue.component('black', {
    // data: function(){},
    data(){
        return{
            htmlURL:'./',
            imgURL:'./images/Meteor/',
            animals:[
                {
                    pet:'petpage.html',
                    image: 'bcat1.png', 
                    name: '胡戈', 
                    year: '2020', 
                    month: '5', 
                    gender: '女生',
                    dest: `
                    胡戈原先待在高雄的私人動物展演場所，在那裡沒有受到良好的照顧，甚至常常吃喝都成問題。後來，被Taiwan SPCA台灣防止虐待動物協會救援，才安置到浪途，接受浪途的照顧及訓練。但即便如此，胡戈還是沒有因此而不相信人類，甚至對陌生人都非常友善且溫柔。`,
                    vax: '7/31'
                },
                {
                    pet:'petpage.html',
                    image: 'bcat2.png', 
                    name: '辜戰', 
                    year: '2021', 
                    month: '12', 
                    gender: '男生',
                    dest: `
                    平常辜戰在大家眼中愛笑、乖巧又貪吃，但其實這樣可愛的孩子有著一段令人心酸的故事。2021年冬天，寒冷的街頭上，辜戰窩在樓梯口躲避寒風吹襲。好心民眾經過時，赫然發現脖子上戴著大大的板子，上頭寫著：「你們好，我不會咬人，我被棄養了，請收留我。」辜戰捲曲著皮包骨的身體，不斷顫抖，好心民眾實在不忍心，決定幫助他，在一波曲折後，最後找到了浪途之家。在園區度過了八個月，親人又聰明的辜戰現在已經在中途家庭實習，重新適應家庭生活了～`,
                    vax: '5/10'
                },
                {
                    pet:'petpage.html',
                    image: 'bcat3.png', 
                    name: '棋鈺', 
                    year: '2018', 
                    month: '8', 
                    gender: '女生',
                    dest: `
                    她到園區時已經是壯年了，曾經街頭的日子讓她變得非常安靜且內斂，喜歡窩在自己的空間裡。我們猜想她應該是有過一個家庭的，因為你能夠很輕鬆地牽著她走，她會很好的跟隨你的方向、也不太會拉扯繩子。`,
                    vax: '8/30'
                }
            ],
        }
    },
    template: `
    <ul>
        <a v-for="animal in animals" :href="htmlURL+animal.pet">
            <li class="waitsforhome-li">
                <div class="home-1">
                    <div class="dogpp">
                        <img :src="imgURL+animal.image" alt="">
                    </div>
                    <div class="dogtt">
                        <h1>{{animal.name}}</h1>
                        <h4>收養日期:約{{animal.year}}/{{animal.month}}月 性別:{{animal.gender}}</h4>
                        <p>◎救援經過：{{animal.dest}}</p>
                        <p>◎預防針施打狀況(下一次施打時間)：{{animal.vax}}</p>
                    </div>
                </div>
            </li>
        </a>
    </ul>
    `,
})
Vue.component('white', {
    // data: function(){},
    data(){
        return{
            htmlURL:'./',
            imgURL:'./images/Meteor/',
            animals:[
                {
                    pet:'petpage.html',
                    image: 'wcat1.png', 
                    name: '止戈', 
                    year: '2021', 
                    month: '11', 
                    gender: '女生',
                    dest: `
                    “止戈”是隻愛玩但膽子有點小的可愛白貓，常常向人撒嬌，手伸過去摸一摸牠的頭，牠馬上就會調整好牠的姿勢，露出牠那肥嫩嫩的肚子想跟人玩，不過由於還小所以玩得時候不太會控制力道，有時候會玩得太用力。`,
                    vax: '7/31'
                },
                {
                    pet:'petpage.html',
                    image: 'wcat2.png', 
                    name: '沙沙', 
                    year: '2017', 
                    month: '10', 
                    gender: '男生',
                    dest: `
                    本身充滿好奇心，剛到新環境會小心翼翼聞聞周圍，然後再一步一步慢慢擴大探索範圍，不會因為害怕就躲起來。對逗貓棒的反應也蠻不錯的，看到就開始玩，動作迅速敏捷又靈活，一不小心連殘影都看不見。玩累了"沙沙"才會放慢速度，到人身邊晃一晃趴下來享受摸摸。`,
                    vax: '5/10'
                },
                {
                    pet:'petpage.html',
                    image: 'wcat3.png', 
                    name: '小立', 
                    year: '2022', 
                    month: '5', 
                    gender: '女生',
                    dest: `
                    剛來的時候髒髒小小的"小立"，想要兇又沒膽，只敢縮在角落哈氣，被摸到就抖抖抖個不停，是個有點遜的小貓咪。在義工哥哥姐姐們愛的教育下，牠現在已經是白拋拋又健康的好孩子啦！看那雙天真單純的大眼睛，完全沒有讓人拒絕的餘地。`,
                    vax: '8/30'
                }
            ],
        }
    },
    template: `
    <ul>
        <a v-for="animal in animals" :href="htmlURL+animal.pet">
            <li class="waitsforhome-li">
                <div class="home-1">
                    <div class="dogpp">
                        <img :src="imgURL+animal.image" alt="">
                    </div>
                    <div class="dogtt">
                        <h1>{{animal.name}}</h1>
                        <h4>收養日期:約{{animal.year}}/{{animal.month}}月 性別:{{animal.gender}}</h4>
                        <p>◎救援經過：{{animal.dest}}</p>
                        <p>◎預防針施打狀況(下一次施打時間)：{{animal.vax}}</p>
                    </div>
                </div>
            </li>
        </a>
    </ul>
    `,
})



new Vue({
    el: '#waitsforhomeApp',
    data: {
        isOpen: false,
        reactArr: [],
        olClass: 'hide',
        pages: ['2', '3', '4'],
        content: 'smalldog',
    },
    mounted() {
        let reactTotal = document.querySelectorAll('.hide')
        // console.log(reactTotal);
        reactTotal.forEach((item) => {
            this.reactArr.push(item)
            console.log(this.reactArr);
        });
    },
    methods: {
        
        toggle(order) {
            let length = this.reactArr.length,
                i = 0;
            // console.log(length);
            // console.log(this.reactArr[order]);

            if (this.isOpen === false) {
                // console.log(this.reactArr[order]);
                this.reactArr[order].classList.remove('hide');
                this.reactArr[order].classList.add('show');
                // console.log(this.reactArr[order].previousElementSibling);
                this.reactArr[order].previousElementSibling.classList.add('turnRight');
                this.isOpen = true;

                for (i; i < length; i++) {
                    if (order != i) {
                        this.reactArr[i].classList.remove('show');
                        this.reactArr[i].classList.add('hide');
                        this.reactArr[i].previousElementSibling.classList.remove('turnRight');
                    }
                }
            } else if (this.isOpen === true && this.reactArr[order].classList.contains('hide')) {
                this.reactArr[order].classList.remove('hide');
                this.reactArr[order].classList.add('show');
                this.reactArr[order].previousElementSibling.classList.add('turnRight');

                for (i; i < length; i++) {
                    if (order != i) {
                        this.reactArr[i].classList.remove('show');
                        this.reactArr[i].classList.add('hide');
                        this.reactArr[i].previousElementSibling.classList.remove('turnRight');
                    }
                }
            } else {
                this.reactArr[order].classList.remove('show');
                this.reactArr[order].classList.add('hide'); this.reactArr[order].previousElementSibling.classList.remove('turnRight');
                this.isOpen = false;
            }
        },
    },

    

});