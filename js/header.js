$(document).ready(function () {

  //判斷是否已登入
  // console.log(sessionStorage.account);

  if (sessionStorage.account) {
    $('.nav_logout-text').fadeIn();
  } else {
    $('.nav_logout-text').fadeOut();
  }

  // //登出
  $('.nav_logout-text').click(function () {
    sessionStorage.removeItem('account');
    $('.nav_logout-text').fadeOut();
    location.href="../dist/login_page.html"
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
