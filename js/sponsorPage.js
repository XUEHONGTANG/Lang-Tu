new Vue({
    el: '#sponsorPageApp',
    data: {
        imgURL:'./images/Meteor/',
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
        var getUrlString = location.href;
        var url = new URL(getUrlString);
        var id = url.searchParams.get('id');
            fetch(`../php/searchSponsor.php?id=`+id,{
                method: "GET",
            })
            .then(resp => resp.json())
            .then(resp => this.sponsor = resp)
    },
})