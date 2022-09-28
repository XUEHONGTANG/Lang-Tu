new Vue({
    el: '#payer_InformationApp',
    data: {
        donation:[],
        email: '',
    },
    mounted() {
        this.email = sessionStorage.getItem('account')
        fetch('../php/payerCheck.php', {
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