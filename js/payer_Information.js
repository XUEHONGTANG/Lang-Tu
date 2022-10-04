new Vue({
    el: '#payer_InformationApp',
    data: {
        donation:[],
        email: '',
        
    },
    methods: {
        send(){
            let myForm = {
                price: this.donation[0].amount,
                type: this.donation[0].type,
                methods: this.donation[0].methods,
                nationality: this.donation[0].nationality,
                name: this.donation[0].name,
                id: this.donation[0].id,
                email: this.donation[0].email,
                gender: this.donation[0].gender,
                birthday: this.donation[0].birthday,
                phone: this.donation[0].phone,
                address: this.donation[0].address,
                receipt: this.donation[0].receipt,
                title: this.donation[0].title,
                public: this.donation[0].credit,
            }
            emailjs.init("w_ucAreP-FfiCfqVS");
            emailjs.send('service_turs5rr', 'template_5z5yftp', myForm)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            })
            
            setInterval(()=>{location.href ="./sponsor_success.html"}, 1000)
            
        },
    },
    mounted() {
        this.email = sessionStorage.getItem('donorEmail')
        fetch('./php/payerCheck.php', {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    account: this.email,
                })
        })
        .then(resp => resp.json())
        .then(resp => this.donation = resp)

    },
});