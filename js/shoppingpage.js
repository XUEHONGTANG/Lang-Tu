   //   codepen參考: https://codepen.io/abdon-gahungu/pen/eYdxVmz?editors=1000

   new Vue({
    el: '#sidebarApp',
    data:{
        isOpen: false,
        reactArr:[],
        olClass: 'hide',
    },
    mounted() {
      let reactTotal = document.querySelectorAll('.hide')
      // console.log(reactTotal);
      reactTotal.forEach((item) => {
        this.reactArr.push(item)
        console.log(this.reactArr);
      });
    },
    methods:{
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


                        // this.reactArr[i].class = 'hide';
                        // this.reactArr[i].chevron = 'fa fa-chevron-down';
                    }
                }
            }else if(this.isOpen === true && this.reactArr[order].classList.contains('hide') ){
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
                
                // this.reactArr[order].class = 'hide';
                // this.reactArr[order].chevron = 'fa fa-chevron-down';
                this.isOpen = false;
            }
        },
    },
    // computed:{
    //   num(index){
    //     let length = this.reactArr.length, i = 0, arr = [];
    //     for(i;i < length; i++){
    //       arr.push(i)
    //     }
    //     index = arr[i]
    //   },
    // },
});

new Vue({
  el: '#productsApp',
  data:{
    products:['1','2','3','4','5','6','7','8']
  },
})

new Vue({
  el: '#pageApp',
  data:{
    pages:['2','3','4']
  },
})