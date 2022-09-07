
$('.top_nav_icon_menu-button').click (function(){
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
  });


//footertop
const scrollTop_btn = document.getElementsByClassName('mouse')[0];
scrollTop_btn.addEventListener("click",function(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
})
});