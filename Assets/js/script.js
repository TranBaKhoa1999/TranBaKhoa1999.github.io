
window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    var aboutBtn = document.getElementById("nav-about");
    var contactBtn = document.getElementById("nav-contact");
    var resumeBtn = document.getElementById("nav-resume");

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    var header_togglePos = 30 * (vw/100);
    header.classList.toggle("sticky", window.scrollY > (header_togglePos));
});

function moveAbout() {

}

//animation and event menu button
var menuBtn = document.querySelector('.checkbtn');
const content = document.querySelector('#page');
var header = document.getElementById("header");
var nav = document.querySelector('.navbar-nav');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        nav.style.right = '0';
        header.style.left = '-50%';
        content.style.left = '-50%';
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        header.style.left = '0';
        content.style.left = '0';
        nav.style.right = '-100%';
    }
});
//
function myFunction(x) {
    if (x.matches) { // If media query matches
    } else {
        menuOpen = false;
        nav.style.right = '-100%';
        menuBtn.classList.remove('open');

        header.style.left = '0';
        content.style.left = '0';
    }
}

var x = window.matchMedia("(max-width: 805px)")
myFunction(x)
x.addListener(myFunction)
// lable on touch move
// var lable = document.getElementsByClassName('labletouch');
// for(var i =  0 ;i<lable.length;i=i+1){
//     lable[i].ontouchmove=touchMove;
// }
// function touchMove(ev){
//     alert('wtf');
// }
//Typing Text Script
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
// End typing text script