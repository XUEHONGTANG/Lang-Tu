Vue.component('listli', {
    data(){
        return{
            htmlURL:'./',
            imgURL:'./images/Meteor/',
            lists:[
                {
                    pet:'sponsored_page.html',
                    image: 'dogeat.png', 
                    title:'與浪共食｜浪毛孩不再飢餓',
                    lowTime:'剩下11小時',
                    lowMoney:'222,345',
                },
                {
                    pet:'sponsored_page.html',
                    image: 'dog1.png', 
                    title:'與浪共食｜浪毛孩不再飢餓',
                    lowTime:'剩下12小時',
                    lowMoney:'222,345',
                },
                {
                    pet:'sponsored_page.html',
                    image: 'dogeat.png', 
                    title:'與浪共食｜浪毛孩不再飢餓',
                    lowTime:'剩下13小時',
                    lowMoney:'222,345',
                },
                {
                    pet:'sponsored_page.html',
                    image: 'dogeat.png', 
                    title:'與浪共食｜浪毛孩不再飢餓',
                    lowTime:'剩下14小時',
                    lowMoney:'222,345',
                },
                {
                    pet:'sponsored_page.html',
                    image: 'dogeat.png', 
                    title:'與浪共食｜浪毛孩不再飢餓',
                    lowTime:'剩下15小時',
                    lowMoney:'222,345',
                },
                {
                    pet:'sponsored_page.html',
                    image: 'dogeat.png', 
                    title:'與浪共食｜浪毛孩不再飢餓',
                    lowTime:'剩下16小時',
                    lowMoney:'222,345',
                },
            ]
        }
    },
    template: `
    <ul class="sponsored_List-ul">
        <li v-for="list in lists" class="sponsored_List-li">
            <div class="sponsored_List-div">
                <a  :href="htmlURL+list.pet">
                    <img :src="imgURL+list.image" alt="">
                    <h3>{{list.title}}</h3>
                    <div class="sponsored_List-border radius"></div>
                    <div class="sponsored_List-in">
                        <svg class="sponsored_List-svg" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4154 8.08398C16.1966 6.86523 14.6029 6.25065 12.9987 6.25065V12.5007L8.58203 16.9173C11.0195 19.3548 14.9779 19.3548 17.4258 16.9173C19.8633 14.4798 19.8633 10.5215 17.4154 8.08398ZM12.9987 2.08398C7.2487 2.08398 2.58203 6.75065 2.58203 12.5007C2.58203 18.2507 7.2487 22.9173 12.9987 22.9173C18.7487 22.9173 23.4154 18.2507 23.4154 12.5007C23.4154 6.75065 18.7487 2.08398 12.9987 2.08398ZM12.9987 20.834C8.39453 20.834 4.66536 17.1048 4.66536 12.5007C4.66536 7.89648 8.39453 4.16732 12.9987 4.16732C17.6029 4.16732 21.332 7.89648 21.332 12.5007C21.332 17.1048 17.6029 20.834 12.9987 20.834Z" fill="#2D2D2D"/></svg>
                        <h4>{{list.lowTime}}</h4>
                        <p>NT{{list.lowMoney}}</p>
                    </div>
                </a>
            </div>
        </li>
    </ul>
    `,
})


new Vue({
    el:'#sponsored_ListApp',
    data:{
        pages:['2','3','4'],
        content: 'listli',
    },
});

// 

