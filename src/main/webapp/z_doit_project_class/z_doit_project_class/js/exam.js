$(document).ready(function() {

	// 1. 년 월 일에 날짜 출력 (10)
	var today = new Date();							// 변수에 date() function 할당
	$('.year').text(today.getFullYear());			// 원하는 년도 표기(20XX)를 가져올 땐 getFullYear
	$('.month').text(today.getMonth() + 1);			// 컴퓨터의 경우 숫자가 0부터 시작하므로 구하고자 하는 달의 정확한 표기를 위해 +1
	$('.date').text(today.getDate());				// 요일 획득	

	// 2. 포커스 가면 ‘검색어를 입력하세요’를 안보이고 다시 포커스가 없으면 다시 출력
	$('#keyword').focus(function() {					// focus를 얻었을 때
		$('#keyword').css("background","url('')");		// background 이미지의 url을 초기화 시킴
		
	});
	
	$('#keyword').blur(function(){						// focus를 잃었을 때
	  	$('#keyword').css("background","url('./images/sch_guide.gif') no-repeat");		// 원래 있던 background image url 활성화
	});																					// no-repeat : gif 나 움직이는 이미지의 반복동작을 억제						


	// 3. 탭 팬 구현	(10)
	 $('#tabmenu img').each(function(){			// tabmenu의 img 각각에 function 부여
      $(this).click(function(){					// img 클릭시 기능 활성화
      	// img src에 'over'가 들어가 있는 이미지를 하나의 변수에 할당
      	let imgover = $('dl#tabmenu img[src*="over"]');
      	// src 'over'를 'out' 으로 변경
      	let srcout = imgover.attr('src').replace("over","out");
      	// 선택한 이미지의 src
      	let choice = $(this).attr('src');
		// 모든 탭의 패널 숨기기
      	$('#tabmenu dd').hide();
      	// 선택한 탭의 패널 보이기      
      	$(this).closest("dt").next().show();
      	
      	//img의 src 변경 (탭 버튼 클릭시 탭 선택 이동 효과 부여)
		imgover.attr("src",srcout);
		
		//선택한 탭의 img 속성 out에서 over로 변경 (다른 탭을 눌렀을 때 해당 탭 활성화 효과 - 눌린 것 처럼)      
      	$(this).attr("src",choice.replace("out","over"));
      
      });
      
      });
		
		// src 속성 변경 반복문으로 짠 것
     /* var src = $('#tabmenu dt a img');
      for(var i=0; i<src.length; i++){
         let eq = src.eq(i)
         eq.attr('src',eq.attr('src').replace('over','out'));
      }
      var img = $(this).find('img')
      img.attr('src',img.attr('src').replace('out','over'));*/
      
		// 각 탭의 기능 활성화, 그리고 모든 탭 내용에 속성을 걸어서 해결한 것
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
	
	// (4)이미지슬라이드 구현 (10)
   var mySlider = $('#best_bg>ul').bxSlider({		// bxslider plugin을 활용해 기능 부여
      auto:true,									// 자동 사진 변경 : true
      minSlides: 5,									// 완성 화면상 사진 장수 : 5개
      maxSlides: 5,									// 완성 화면상 사진 장수 : 5개
      moveSlides: 1,								// 슬라이드 이동 시 이동하는 갯수 : 1개
      slideWidth: 150,								// 슬라이드 너비 : 150px
      slideMargin : 25,								// 슬라이드 외부 여백(간격) : 25px
      autoHover: true,								// 마우스 올라갈 경우 자동 사진 변경 멈춤
      controls: false,								// 이전 다음 버튼 노출 여부 : 안 보이게
      pager:false									// 사진 페이지 번호(인덱스) 노출 여부 :  안 보이게
   });
   
   // bx-slider css 조절
   $(".bx-wrapper img").css("horizental-align","middle");		// 사진 수평 가운데 정렬
   $(".bx-wrapper span").css("margin-right","50px");		// 사진 아래 책 제목,저자 사진과의 위치 맞춤
   
   // 이전 버튼 기능 활성화   
   $(".prev_btn").click(function(){
            // 이전 슬라이드 배너로 이동된다.
            mySlider.goToPrevSlide();
            // <a>의 링크를 차단한다.
            return false;
   });
   
   // 다음 버튼 기능 활성화
   $(".next_btn").click(function(){
            // 이전 슬라이드 배너로 이동된다.
            mySlider.goToNextSlide();
            // <a>의 링크를 차단한다.
            return false;
   });
   
	// 5. [로그인]을 누르면 로그인 창이 보이고 [Close]를 누르면 다시 안 보임 (20)
	$('.login_wrap > a > img').click(function(){		// 로그인 버튼의 이미지 눌렀을 때 function 부여
		$('#login_f').css("top","20px");				// 로그인 화면의 css 수정
	});
	
	$('.login_close_btn > a > img').click(function(){	// 로그인 화면 내 close 버튼 img 눌렸을 때 function 부여
		$('#login_f').css("top","-250px");				// 로그인 화면 css 수정
	});
	
	// 6. [전체메뉴]를 선택하면 전체메뉴가 보이고 [Close] 누르면 다시 안 보임 (20)
	$('#total_btn > a > img').click(function(){			// 전체 메뉴 이미지 눌렀을 때 function 부여
		//전체 메뉴 img src 속성값
		let ttimgsrc = $(this).attr("src");
		// src out에서 over 로 변경
		$(this).attr("src",ttimgsrc.replace("out","over"));
		
		// 전체 메뉴 보이기
		$('#total_menu').show();						// total menu의 css 옵션 중 display : none 으로 설정되어 있어 hide,show function 사용 가능
		
	});
	
	$('#total_close > a > img').click(function(){
		//전체 메뉴 img src 속성값
		let imgsrc = $("#total_btn > a > img").attr("src");
		// 전체 메뉴 img src over에서 out으로 변경
		$("#total_btn > a > img").attr("src",imgsrc.replace("over","out"));
		
		// 전체 메뉴 안 보이게 하기
		$('#total_menu').hide();
	});
	
	// 7. 부가기능 (20 점)
	
	// 출판 상담 문의 이미지 클릭시 - 요일 및 시간에 따라 상담 가능 안내
	$('#consult_wrap>li> img:eq(0)').click(function(){
		// 출판 상담 문의 누를 수 있다는 표시 (마우스 포인터 손가락 모양으로 변경)
		$(this).css("cursor","pointer");
		// 해당하는 요일과 시간이 일치할 경우 상담이 가능하다는 alert 표시, 아닐 경우 상담 불가
		if(today.getDay()==0||today.getDay()==6||today.getHours()<9||today.getHours()>18) {	// 정확한 요일 및 시간이 맞아야 상담 가능
			alert("상담이 불가능 합니다.");
			} else {
			alert("상담이 가능합니다.")
			}
		
	});

})