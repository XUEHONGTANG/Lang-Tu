new Vue({
    el: '#sponsor_informationApp',
    data:{
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
                male:null,
                birthday:null,
                number:null,
                address:null,
                creditcard:null,
            },
            donor2:{
                receipt:null,
                header:null,
                usernumber:null,
                public:null,
            },
            
            //確認紐
            isDisabled: true,
            ischeckbox:false,
        },
        
        methods:{
        sendOredr() {
            const memberCounty = $('.twzipcode1 > select[name="county"]').val();
            const memberDistrict = $('.twzipcode1 > select[name="district"]').val();
            const memberZipcode = $('.twzipcode1 > input[name="zipcode"]').val();
            const memberPostal = memberZipcode + memberDistrict + memberCounty;
            
            this.donor.address = memberPostal + this.donor.address;

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
    },
    mounted() {
        $(".twzipcode1").twzipcode();
      },
      updated() {
        $(".twzipcode1").twzipcode();
      },
    })