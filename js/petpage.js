new Vue({
    el:'#petPageApp',
    data: {
        petimg: 0,
        imgList:[
            "./images/Meteor/dog4.png",
            "./images/Meteor/dog5.png",
            "./images/Meteor/dog6.png",
            "./images/Meteor/dog7.png",
            "./images/Meteor/dog8.png",
            "./images/Meteor/dog9.png",
            "./images/Meteor/dog9.png",
            "./images/Meteor/dog9.png",
            "./images/Meteor/dog9.png",
        ]
    },
    mounted(){
        // var swiper = new Swiper(".mySwiper", {
        //     loop: false,
        //     pagination: {
        //         el: ".swiper-pagination",
        //     },
        // });
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 5,
            spaceBetween: 16,
            slidesPerGroup: 5,
            loop: false,
            loopFillGroupWithBlank: false,
            pagination: {
            //   el: ".swiper-pagination",
              clickable: true
            },
            // navigation: {
            // nextEl: ".swiper-button-next",
            // prevEl: ".swiper-button-prev",
            // },
          });
    },
    
})