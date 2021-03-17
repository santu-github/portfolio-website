$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'

    });



let hamberger = document.querySelector('.hamberger')
let hambergerClose = document.querySelector('.hamberger-close')
let mobileNav = document.querySelector('.mobile-nav')


hamberger.addEventListener('click',function(){
    mobileNav.classList.add('open');

});
hambergerClose.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});


})