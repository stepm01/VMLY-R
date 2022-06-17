const header = document.querySelector('.header-fixed');
const svg_logo = document.querySelector('.svg-logo__name'); 
const btn = document.querySelector('.rect');
const btn1 = document.querySelector('.rect1');
const btn2 = document.querySelector('.rect2');
const add = document.querySelector('.icon-down');
const add1 = document.querySelector('.add1');
const add_info = document.querySelector('.additional');
const burger = document.querySelector('.button__open-menu');
const navs = document.querySelector('.all-nav');
const close = document.querySelector('.close');

document.addEventListener("scroll", ()=>{
    if (window.scrollY > 100) {
       header.style.backgroundColor = "white"; 
       svg_logo.classList.add('header-content-fixed');
       btn.classList.add('header-content-fixed');
       btn1.classList.add('header-content-fixed');
       btn2.classList.add('header-content-fixed');
    } else {
        header.style.backgroundColor = "inherit";
        svg_logo.classList.remove('header-content-fixed');
        btn.classList.remove('header-content-fixed');
        btn1.classList.remove('header-content-fixed');
        btn2.classList.remove('header-content-fixed');    }
})
add.addEventListener('click', () => {
    add_info.classList.toggle('.additional-show')
})

burger.addEventListener('click', function () {
	navs.classList.toggle('toggle');
  close.addEventListener('click', () => {
    navs.classList.remove('toggle');
  })
});

function reveal() {
    var reveals = document.querySelectorAll(".scr");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

