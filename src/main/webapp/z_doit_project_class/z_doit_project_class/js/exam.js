$(document).ready(function() {

	// 1. 년 월 일에 날짜 출력
	var today = new Date();
	$('.year').text(today.getFullYear());
	$('.month').text(today.getMonth() + 1);
	$('.date').text(today.getDate());

	// 2. 포커스 가면 ‘검색어를 입력하세요’를 안보이고 다시 포커스가 없으면 다시 출력
	$('#keyword').focus(function() {
		$('#keyword').css("background","url('')");
		
	})
	
	$('#keyword').blur(function(){
		$('#keyword').css("background","url('./images/sch_guide.gif') no-repeat");
	})


	// 3. 탭 팬 구현
	 $('#tabmenu dt').click(function(){
      
      $('#tabmenu dd').hide();      
      $(this).next('dd').show();
      
      var src = $('#tabmenu dt a img');
      for(var i=0; i<src.length; i++){
         let eq = src.eq(i)
         eq.attr('src',eq.attr('src').replace('over','out'));
      }
      var img = $(this).find('img')
      img.attr('src',img.attr('src').replace('out','over'));
      
      });
	
	/*  $('#tabmenu').each(function(){
      var allDt = $(this).find('dt')
      var allDd = $(this).find('dd')
      
      allDt.click(function(){
         allDd.hide(); //전체 닫기
         $(this).next().show(); //이벤트 발생한것만 열기
      })
   })

	$('.tab_btn1 img').click(function(){   
         $(this).attr('src', $(this).attr('src').replace('out','over'));
         $('.tab_btn2 img').attr('src','images/tab_btn_2_out.gif');
         $('.tab_btn3 img').attr('src','images/tab_btn_3_out.gif');
   	})
   
   	$('.tab_btn2 img').click(function(){
        $(this).attr('src', $(this).attr('src').replace('out','over'));
        $('.tab_btn1 img').attr('src','images/tab_btn_1_out.gif');
         $('.tab_btn3 img').attr('src','images/tab_btn_3_out.gif');
   	})
   $('.tab_btn3 img').click(function(){   
         $(this).attr('src', $(this).attr('src').replace('out','over')); 
         $('.tab_btn1 img').attr('src','images/tab_btn_1_out.gif');
         $('.tab_btn2 img').attr('src','images/tab_btn_2_out.gif');
   })*/
	
	// (4)이미지슬라이드 구현 (10점)
   var mySlider = $('#best_bg>ul').bxSlider({
      auto:true,
      minSlides: 5,
      maxSlides: 5,
      moveSlides: 1,
      slideWidth: 150,
      autoHover: true,
      controls: false,
      pager:false
   });
   
   $(".bx-wrapper").css("margin-left","120px");
   $(".bx-wrapper img").css("vertical-align","middle");
   
   $(".prev_btn").click(function(){
            // 이전 슬라이드 배너로 이동된다.
            mySlider.goToPrevSlide();
            // <a>의 링크를 차단한다.
            return false;
   });
   $(".next_btn").click(function(){
            // 이전 슬라이드 배너로 이동된다.
            mySlider.goToNextSlide();
            // <a>의 링크를 차단한다.
            return false;
   });
   
	// 5. [로그인]을 누르면 로그인 창이 보이고 [Close]를 누르면 다시 안 보임
	$('.login_wrap > a > img').click(function(){
		$('#login_f').css("top","20px");		
	})
	
	$('.login_close_btn > a > img').click(function(){
		$('#login_f').css("top","-250px");
	})
	// 6. [전체메뉴]를 선택하면 전체메뉴가 보이고 [Close] 누르면 다시 안 보임 
	$('#total_btn > a > img').click(function(){
		$('#total_menu').show();
	})
	
	$('#total_close > a > img').click(function(){
		$('#total_menu').hide();
	})

})