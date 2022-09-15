//svg var mySVG = $('svg').drawsvg(); mySVG.drawsvg('animate'); parallax index
var scene = document.getElementById('index-1');
var parallaxInstance = new Parallax(scene);

//parallax ending
var scene = document.getElementById('ending-1');
var parallaxInstance = new Parallax(scene);

///////
let moon = document.getElementById('moon');
// let cityRight = document.getElementById('city-r'); let cityLeft =
// document.getElementById('city-l');
let cloud01 = document.getElementById('cloud01');
let cloud02 = document.getElementById('cloud02');
let cloud03 = document.getElementById('cloud03');
let cloud04 = document.getElementById('cloud04');
let cloud05 = document.getElementById('cloud05');
let star = document.getElementById('star');

window.addEventListener('scroll', function () {
    // clearTimeout(timer) ;
    let value = this.window.scrollY;

    moon.style.top = value * 0.35 + 200 + 'px';
    moon.style.opacity = value * 0.05 + '%';
    // cityRight.style.top = value * 0.24 - 80 + 'px'; cityLeft.style.top = value *
    // 0.15 - 80 + 'px'; cityRight.style.opacity = value * 0.05 + '%';
    // cityLeft.style.opacity = value * 0.05 + '%';

    cloud01.style.right = '-' + value * 0.04 + 'px';
    cloud01.style.opacity = value * 0.2 + '%';

    cloud02.style.left = value * 0.1 - 130 + 'px';
    cloud02.style.opacity = value * 0.18 + '%';

    cloud03.style.left = value * 0.15 + 600 + 'px';
    cloud03.style.opacity = value * 0.05 + '%';

    cloud04.style.right = value * 0.09 - 300 + 'px';
    cloud04.style.opacity = value * 0.18 + '%';

    cloud05.style.left = value * 0.05 - 80 + 'px';

    star.style.left = value * 0.1 + 'px';
    star.style.opacity = value * 0.06 + '%';

});

// document.querySelector(".txt-type"), {     scrollTrigger: {       trigger:
// ".txt-type",       start: "top center",       end: "350px center",
// ease: "power2",     }   }; Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    // Init TypeWriter
    new TypeWriter(txtElement, words);
};
class TypeWriter {
    constructor(txtElement, words) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.type();
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        // Initial Type Speed
        let typeSpeed = 300;
        setTimeout(() => this.type(), typeSpeed);
    }

};

//gsap city paper
let delSections = document.querySelectorAll(".delayed-section");
let delcity = document.querySelectorAll(".delayed-city");

delcity.forEach(section => {

    let imageAnim = gsap.to(section.querySelector("img"), {
        y: "20vh",
        paused: true,
        autoAlpha: 1
    })

    let progressTo = gsap.quickTo(imageAnim, "progress", {
        ease: "power2",
        duration: parseFloat(section.dataset.scrub) || 2
    })

    gsap.to(section.querySelector("cityContainer"), {
        scrollTrigger: {
            y: "100vh",
            scrub: true,
            trigger: section,
            start: "top center",
            end: "350px center",
            autoAlpha: 0,
            // markers:true,
            onUpdate: self => progressTo(self.progress)
        }
    });

});


delSections.forEach(section => {

    let imageAnim = gsap.to(section.querySelector("img"), {
        y: "-70vh",
        paused: true
    })

    let progressTo = gsap.quickTo(imageAnim, "progress", {
        ease: "power2",
        duration: parseFloat(section.dataset.scrub) || 2
    })

    gsap.to(section.querySelector("paperContainer"), {
        scrollTrigger: {
            y: "20vh",
            // scrub: true,
            trigger: section,
            start: "-900vh center",
            end: "-80px center",
            // markers:true,
            onUpdate: self => progressTo(self.progress)
        }
    });
});

////
function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -29;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 45;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {
        x: x,
        y: y,
        autoAlpha: 0
    }, {
        duration: 2,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "transform 0.7s ease-out,opacity 1.2s ease",
        //   overwrite: "auto",

    });
}

function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap
        .utils
        .toArray(".gs_reveal")
        .forEach(function (elem) {
            hide(elem); // assure that the element is hidden when scrolled into view

            ScrollTrigger.create({
                trigger: elem,
                onEnter: function () {
                    animateFrom(elem)
                },
                // onEnterBack: function() { animateFrom(elem, -1) }, onLeave: function() {
                // hide(elem) }  assure that the element is hidden when scrolled into view
            })
        });
});

var mySVG = $('svg').drawsvg();
ScrollTrigger.create({
    trigger: ".svg",
    // markers:true,
    onEnter: mySVG.drawsvg('animate')
});

//

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".assist",
        start: "center center",
        end: "center top",
        ease: "transform 2s ease-out,opacity 0.5s ease"
    }
});

tl.to(".assist2", {opacity: 0})
tl.to(".assist1", {opacity: 1})
