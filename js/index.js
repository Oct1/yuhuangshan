$(function(){
  /**
   * 导航
   */
  let navBox = $(".nav");
  let navNumber = navBox.find("li"); 
  navNumber.hover(function() {
    console.log("经过")
    $(this).children('a').addClass('navActive');
  }, function() {
    $(this).children('a').removeClass('navActive');
  });

  /**
   *轮播图
   */
  // resizeWin()
  // //浏览器窗口大小变化时
  $(window).resize(function() {
    var $winWidth = $(window).width();
    $(".swiper-container1 .swiper-wrapper .swiper-slide").children('img').css("width",`${$winWidth}px`);
    var $slideWidth =  $(".gallery-top-box").width();
    $(".gallery-top-box .swiper-container .swiper-wrapper .swiper-slide").children('img').css("width",`${$slideWidth}px`);

  });

    var $slideWidth =  $(".gallery-top-box").width();
    $(".gallery-top-box .swiper-container .swiper-wrapper .swiper-slide").children('img').css("width",`${$slideWidth}px`);
  // function resizeWin(){
  //   var window_width = $(window).width();//获取浏览器窗口宽度
  //   console.log(window_width)
  //   $(".slideBox").children('ul').width(window_width*3+'px');
  //   $(".slideBox").children('ul').find('li').width(window_width+'px'); 
  //   var direWidth = $('.slideBox').children('ul').find('li').children('img').height();
  // }
  // let slideBox = $(".slideBox");
  // let ul = slideBox.find("ul");
  // let oneWidth = ul.find("li").width();
  // let number = slideBox.find(".spanBox span");            //注意分号 和逗号的用法
  // let timer = null;
  // let sw = 0;   
  // slide(number,timer,sw)
  // function slide(number,timer,sw){
  //   //每个span绑定click事件，完成切换颜色和动画，以及读取参数值
  //   number.on("click",function (){
  //     $(this).addClass("active").siblings("span").removeClass("active");
  //     sw=$(this).index();
  //     ul.animate({
  //           "right":$(".slideBox").children('ul').find('li').width()*sw,    //ul标签的动画为向左移动；
  //     });
  //   });
  //   //左右按钮的控制效果
  //   $(".next").stop().click(function (){
  //      sw++;
  //      if(sw==number.length){sw=0};
  //      number.eq(sw).stop().trigger("click");
  //   });
  //   $(".prev").stop().click(function (){
  //       sw--;
  //       if(sw==number.length){sw=0};
  //       number.eq(sw).stop().trigger("click");
  //       });
  //   //定时器的使用，自动开始
  //   timer = setInterval(function (){
  //       sw++;
  //       if(sw==number.length){sw=0};
  //       number.eq(sw).stop().trigger("click");
  //   },5000);
  // }    
  
  // swiper 轮播图   
  var mySwiper = new Swiper('.swiper1',{
    direction:'horizontal', //轮播方向
    autoplay:5000, //三秒轮播一次
    loop:'true', //循环轮播
    autoplayDisableOnInteraction:false, // 点击之后可以继续轮播
    pagination:'.swiper-pagination', // 显示小圆点
    paginationClickable:true, // 小圆点点击切换
    prevButton:'.swiper-button-prev', //上一页
    nextButton:'.swiper-button-next'  // 下一页
  })      
  /**
   * 产业特色
   */
  let special = $(".mainSpecial");
  let specialList = special.children('div'); 
  specialList.hover(function() {
    console.log("经过")
    $(this).children('.specialImg').find('img').stop().animate({"width":'140%',"height":"140%"});
  }, function() {
    $(this).children('.specialImg').find('img').stop().animate({"width":'110%',"height":"110%"});
  });

  //全景虚拟游---轮播图
  var leftScreenVal, moveLeftVal;
  var galleryTop = new Swiper('.gallery-top', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      observer: true,
      observeParents: true,
      autoplay: 5000,
      // onSlidePrevEnd: function(swiper) {
      //     leftScreenVal = document.getElementsByClassName('swiper-slide-active')[1].getBoundingClientRect().left;
      //     if (leftScreenVal < 570) {
      //         moveLeftVal = document.getElementsByClassName('swiper-slide-active')[1].offsetLeft;
      //         moveLeftVal = 155 - moveLeftVal;
      //         document.querySelector('.gallery-thumbs > .swiper-wrapper').style.left = moveLeftVal + 'px';
      //     }
      // },
      // onSlideNextEnd: function(swiper) {
      //     var leftScreenVal = document.getElementsByClassName('swiper-slide-active')[1].getBoundingClientRect().left;
      //     if (leftScreenVal >= 800) { // 
      //         moveLeftVal = document.getElementsByClassName('swiper-slide-active')[1].offsetLeft;
      //         moveLeftVal = 0 - moveLeftVal;
      //         document.querySelector('.gallery-thumbs > .swiper-wrapper').style.left = moveLeftVal + 'px';
      //     }
      // }
  });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
      centeredSlides: true,
      slidesPerView: 4,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      observer: true,
      observeParents: true,
      spaceBetween: 10

  });

  galleryTop.params.control = galleryThumbs;
  galleryThumbs.params.control = galleryTop;   
  //在线预订
  let online = $(".online");
  let onlineList = online.children('.OnlinePic'); 
  onlineList.hover(function() {
    console.log("经过")
    $(this).children('div').addClass('onlineActive');
  }, function() {
    $(this).children('div').removeClass("onlineActive");
  });

})
