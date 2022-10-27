$(document).ready(function(){
   
   var totalPrice = 0;								// 결제 총액을 구하기 위한 변수 선언
   var topDiv = $('.container');					// 최상위 객체 변수, 이땐 클래스를 지정해두었음 (즉, 도입 화면)
   var anchors = topDiv.find('ul img')				// topDiv에서 find로 요소를 찾아 이를 변수에 지정해두었음 (탭의 이미지)
   var lastAnchor = anchors.next();					// img의 다음 요소 (즉 메뉴 사진들 다음 요소들)
   var lastTap = $(lastAnchor.attr('href'));		// lastAnchor에게 있는 href의 요소를 Jquery 객체화 시켜 변수에 저장
   var tables = topDiv.find('.tables')				// topDiv 에 있는 table class 를 찾아 이를 변수에 지정
   
    tables.hide();									// 초기 화면에서 미리 구성해둔 요소들을 숨김
	lastTap.show();									// 초기 화면만 보여줌 (이 땐 걸어둔 이미지)				
	
   $(".container").hide();							// 실 구동 화면 숨겨둠 
   
	$("img#main").click(function(){					// 사진을 선택했을 때, 구동 화면이 나타나게 함
		$(this).fadeOut(2000);						// fade Out => 2초 뒤 사라지게 함
		$(".container").show();
	})
   
   anchors.click(function(){								 // anchor(이 때 탭의 이미지) 을 눌렀을 때
		var currentAnchor = $(this).next();					// 누른 사진 다음의 요소들
		var currentTap = $(currentAnchor.attr('href'));		// #tab-1 ~ #tab-4 에 해당하는 요소들을 지정 
		
		tables.hide();										// 모든 테이블 안보이게
		currentTap.show();									// 내가 선택한 탭만 보이게
		
		lastAnchor.removeClass('on');						// on class 를 부여하거나 제거해, 기능을 하게끔 함
		currentAnchor.addClass('on');
		lastAnchor.closest('li').removeClass('on');
		currentAnchor.closest('li').addClass('on');
		
		
		lastAnchor = currentAnchor;							// last 와 current 를 변화 해 이동할 때 마다, on class 변환 가능하게 함
		lastTap = currentTap;
	})
   
   
   $('.tables img').click(function(){						// 테이블의 이미지 (즉 메뉴 사진)를 눌렀을 때
      var tr = $('<tr class="orderList"/>');				// css 적용을 한 동적 tr(table row) 생성
      var count = $('<td><button class="btnMinus"> - </button><span id="cnt">1</span><button class="btnPlus"> + </button></td>')	// 갯수 조절 버튼 및 초기 갯수(1) 생성 변수
      var name = $(this).parent().find("span").attr("data-name");																	// span 내 data-name 즉 메뉴 명
      var price = parseInt( $(this).parent().find("span").attr("data-price") );														// span 내 data-price 즉 메뉴 가격		
      var cancel = $('<td><button id="cancel" class="btn btn-warning">취소</button></td>');											// 취소 버튼
      
      // 중복 메뉴가 있는 경우, 이를 주문 현황에 넘기지 않도록 하는 기능
      if( $("#list:contains("+name+")").length == 0 ){																				// id=list(이하 주문현황) 에서 data-name을 함유하고 있는 요소들이 없을 때							
         tr.append([$('<td/>').text(name),$('<td/>').text(price).attr("id","price"),count,cancel]);									// 동적 tr에 요소들을 추가로 붙임
         $('#list').append(tr);																										// 주문현황에 동적 tr 붙임
         totalPrice += price;																										// 메뉴 가격을 총액에 합산
         $('#total').val(totalPrice);																								// 총합 tf에 총액 나타냄
      }else{
         alert("이미 추가 되었습니다.");																									// list에 이미 추가되어 있다는 알림
      }
      
      // 취소 버튼 기능
      cancel.click(function(){
            let cnt = parseInt($(this).parent().find("#cnt").text());																// 주문한 갯수 			        										
         	totalPrice -= parseInt( $(this).closest("tr").find("#price").text() )*cnt;												// 동적 tr 자체를 삭제하므로 총액에서 그 금액만큼 감함
         	$(this).closest('tr').remove();																							// 가장 가까이 있는 동적 tr을 제거 (이때 각 tr 만 제거되게끔)
         	$('#total').val(totalPrice);																							// 감한 금액을 다시 총액에 나타냄
         	
         });
   });
      
      // 주문 개수 줄이는 버튼의 기능 할당
   $('#list').on("click",".btnMinus",function(){																					
      if( $(this).parent().find("#cnt").text() === "1" ){																			// 주문 개수가 1일 경우 (1보다 작아질 때)
         totalPrice -= parseInt( $(this).closest("tr").find("#price").text() );														// 즉 주문 개수가 0이 되거나 그 이하로 내려가므로, 그 금액만큼 차감		
         $('#total').val(totalPrice);																								// 차감 금액 표기	
         //$(this).parent().parent().remove();																						// 먹힐 줄 알았으나, 안 먹히고 삭제한 데이터가 그대로 올라옴	
         $(this).closest('tr').remove();																							// 주문한 갯수가 없으므로, 해당 동적 테이블로우 제거
         
      }else{
         let cnt = parseInt($(this).parent().find("#cnt").text()) - 1;																// 주문 개수가 1보다 클 경우 - 버튼을 통해 주문 개수 감함
         $(this).parent().find("#cnt").text(cnt);																					// 감한 결과를 다시 할당	
         totalPrice -= parseInt( $(this).closest("tr").find("#price").text() );														// 금액 감함
         $('#total').val(totalPrice);																								// 감한 금액 표기
      }
   });
      
      // 주문 개수 증가 버튼 기능 할당
   $('#list').on("click",".btnPlus", function(){
      let cnt = parseInt($(this).parent().find("#cnt").text()) + 1;																	// 주문 개수 증가
      $(this).parent().find("#cnt").text(cnt);																						// 증가값 표기	
      totalPrice += parseInt( $(this).closest("tr").find("#price").text() );														// 선택한 갯수만큼의 금액 추가 할당	
      $('#total').val(totalPrice);																									// 증가 금액 표기
   });
   
   	// 주문하기 버튼 기능 할당
   $('#btn.btn').click(function(){
      if (confirm("주문하시겠습니까?") == true){																							// 주문하시겠습니까? 창을 띄우고 이때 확인, 취소 선택지를 줌													
         if($('.orderList').length == 0){																							// 주문을 아예 안 한 경우
            alert("주문하실 상품을 선택해주세요.");																							// 주문 안 했으므로 주문 하게끔 유도
         }else{
            alert("주문이 완료되었습니다.");																								// 주문이 있는 경우, 주문 완료 안내
            totalPrice = 0;																											// 총액 초기화
            $('#total').val(totalPrice);																							// 초기화 된 금액을 다시 총액에 표기
               $('.orderList').remove();																							// 주문 내역 삭제	
         }
       }else{
         alert("이전 화면으로 되돌아갑니다.");																								// 취소를 누른경우 다시 메인 키오스크 화면으로 돌림
         return;
       }
       });

})