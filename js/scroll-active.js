!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).ScrollActive=n()}(this,function(){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s=function t(){o(this,t),this.wrapper=document.body,this.activeClass="active",this.offset=0,this.hash=!1};var t,e,i,a=(function(t){function e(){}function n(t,n,e,i){return e*t/i+n}function i(t){this.startTime=+new Date,this.done=!1,t=o({duration:1e3,tween:n},t),this.options=t}var o,r,s;t.exports=(o=function(){return(o=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},e.start=function(){e.interval||(e.interval=setInterval(function(){if(e.callbacks.length)for(var t=0,n=e.callbacks.length;t<n;t++)!function(t){var n=e.callbacks[t];"function"==typeof n&&n(function(){return e.remove(n)})}(t);else e.stop()},17))},e.stop=function(){clearInterval(e.interval),e.interval=0},e.add=function(t){e.callbacks.push(t),e.start()},e.remove=function(t){var n=e.callbacks.indexOf(t);~n&&e.removeByIndex(n)},e.removeByIndex=function(t){e.callbacks.splice(t,1)},e.callbacks=[],r=e,s="__TIMER_FUNC",i.prototype.start=function(){return this.startTime=+new Date,this},i.prototype.update=function(){var t=new Date-this.startTime;t>this.options.duration&&(t=this.options.duration,this.done=!0);var n=this.options,e=n.from,i=n.to,o=n.tween,r=n.duration,s={};for(var a in e){var c=e[a],u=i[a];s[a]=o(t,c,u-c,r)}return this.options.onUpdate&&this.options.onUpdate(s),this.done&&this.options.done&&this.options.done(s),this},i.run=function(t){var n=new i(t).start();return n[s]=function(t){n.update(),n.done&&t()},r.add(n[s]),n},i.prototype.dispose=function(){r.remove(this[s])},i)}(e={path:t,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports);function c(){return document.body.scrollTop||document.documentElement.scrollTop}function u(t){for(var n=t.offsetLeft,e=t.offsetTop;t=t.offsetParent;)n+=t.offsetLeft,e+=t.offsetTop;return{x:n,y:e}}function l(t,n){i&&i.dispose(),i=a.run({from:{y:c()},to:{y:t},duration:n,tween:function(t,n,e,i){return(t/=i/2)<1?e/2*t*t*t+n:e/2*((t-=2)*t*t+2)+n},onUpdate:function(t){var n,e=t.y;n=e,document.documentElement.scrollTop=document.body.scrollTop=n}})}var f="data-scroll-active";return function(){function n(){var r=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};o(this,n),this.activeIndex=-1,this.idList=[],this.navbarList=[],this.targetList=[],this.handleMenuClick=function(t){var n,e,i=t.currentTarget.getAttribute(f),o=r.idList.indexOf(i);l(u(r.targetList[o]).y-r.options.offset,500),r.options.hash&&(n=i,e=location.href.split("#")[0]+"#"+encodeURIComponent(n),history.pushState(null,"",e))},this.handleScroll=function(){for(var t=c(),n=0,e=0;e<r.targetList.length;e++){if(!(t>=u(r.targetList[e]).y-r.options.offset))break;n=e}r.update(n)},this.options=Object.assign({},new s,t),this.initialize()}var t,e,i;return t=n,(e=[{key:"initialize",value:function(){var n=this;window.addEventListener("scroll",this.handleScroll);var t=this.options.wrapper;this.navbarList=[].slice.call(t.querySelectorAll("[".concat(f,"]"))),this.idList=this.navbarList.map(function(t){return t.getAttribute(f)}),this.targetList=this.idList.map(function(t){return document.getElementById(t)}),this.navbarList.forEach(function(t){t.addEventListener("click",n.handleMenuClick)}),this.handleScroll()}},{key:"update",value:function(t){var n;this.activeIndex!==t&&(n=this.options.activeClass,this.activeIndex=t,this.options.update&&this.options.update(this.idList[t]),this.navbarList.forEach(function(t){t.classList.remove(n)}),this.navbarList[t].classList.add(n))}},{key:"dispose",value:function(){var n=this;window.removeEventListener("scroll",this.handleScroll),this.navbarList.forEach(function(t){t.removeEventListener("click",n.handleMenuClick)}),this.idList=[],this.targetList=[],this.navbarList=[]}}])&&r(t.prototype,e),i&&r(t,i),n}()});
