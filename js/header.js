$(document).ready(function () {

  //判斷是否已登入
  if (localStorage.account || sessionStorage.account) {
    $('#nav_logOut').fadeIn();
  } else {
    $('#nav_logOut').fadeOut();
  }

  //登出
  $('.nav_logOut').click(function () {
    console.log('log out');
    localStorage.removeItem('account');
    sessionStorage.removeItem('account');
    $('.nav_logOut').fadeOut();

  })


  $('.top_nav_icon_menu-button').click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
  });


  //footertop
  const scrollTop_btn = document.getElementsByClassName('mouse')[0];
  scrollTop_btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  });



});
