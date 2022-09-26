
// <!-- slick -->

$('.cont-slider').slick({
    appendArrows: "#js-cont-slider-arrows",
    dots: false,
    centerMode: 1,
    slidesToShow: 1,
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 8,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    pauseOnFocus: false,

    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
            }
        }
    ]
});

$('.store-slider').slick({
    appendArrows: "#js-cont-slider-arrows2",
    dots: false,
    centerMode: 1,
    slidesToShow: 1,
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 8,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    pauseOnFocus: false,

    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
})


$('.med-slider').slick({
    appendArrows: "#js-cont-slider-arrows3",
    dots: false,
    centerMode: 1,
    slidesToShow: 1,
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 8,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    pauseOnFocus: false,

    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
})

$('.cos-slider').slick({
    appendArrows: "#js-cont-slider-arrows4",
    dots: false,
    centerMode: 1,
    slidesToShow: 1,
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 8,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    pauseOnFocus: false,

    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
})

$('.grass-slider').slick({
    appendArrows: "#js-cont-slider-arrows5",
    dots: false,
    centerMode: 1,
    slidesToShow: 1,
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 8,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    pauseOnFocus: false,

    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});



//Gsap

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 60;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -40;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 40;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {
        x: x,
        y: y,
        autoAlpha: 0
    }, {
        duration: 1,
        x: 0,
        y: 0,
        autoAlpha: 1,
        easeIn: " Sine",
        //   overwrite: "auto",
    });
}


function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils
        .toArray(".gs_reveal")
        .forEach(function (elem) {
            hide(elem);
            ScrollTrigger.create({
                once: true,
                trigger: elem,
                start: "center bottom",
                end: "bottom bottom",
                // markers:true,
                onEnter: function () {
                    animateFrom(elem)
                },

            })
        },"<+=0.36");
});


