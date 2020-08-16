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