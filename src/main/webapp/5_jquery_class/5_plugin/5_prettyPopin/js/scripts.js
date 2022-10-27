$(function(){
	// 첫번째 <a>를 찾음
	$('a[rel="prettyPopin"]:eq(0)').prettyPopin({width:500});		//a[] 요소 찾기
	
	// 두번째 <a>를 찾아 유사하게 생성
	$('a[rel="prettyPopin"]:eq(1)').prettyPopin({width:600,
	
		// 속성명 : 속성값 을 주는게 prettyPopin의 속성부여 스타일
			callback : function(){
						alert('팝업이 닫힙니다.');
						}											//callback : 종료버튼 눌렀을 때
	
	});		
	
	
	
	
})