new Vue({
    el: '#sponsor_informationApp',
    data:{
            fundNow: null,
            planName: "",
            planPrice: "",
            planMethod: "",
            fundPeople: null,
            id: "",
            imgURL:'./images/Meteor/',
            planPic: "",
            fundName: "",
            cartTitle:[
                {id:1,name:'捐款人資料'},
                {id:2,name:'收據資訊'},
                {id:3,name:'個資聲明'}
            ],
            currentPage: 1,
            
            //內部資料
            donor:{
                name:null,
                nationTW:null,
                idname:null,
                email:null,
                gender:null,
                birthday:null,
                number:null,
                address:'',
                creditcard:null,
                audit: '待審核',
                date: "",
                serialNum: "",
            },
            donor2:{
                receipt:null,
                header:null,
                usernumber:null,
                public:null,
            },
            errors:{
                name:false,
                nationTW:false,
                idname:false,
                email:false,
                male:false,
                birthday:false,
                number:false,
                address:false,
                creditcard:false,
                receipt:false,
                header:false,
                usernumber:false,
                public:false,
            },
            
            //確認紐
            isDisabled: true,
            ischeckbox:false,
        },
        
    methods:{
        sendOrder() {
            const memberCounty = $('.twzipcode1 > select[name="county"]').val();
            const memberDistrict = $('.twzipcode1 > select[name="district"]').val();
            const memberZipcode = $('.twzipcode1 > input[name="zipcode"]').val();
            const memberPostal = memberZipcode + memberDistrict + memberCounty;
            
            this.donor.address = memberPostal + this.donor.address;

            for(let key in this.errors){
                this.errors[key] = false;
            }

            if(!this.donor.name){
                this.errors.name = true;
            }
            if(!this.donor.nationTW){
                this.errors.nationTW = true;
            }
            if(!this.donor.idname || !/^[a-zA-Z]\d{9}$/g.test(this.donor.idname)){
                this.errors.idname = true;
            }
            if(!this.donor.email || !/^\b[A-Z0-9-]+@[A-Z0-9]+\.com\b/i.test(this.donor.email)){
                this.errors.email = true;
            }
            if(!this.donor.gender){
                this.errors.gender = true;
            }
            if(!this.donor.birthday){
                this.errors.birthday = true;
            }
            if(!this.donor.number || !/^09\d{8}$/.test(this.donor.number)){
                this.errors.number = true;
            }
            if(!this.donor.address){
                this.errors.address = true;
            }
            if(!this.donor.creditcard){
                this.errors.creditcard = true;
            }

            for (let key in this.errors) {
                if (this.errors[key] === true) {
                    alert("請填寫完成");
                    return false;
                }
            }
            this.currentPage = 2
        },
        revise(){
            if(this.ischeckbox == false){
                this.isDisabled = false
            }else if(this.ischeckbox == true){
                this.isDisabled = true
            }
        },
        headername(){
            if(this.donor.name !== null){
                this.donor2.header = this.donor.name
            }
        },
        usernumberid(){
            if(this.donor.idname !== null){
                this.donor2.usernumber = this.donor.idname
            }
        },
        receipt(){
            for(let key in this.errors){
                this.errors[key] = false;
            }

            if(!this.donor2.receipt){
                this.errors.receipt = true;
            }
            if(!this.donor2.header){
                this.errors.header = true;
            }
            if(!this.donor2.usernumber || !/^[a-zA-Z]\d{9}$/g.test(this.donor2.usernumber)){
                this.errors.usernumber = true;
            }
            if(!this.donor2.public){
                this.errors.public = true;
            }
            for (let key in this.errors) {
                if (this.errors[key] === true) {
                    alert("請填寫完成");
                    return false;
                }
            }
            this.currentPage = 3
        },

        next(){
            let date = new Date();
            let dateValues = [date.getFullYear(), date.getMonth()+1, date.getDate()];
            this.donor.date = dateValues.join('-')

            
            let num = new Date();
            let numValues = [num.getFullYear(), num.getMonth()+1, num.getDate(), num.getHours(), num.getMinutes()]
            this.donor.serialNum = numValues.join('')
        
            this.fundNow = Number(this.planPrice) + Number(this.fundNow)
            this.fundPeople++
 

            fetch('./php/insertDonation.php',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.donor.name,
                    nationality: this.donor.nationTW,
                    idname: this.donor.idname,
                    gender: this.donor.gender,
                    email: this.donor.email,
                    birthday: this.donor.birthday,
                    phone: this.donor.number,
                    address: this.donor.address,
                    methods: this.donor.creditcard,
                    receipt: this.donor2.receipt,
                    header: this.donor2.header,
                    public: this.donor2.public,
                    category: this.donor.category,
                    amount: this.donor.amount,
                    audit: this.donor.audit,
                    date: this.donor.date,
                    serialNum: this.donor.serialNum,
                    planMethod: this.planMethod,
                    planName: this.planName,
                    planPrice: this.planPrice,
                    fundName: this.fundName,
                })
            })

                let id = sessionStorage.getItem('id');
                this.id = id;

            fetch('./php/addfundingMoneyandPeople.php',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fundNow: this.fundNow,
                    fundPeople: this.fundPeople,
                    id: this.id,
                })
            })
            sessionStorage.setItem('donorEmail', this.donor.email)
            window.location.href ='./payer_information.html'
        }


    },
    mounted() {
        $(".twzipcode1").twzipcode();

        let plan = sessionStorage.getItem('plan')
        this.planMethod = plan.slice(0, 2)
        this.planName = plan.slice(2, 5)
        this.planPrice = plan.slice(5)

        let planPic = sessionStorage.getItem('planPic')
        this.planPic = planPic

        let amount = sessionStorage.getItem('amount')
        this.fundNow = amount

        let people = sessionStorage.getItem('people')
        this.fundPeople = people

        let fundName = sessionStorage.getItem("sponsorName")
        this.fundName = fundName


    },
    updated() {
        $(".twzipcode1").twzipcode();
    },
    computed:{
        // getDate(){
        //     let date = new Date();
        //     dateValues = [date.getFullYear(), date.getMonth()+1, date.getDate()];
        //     return this.donor.date = dateValues.join('-')
        // },
        // getSerialNum(){
        //     let num = new Date();
        //     numValues = [num.getFullYear(), num.getMonth()+1, num.getDate(), num.getHours(), num.getMinutes()]
        //     return this.donor.serialNum = numValues.join('')
        // },
        // getFundNow(){
        //     return this.fundNow = Number(this.planPrice) + Number(this.fundNow)
        // },
        // getFundPeople(){
        //     return this.fundPeople++
        // }
    }
    })