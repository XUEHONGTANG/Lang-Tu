//svg
var mySVG = $('svg').drawsvg();
mySVG.drawsvg('animate');

//parallax index
var scene = document.getElementById('index-1');
var parallaxInstance = new Parallax(scene);

//ending
var scene = document.getElementById('ending-1');
var parallaxInstance = new Parallax(scene);

///////
let moon = document.getElementById('moon');
let cityRight = document.getElementById('city-r');
let cityLeft = document.getElementById('city-l');
let cloud01 = document.getElementById('cloud01');
let cloud02 = document.getElementById('cloud02');
let cloud03 = document.getElementById('cloud03');
let cloud04 = document.getElementById('cloud04');
let cloud05 = document.getElementById('cloud05');
let star = document.getElementById('star');
let frontcont = document
    .getElementById('index_2')
    .height;

window.addEventListener('scroll', function () {
    // clearTimeout(timer) ;
    let value = this.window.scrollY;
    moon.style.top = value * 0.35 + 200 + 'px';
    moon.style.opacity = value * 0.05 + '%';
    cityRight.style.top = value * 0.24 - 80 + 'px';
    cityLeft.style.top = value * 0.15 - 80 + 'px';

    cityRight.style.opacity = value * 0.05 + '%';
    cityLeft.style.opacity = value * 0.05 + '%';

    cloud01.style.right = '-' + value * 0.04 + 'px';
    cloud01.style.opacity = value * 0.2 + '%';

    cloud02.style.left = value * 0.1 - 130 + 'px';
    cloud02.style.opacity = value * 0.18 + '%';

    cloud03.style.left = +value * 0.15 + 600 + 'px';
    cloud03.style.opacity = value * 0.05 + '%';

    cloud04.style.right = value * 0.09 - 300 + 'px';
    cloud04.style.opacity = value * 0.18 + '%';

    cloud05.style.left = value * 0.05 - 80 + 'px';

    star.style.left = value * 0.1 + 'px';
    star.style.opacity = value * 0.06 + '%';

})

// if(this.window.scrollY >=  frontcont)     if($(window).scrollTop() >=
// (areaTop + showHeight) - $(window).height()){       setThis.stop().animate({
// opacity: 1,       },500)   }else{       setThis.stop().animate({
// opacity: 0,       },500)   } }) Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    // Init TypeWriter
    new TypeWriter(txtElement, words);
}

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
}

//gsap

let delSections = document.querySelectorAll(".delayed-section");

delSections.forEach(section => {

    let imageAnim = gsap.to(section.querySelector("img"), {
        y: "-70vh",
        paused: true
    });

    let progressTo = gsap.quickTo(imageAnim, "progress", {
        ease: "power2",
        duration: parseFloat(section.dataset.scrub) || 0.1
    });

    gsap.to(section.querySelector("paperContainer"), {
        y: "100vh",
        scrollTrigger: {
            scrub: true,
            trigger: section,
            start: "-900vh center",
            end: "-80px center",
            // markers:true,
            onUpdate: self => progressTo(self.progress)
        }
    });

});
// gsap.registerPlugin(ScrollTrigger);
// gsap.utils.toArray(".panel").forEach((panel, i) => {   ScrollTrigger.create({
// trigger: panel,     start: "top top",     pin: true,     pinSpacing: false,
// markers:true,   }); }); ScrollTrigger.create({   snap: 1/2  snap whole page
// to the closest section! });
