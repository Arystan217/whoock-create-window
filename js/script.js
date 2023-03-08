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

const iframeDocument = iframe.contentDocument;
const iframeBody = iframeDocument.body;
const iframeHeight = iframeBody.scrollHeight;
console.log(iframeHeight);




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








