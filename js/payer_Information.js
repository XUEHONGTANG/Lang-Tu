new Vue({
    el: '#payer_InformationApp',
    data: {
        donation:[],
    },
    mounted() {
        fetch('../php/searchDonation.php')
        .then(resp => resp.json())
        .then(resp => this.donation = resp)
    },
});