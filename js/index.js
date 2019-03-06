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
  resizeWin()
  //浏览器窗口大小变化时
  $(window).resize(function() {
    resizeWin()
  });


  function resizeWin(){
    var window_width = $(window).width();//获取浏览器窗口宽度
    console.log(window_width)
    $(".slideBox").children('ul').width(window_width*3+'px');
    $(".slideBox").children('ul').find('li').width(window_width+'px'); 
    var direWidth = $('.slideBox').children('ul').find('li').children('img').height();
  }
  let slideBox = $(".slideBox");
  let ul = slideBox.find("ul");
  let oneWidth = ul.find("li").width();
  let number = slideBox.find(".spanBox span");            //注意分号 和逗号的用法
  let timer = null;
  let sw = 0;   
  slide(number,timer,sw)
  function slide(number,timer,sw){
    //每个span绑定click事件，完成切换颜色和动画，以及读取参数值
    number.on("click",function (){
      $(this).addClass("active").siblings("span").removeClass("active");
      sw=$(this).index();
      ul.animate({
            "right":$(".slideBox").children('ul').find('li').width()*sw,    //ul标签的动画为向左移动；
      });
    });
    //左右按钮的控制效果
    $(".next").stop().click(function (){
       sw++;
       if(sw==number.length){sw=0};
       number.eq(sw).stop().trigger("click");
    });
    $(".prev").stop().click(function (){
        sw--;
        if(sw==number.length){sw=0};
        number.eq(sw).stop().trigger("click");
        });
    //定时器的使用，自动开始
    timer = setInterval(function (){
        sw++;
        if(sw==number.length){sw=0};
        number.eq(sw).stop().trigger("click");
    },5000);
  }              
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
   var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });    
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
