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
$('.tablist').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
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

//kanu news
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides:true,
  grabCursor:true,
  // loop: true,
  autoplay : { 
    delay : 2000,  
      disableOnInteraction : false, 
  }
});
