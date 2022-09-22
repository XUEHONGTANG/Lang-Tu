new Vue({
    el: '#applicationApp',
    data: {
        
            reserve:{
                name:null,
                people:null,
                number:null,
                day:null,
                time:null,
            },
            applications:{
                appname:null,
                appid:null,
                appbirthday:null,
                appnumber:null,
                appemail:null,
            },
            errors:{
                name:false,
                people:false,
                number:false,
                day:false,
                time:false,
                appname:false,
                appid:false,
                appbirthday:false,
                appnumber:false,
                appemail:false,
            },
            isDisabled: true,
            ischeckbox:false,
        
    },
    methods: {
        revise(){
            if(this.ischeckbox == false){
                this.isDisabled = false
            }else if(this.ischeckbox == true){
                this.isDisabled = true
            }
        },
        over(){
            for (let key in this.errors) {
                this.errors[key] = false;
            }

                if (!this.reserve.name) {
                    this.errors.name = true;
                }
                if (!this.reserve.people) {
                    this.errors.people = true;
                }
                if (!this.reserve.number || !/^09\d{8}$/.test(this.reserve.number)) {
                    this.errors.number = true;
                }
                if (!this.reserve.day) {
                    this.errors.day = true;
                }
                if (!this.reserve.time) {
                    this.errors.time = true;
                }
                if (!this.applications.appname) {
                    this.errors.appname = true;
                }
                if (!this.applications.appid || !/^[a-zA-Z]\d{9}$/g.test(this.applications.appid)) {
                    this.errors.appid = true;
                }
                if (!this.applications.appbirthday) {
                    this.errors.appbirthday = true;
                }
                if (!this.applications.appnumber || !/^09\d{8}$/.test(this.applications.appnumber)) {
                    this.errors.appnumber = true;
                }
                if (!this.applications.appemail || !/^\b[A-Z0-9-]+@[A-Z0-9]+\.com\b/i.test(this.applications.appemail)) {
                    this.errors.appemail = true;
                }

            for (let key in this.errors) {
                if (this.errors[key] === true) {
                    alert("請填寫完成");
                    return false;
                }
            }
            window.location.href = "./finish.html";
            
        },
    },

});