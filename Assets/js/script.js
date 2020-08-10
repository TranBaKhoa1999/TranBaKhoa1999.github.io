window.addEventListener("scroll",function(){
    var header= document.getElementById("header");
    header.classList.toggle("sticky",window.scrollY>0);
});
//animation and event menu button
const menuBtn = document.querySelector('.checkbtn');
const content =document.querySelector('#page');
var header= document.getElementById("header");
var nav = document.querySelector('.navbar-nav');
let menuOpen = false;
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen=true;
        // content.style.width='50%';
        // header.style.width='50%';
        nav.style.right='0';
        header.style.left='-50%';
        content.style.left='-50%';
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen=false;
        // content.style.width='100%';
        // header.style.width='100%';
        header.style.left='0';
        content.style.left='0';
        nav.style.right='-100%';
    }
});
//
function myFunction(x) {
    if (x.matches) { // If media query matches
    } 
    else {
        menuOpen=false;
        nav.style.right='-100%';
        menuBtn.classList.remove('open');
        // content.style.width='100%';
        // header.style.width='100%';
        header.style.left='0';
        content.style.left='0';
    }
  }
  
  var x = window.matchMedia("(max-width: 805px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes