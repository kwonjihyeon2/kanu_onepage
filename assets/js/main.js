AOS.init();

//헤더 스크롤
var lastScrollTop = 0, delta = 15;

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop()
    if(Math.abs(lastScrollTop - scrollTop) <= delta)
    return; 

    if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
        $(".scroll_01").css("top","-100px");
    } else {
        $(".scroll_01").css("top","0px");
    }
    lastScrollTop = scrollTop;
});



//카누 메뉴 스크롤
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    Responsive: [
      {
        breakpoint : 770,
        settings:{
          slidesToShow: 1
        }
      }
    ]
});

//kanu cf
$('.tabmenu01').click(function(){
  $('.tab01').fadeIn().css("display","flex")
  $('.tab02').css('display','none');
  $('.tab03').css('display','none');
  $('.tab04').css('display','none');
});
$('.tabmenu02').click(function(){
  $('.tab02').fadeIn().css("display","flex");
  $('.tab01').css('display','none');
  $('.tab03').css('display','none');
  $('.tab04').css('display','none');
});
$('.tabmenu03').click(function(){
  $('.tab03').fadeIn().css("display","flex");
  $('.tab01').css('display','none');
  $('.tab02').css('display','none');
  $('.tab04').css('display','none');
});
$('.tabmenu04').click(function(){
  $('.tab04').fadeIn().css("display","flex");
  $('.tab01').css('display','none');
  $('.tab03').css('display','none');
  $('.tab02').css('display','none');
});





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

//event
$('.tabbtn01').click(function(){
  $(this).css("border","1px solid #777");
  $('.tabbtn02').css("border","none");
  $('.info-1').fadeIn();;
  $('.info-2').css('display','none');
});

$('.tabbtn02').click(function(){
  $(this).css("border","1px solid #777");
  $('.tabbtn01').css("border","none");
  $('.info-2').fadeIn();
  $('.info-1').css('display','none');
});
