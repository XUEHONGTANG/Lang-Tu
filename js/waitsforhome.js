Vue.component('CatAndDog', {
    props:['animalType','animals','currentPage'],
    // 變數資料是由父層傳子層接收 所以需要給變數
    data(){
        return{
            
            // htmlURL:'./petpage.html',
            // htmlURL:"'./petpage.html?id='+animal.pid",
            imgURL:'./images/Meteor/',
            // animals:[],
            // currentPage: 1,
            
        }
    },
    computed: {
        // 這邊做篩選
        filterAnimals() {
            console.log(this.animalType);
            if(!this.animalType){
                // return this.animals;
                let _animals = [];
                _animals = this.animals.slice((this.currentPage-1)*3, (this.currentPage-1)*3+3);
                return _animals;
            }
            let _animals = this.animals.filter((animal) => {
                return animal.pkind  === this.animalType;
               })
            
            _animals = _animals.slice(this.currentPage-1,this.currentPage*3);
            return _animals;
            }
    },
    // watch: {
    //     filterAnimals(newValue){
    //         this.$emit('update-animals',newValue)
    //     },
    // },
    template: `
    <div>
    <ul v-for="animal in filterAnimals" :key="pid">
        <a  :href="'./petpage.html?id='+animal.pid"  >
            <li class="waitsforhome-li">
                <div class="home-1">
                    <div class="dogpp">
                        <img :src="imgURL+animal.image" alt="">
                    </div>
                    <div class="dogtt">
                        <h1>{{animal.name}}</h1>
                        <h4>收養日期:{{animal.date}} 性別:{{animal.gender}}</h4>
                        <p>◎救援經過：{{animal.dest}}</p>
                        <p>◎預防針施打狀況：{{animal.vax}}</p>
                    </div>
                </div>
            </li>
        </a>
    </ul>
    </div>
    `,
    mounted(){
        // fetch('../php/searchCatAndDog.php')
        //     .then(resp => resp.json())
        //     .then(resp => this.animals = resp);
    },
    
    
})


new Vue({
    el: '#waitsforhomeApp',
    data: {
        classObj: {
            'ballstyle': false,
        },
        isOpen: false,
        reactArr: [],
        olClass: 'hide',
        // pages: ['1','2', '3', '4'],

        pages:0,
        
        currentPage: 1,
        //預設從第一頁開始
        content: 'CatAndDog',
        // content頁面
        animalType:null,
        // 為了點擊click事件所設定的變數
        animals:[],
        
        // 接收資料的空陣列 擺出來放 為了可以做頁碼
        // animalType: ['brown','flower','black','white','smalldog','mediumdog','bigdog']
    },
    mounted() {
        
        let reactTotal = document.querySelectorAll('.hide')
        // console.log(reactTotal);
        reactTotal.forEach((item) => {
            this.reactArr.push(item)
            console.log(this.reactArr);
        });
        
        // PHP也由外面接收 去跑陣列
        fetch('../php/searchCatAndDog.php')
        .then(resp => resp.json())
        .then(resp => {
            this.animals = resp;
            this.pages = Math.ceil(this.animals.length /3);
            // 上面是陣列的頁碼長度去除已三 讓頁碼可以劃分資料
            
            
        });
    },
    methods: {
        pagepet(index){
            console.log(index)
            this.currentPage = index;
            // 點擊頁碼等於他的質去控制顯示第幾頁
            
        },
        
        itemClick(value){
            this.animalType = value;
            let _animals = this.animals.filter((animal) => {
                return animal.pkind  === this.animalType;
            })
            this.pages = Math.ceil(_animals.length /3);
            this.currentPage = 1;
            console.log(value);
            
            // 這邊是頁碼 篩選過後的資料顯示 篩選完後頁碼都要切回第一頁
            
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
        // changeColor(){
        //     if(this.currentPage == this.pages){
        //         return true
        //     }else{
        //         return false
        //     }
        // },
        // updateAnimals(newAnimals) {
        //     this.pages = newAnimals.length/ 3;
        //     this.currentPage = 1;
        // },
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