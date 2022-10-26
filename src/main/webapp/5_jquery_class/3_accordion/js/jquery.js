$(document).ready(function(){
	$('.accordion').each(function(){
		var allDt = $(this).find('dt');
		var allDd = $(this).find('dd');
		
		allDd.hide();
		
		//allDd.first().show();
		
		allDt.css({'cursor':'pointer'});
		
		allDt.click(function(){
			//alert('눌렀네용?');		// 이벤트 발생 확인
			//allDd.hide();
			$(this).next().toggle();
			
		});
		
	});
	
	
	
	
	
})