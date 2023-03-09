//! HEADER SCROLL
const iframe = document.querySelector('.web-result iframe')
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.pageYOffset > 60) {
    header.classList.add('header--active');
  } else {
    header.classList.remove('header--active');
  }
});



//! SIDEBARS
// elements
const burgerIcon = document.querySelector('.burger-icon')
const profileIcon = document.querySelector('.header__profile-icon')

const burgerSidebar = document.querySelector('.burger-sidebar')
const profileSidebar = document.querySelector('.profile-sidebar')

// open sidebar
burgerIcon.addEventListener('click', function() {
  this.classList.toggle('burger-icon--active');
  burgerSidebar.classList.toggle('burger-sidebar--active');  
});

document.querySelector('.header__profile-icon').addEventListener('click', function() {
  profileSidebar.classList.toggle('profile-sidebar--active'); 
});

// focusout close sidebar
document.addEventListener('click', function(event) {
  if (!burgerIcon.contains(event.target)) {
    burgerIcon.classList.remove('burger-icon--active');
    burgerSidebar.classList.remove('burger-sidebar--active');
  }
  if (!profileIcon.contains(event.target)) {
    profileSidebar.classList.remove('profile-sidebar--active');
  }
});


//! INPUTS
// elements
const restartBtn = document.querySelector('.restart');
const frontEndInput = document.getElementById('front-end-input');
const backEndInput = document.getElementById('back-end-input');
const frontEndSide = document.getElementById('front-end-side');
const backEndSide = document.getElementById('back-end-side');

// toggle inputs
restartBtn.addEventListener('click', function() {
  frontEndInput.classList.toggle('active-field');
  backEndInput.classList.toggle('active-field');

  frontEndSide.classList.toggle('side__item--active');
  backEndSide.classList.toggle('side__item--active');
});


var myElement = document.querySelector('.web-result__iframe');
var scrollbarWidth = myElement.offsetWidth - myElement.clientWidth;
console.log(document.querySelector(".web-result__iframe").scrollWidth)
myElement.style.overflow = 'hidden';
document.querySelector(".web-result__iframe").style.width = 'calc(100% + ' + scrollbarWidth + 'px)';



