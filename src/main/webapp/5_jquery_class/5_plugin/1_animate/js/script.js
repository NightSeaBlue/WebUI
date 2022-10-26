$(document).ready(function(){
	$('#bio h3').css({'cursor':'pointer'});
	var allDiv = $('#bio div');
	allDiv.hide();
	//allDiv.show();
	//이름을 클릭하면 해당 사진만 나오도록
	var name = $('#bio h3');
	name.each(function(){
	name.click(function(){
		allDiv.hide();
		//$(this).next().show();
		$(this).next().animate({'height':'toggle'},2000,'easeOutBounce');
		
		
	});
	
	});
	
});