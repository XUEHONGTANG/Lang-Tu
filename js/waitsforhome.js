
Vue.component('smalldog', {
    data(){
        return{
            htmlURL:'./',
            imgURL:'./images/Meteor/',
            animals:[
                {
                    pet:'petpage.html',
                    image: 'dog1.png', 
                    name: '小黃', 
                    year: '2022', 
                    month: '3', 
                    gender: '女生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '7/31'
                },
                {
                    pet:'petpage.html',
                    image: 'dog2.png', 
                    name: '可樂', 
                    year: '2022', 
                    month: '4', 
                    gender: '男生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '5/10'
                },
                {
                    pet:'petpage.html',
                    image: 'dog3.png', 
                    name: '球球', 
                    year: '2022', 
                    month: '5', 
                    gender: '女生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
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
                        <p>{{animal.dest}}</p>
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
                    image: 'dog1.png', 
                    name: '金寶三', 
                    year: '2022', 
                    month: '3', 
                    gender: '女生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '7/31'
                },
                {
                    pet:'petpage.html',
                    image: 'dog2.png', 
                    name: '理容號', 
                    year: '2022', 
                    month: '4', 
                    gender: '男生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '5/10'
                },
                {
                    pet:'petpage.html',
                    image: 'dog3.png', 
                    name: '羅志祥', 
                    year: '2022', 
                    month: '5', 
                    gender: '女生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
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
                        <p>{{animal.dest}}</p>
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
                    image: 'dog1.png', 
                    name: '林俊傑', 
                    year: '2022', 
                    month: '3', 
                    gender: '女生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '7/31'
                },
                {
                    pet:'petpage.html',
                    image: 'dog2.png', 
                    name: '蔡依林', 
                    year: '2022', 
                    month: '4', 
                    gender: '男生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '5/10'
                },
                {
                    pet:'petpage.html',
                    image: 'dog3.png', 
                    name: '鄧紫棋', 
                    year: '2022', 
                    month: '5', 
                    gender: '女生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
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
                        <p>{{animal.dest}}</p>
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
                    image: 'dog1.png', 
                    name: '花花', 
                    year: '2022', 
                    month: '3', 
                    gender: '女生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '7/31'
                },
                {
                    pet:'petpage.html',
                    image: 'dog2.png', 
                    name: '小雨', 
                    year: '2022', 
                    month: '4', 
                    gender: '男生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '5/10'
                },
                {
                    pet:'petpage.html',
                    image: 'dog3.png', 
                    name: '大東', 
                    year: '2022', 
                    month: '5', 
                    gender: '女生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
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
                        <p>{{animal.dest}}</p>
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
                    image: 'dog1.png', 
                    name: '陳小春', 
                    year: '2022', 
                    month: '3', 
                    gender: '女生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '7/31'
                },
                {
                    pet:'petpage.html',
                    image: 'dog2.png', 
                    name: '妝柏岳', 
                    year: '2022', 
                    month: '4', 
                    gender: '男生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '5/10'
                },
                {
                    pet:'petpage.html',
                    image: 'dog3.png', 
                    name: '倪安東', 
                    year: '2022', 
                    month: '5', 
                    gender: '女生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
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
                        <p>{{animal.dest}}</p>
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
                    image: 'dog1.png', 
                    name: '胡戈', 
                    year: '2022', 
                    month: '3', 
                    gender: '女生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '7/31'
                },
                {
                    pet:'petpage.html',
                    image: 'dog2.png', 
                    name: '辜戰', 
                    year: '2022', 
                    month: '4', 
                    gender: '男生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '5/10'
                },
                {
                    pet:'petpage.html',
                    image: 'dog3.png', 
                    name: '棋鈺', 
                    year: '2022', 
                    month: '5', 
                    gender: '女生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
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
                        <p>{{animal.dest}}</p>
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
                    image: 'dog1.png', 
                    name: '止戈', 
                    year: '2022', 
                    month: '3', 
                    gender: '女生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '7/31'
                },
                {
                    pet:'petpage.html',
                    image: 'dog2.png', 
                    name: '沙沙', 
                    year: '2022', 
                    month: '4', 
                    gender: '男生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
                    vax: '5/10'
                },
                {
                    pet:'petpage.html',
                    image: 'dog3.png', 
                    name: '小立', 
                    year: '2022', 
                    month: '5', 
                    gender: '女生',
                    dest: `◎救援經過：
                    在南投集集一工程處許多母帶子浪犬在貨車卡車來來往往的道路旁求生，已經有不少幼犬當了車輪下的亡魂。
                    賴愛媽不捨這些幼犬還未真正探索這個世界就當了天使，撈了其中一窩幼犬送養。
                    (若有救援時的照片影片請提供)`,
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
                        <p>{{animal.dest}}</p>
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