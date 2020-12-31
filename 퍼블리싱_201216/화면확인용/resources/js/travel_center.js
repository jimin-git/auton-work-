$(function(){


    //  아코디언 스크립트 버전 2
    $('.accordion_wrap div').eq(0).children().addClass('on');
    $('.accordion').click(function(){
      $(this).next().slideToggle('fast');
      $(this).toggleClass('on');
      $('.calender_control_box .calender_setting .calender_time').show();
    });

    // calender_datetrol_box
    var SlickCalenderDate = $('.calender_date').slick({
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows:true,
      vertical : true,
      verticalSwiping: true
    });

    var SlickCalenderTime = $('.calender_time').slick({
      infinite: false,
      speed: 300,
      slidesToShow: 7,
      slidesToScroll: 7,
      autoplay: false,
      arrows:true
    });

    $('.calender_date a').click(function(){
      var CalenderDate = $(this).text();
      var CalenderWeek = $(this).parent().find('p').text();
      $('.calender_ck .date_day').text(CalenderDate);
      $('.calender_ck .date_week').text(CalenderWeek);
    });
    $('.calender_time a').click(function(){
      var CalenderTime = $(this).attr('value');
      $('.calender_ck .date_time').text(CalenderTime);
    });

    //layer_pop
    $(".layer_pop_btn").click(function(){
      $(".layer_pop").stop().fadeToggle(500);
      return false; //중요
    });
    //layer_pop 팝업 외에 영역 클릭
   $(document).click(function(e){
     if(e.target.className =="layer_pop"){return false}
     $(".layer_pop").stop().fadeOut(500);
   });






    $(window).on('load', function() {
      $('.calender_setting').hide();
    });
});
