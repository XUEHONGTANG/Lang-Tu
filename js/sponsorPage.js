new Vue({
    el: '#sponsorPageApp',
    data: {
        imgURL:'./images/Meteor/',
        sponsor: [],
        fundPeople: [],
        currentPlan: 1,
        btn1: false,
        btn2: false,
        
    
    },
    computed:{
        percentage:function(){
                    return parseInt(this.sponsor[0].fundNow/this.sponsor[0].fundGoal*100)
                }
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
            sessionStorage.setItem('amount', this.sponsor[0].fundNow)
            sessionStorage.setItem('people', this.sponsor[0].Amount)
            sessionStorage.setItem('sponsorName', this.sponsor[0].fundName)
        },
        nextpet(){
            if(sessionStorage.account){
                window.location.href = "./sponsor_information.html";
            }else{
                window.location.href = "./login_page.html";
            }
        },
    },
    mounted() {
        var getUrlString = location.href;
        var url = new URL(getUrlString);
        var id = url.searchParams.get('id');
            fetch(`./php/searchSponsor.php?id=`+id,{
                method: "GET",
            })
            .then(resp => resp.json())
            .then(resp => this.sponsor = resp)

            fetch('./php/searchfundPeople.php')
            .then(resp => resp.json())
            .then(resp => this.fundPeople = resp)

        sessionStorage.setItem("id", id)
    },
})