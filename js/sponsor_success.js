new Vue({
    el: '#sponsor_successApp',
    data: {
        success:[{
            serialnumber:'12345678',
            name:'林宜蓁',
            money:'5000',
            creditcard:'ATM轉帳',
        }],
    },
    methods: {
        currentDate() {
            const current = new Date();
            const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
            return date;
        }
    },
});