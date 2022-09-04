

// menubtn = document.getElementsByClassName('.top_nav_icon_menu-button');
// active = document.getElementsByClassName('.active');

// menubtn.addEventListener('click',toggleClass)

// function toggleClass (e){
    
// }

$('.top_nav_icon_menu-button').click (function(){
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
  });