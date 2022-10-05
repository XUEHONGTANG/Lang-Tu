new Vue({
    el: '#sponsor_successApp',
    data: {
        success:[],
        account: "",
    },
    methods: {
        // currentDate() {
        //     const current = new Date();
        //     const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
        //     return date;
        // }
    },
    mounted() {
        this.account = sessionStorage.getItem('donorEmail')
        fetch('./php/sponsorSuccess.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                account: this.account,
            })
        })
        .then(resp => resp.json())
        .then(resp => this.success = resp)
    },
});