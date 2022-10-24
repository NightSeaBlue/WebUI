$(function(){
	$('#hideButton').click(function(){
		$('#intro').fadeOut(2000);
		
	});
	
	$('#showButton').click(function(){
		$('#intro').fadeIn(2000);
		
	});
	
	/*$('#toggleButton').click(function(){		//fadeToggle(2000)/ slideToggle(2000)
		$('#intro').toggle();
	});*/
	
	$('#toggleButton').click(function() {
		
		if($('#intro').is(':visible'))
		{ 
			$('#intro').fadeOut(1000);
		} else {
			$('#intro').fadeIn(1000);
		}
				
	});
	
	// 테이블의 내용 중 홀수행 배경색 지정
	/*$('#celebs table.data > tbody > tr:even').css({'background':'lightblue'});
	$('#celebs table.data > tbody > tr:odd').addClass('table_striping');*/
	
	// 마우스가 올라갔을 때 배경색 바뀌고 마우스 나왔을 때 원상 복귀
		
	$('#celebs tr').hover(function(){
		$(this).addClass('td_mouseover');
	},function() {
		$(this).removeClass('td_mouseover');
	});	
	
	
});