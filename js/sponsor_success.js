new Vue({
    el: '#sponsor_successApp',
    data: {
        success:[],
    },
    methods: {
        // currentDate() {
        //     const current = new Date();
        //     const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
        //     return date;
        // }
    },
    mounted() {
        fetch('../php/searchDonation.php')
        .then(resp => resp.json())
        .then(resp => this.success = resp)
    },
});