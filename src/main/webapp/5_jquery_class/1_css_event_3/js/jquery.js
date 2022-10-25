$(document).ready(function(){
	// 글자 크기 조정
	$('.fontSize > button:first').click(function(){
		//button:eq(0)
		//alert('ok');
		$('#txt').css({'font-size':'+=1px'});
	});
	
	$('.fontSize > button:last').click(function(){
		//buttno:eq(1)
		//alert('ok');
		$('#txt').css({'font-size':'-=1px'});
	});
	
	//글씨체 조정
	$('#fontstyle').change(function(){
		$('#txt').css({
			'font-family' : $(this).val()
		});
	});
	
	
});