AOS.init();

//헤더 스크롤
var lastScrollTop = 0, delta = 15;

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop()
    if(Math.abs(lastScrollTop - scrollTop) <= delta)
    return; 

    if ((scrollTop > lastScrollTop) && (lastScrollTop>15)) {
        $(".scroll_01").css("top","-100px");
    } else {
        $(".scroll_01").css("top","0px");
    }
    lastScrollTop = scrollTop;
});

//mobile 메뉴
$('.btn').click(function(){
  $('.gnb').toggleClass("active");
});

//카누 메뉴 스크롤
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function(){
  $(".tab ul li h1").on("click", function(){
    const num = $(".tab ul li h1").index($(this)); 
      $(".tab ul li h1").removeClass("h1-active");
      $('.tab ul li h1:eq(' + num + ')').addClass("h1-active");
  });
});

$('.tabmenu01').click(function(){
  $('.tab01').fadeIn();
  $('.tab02').css('display','none');
  $('.tab03').css('display','none');
});
$('.tabmenu02').click(function(){
  $('.tab02').fadeIn().css('display','flex');
  $('.tab01').hide();
  $('.tab03').css('display','none');
});
$('.tabmenu03').click(function(){
  $('.tab03').fadeIn().css('display','flex');
  $('.tab02').hide();
  $('.tab01').css('display','none');
});

//kanu cf
var swiper = new Swiper(".videoSwiper", {
  loop:true,
  autoplay:2000,
  speed : 1500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})