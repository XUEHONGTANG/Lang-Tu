new Vue({
    el: '#sponsorPageApp',
    data: {
        sponsor: [],
        currentPlan: 1,
        btn1: false,
        btn2: false,
    
    
    },
    methods: {
        changeColor(){
            if(this.currentPlan == 1){
                this.btn1 = false
                this.btn2 = false
            }else if(this.currentPlan == 2){
                this.btn1 = true
                this.btn2 = true
            }
        },
        sponsorContent(val){
            sessionStorage.setItem("plan", val)
        },
        sponsorPic(val){
            sessionStorage.setItem("planPic", val)
        }
    },
    mounted() {
        fetch('../php/searchSponsor.php')
        .then(resp => resp.json())
        .then(resp => this.sponsor = resp)
    },
})