$(document).ready(function(){
	var topDiv = $('.tabSet');		//tabSet 을 참조
	var anchors = topDiv.find('ul.tabs > li > a');
	var panelDivs = topDiv.find('div.panels > div.panel');
	
	
	anchors.show();
	panelDivs.hide();
	
	var lastAnchor = anchors.filter('.on');					//filter 속성값까지 찾아짐.
	var lastPanel = $(lastAnchor.attr('href'));				//on class 를 보유한 a panel 의 href 값 객체 생성시 $() 사용 / JQuery object 화
	//alert(lastPanel);										//#panel1-1			// [object Object]
	lastPanel.show();										// 객체의 내용 표시	
	
	anchors.click(function(){
		var currentAnchor = $(this);
		var currentPanel =$(currentAnchor.attr('href'));
		lastPanel.hide();
		currentPanel.show();
		
		
		lastAnchor.removeClass('on');						//on class 제거
		currentAnchor.addClass('on');						//on class 부여 , 클릭시 색 강조 효과 부여
		
		
		
		lastAnchor = currentAnchor;							//지난 앵커를 현재의 앵커로 지정해줘야 클릭 변환시 앵커가 변경 (기존 선택값을 초기화 시켜줌)
		lastPanel = currentPanel;							//패널 이하 상동 (기존 선택값을 초기화 시켜줌)
		
	});
	
})