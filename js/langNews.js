new Vue({
    el: '#app',
    data: {
        currentFilter: 'ALL',
        posts: [

            {
                // views: ' ', title: '', image: ' ', year: ' ', date: ' ', category: ' ',
                // collet: '', content: '',

            }
        ]
    },

    methods: {
        setFilter: function (filter) {
            this.currentFilter = filter;
        }
    },
    mounted() {
        fetch(`./php/news_content.php`,{
            method: "GET",
        })
            .then(resp => resp.json())
            .then(resp => this.posts = resp)
    }
})






var news = new Vue({
    el: '#news_cont',
    data: {
        posts: [],
        imgURL: './images/Derrick/',
    },
    mounted() {
        var getUrlString = location.href;
        var url = new URL(getUrlString);
        var News = url.searchParams.get('getNews');

        fetch(`./php/news_content_box.php?getNews=`+ News,{
            method: "GET",
        })
            .then(resp => resp.json())
            .then(resp => {
                this.posts = resp
                // console.log(this.posts)
            })

    }
})


