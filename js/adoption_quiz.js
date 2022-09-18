new Vue({
    el: '#adoptionQuizApp',
    data: {
        currentPage: 1,
        class1: {
            'show1': false,
        },
        class2: {
            'show2': false,
        },
        disabled: true,
    },

    methods: {
        next(){
            this.currentPage++;
            this.class1.show1 = false;
            this.class2.show2 = false;
        }
    },

    computed: {
        isDisabled(){
            if(this.class1.show1 != false && this.class2.show2 == false){
                return true 
            }else if(this.class2.show2 != false && this.class1.show1 == false){
                return true
            }
        },

        isShow(){
            if(this.class1.show1 == true){
                return true
            }else if(this.class2.show2 == true){
                return true
            }else{
                return false
            }
        },

        
    }
})