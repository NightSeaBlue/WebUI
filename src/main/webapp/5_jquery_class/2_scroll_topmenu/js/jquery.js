$(document).ready(function(){
	$('#intro').animate({
		padding : '20px',
		fontSize : '30px'
	},2000);
	
	$('#navigation > ul > li').hover(function(){
		$(this).animate({
			paddingLeft : '+=15px'
		},200);
	},function(){
		$(this).animate({
			paddingLeft : '-=15px'
		},200);
	});
	
	
	
	// 고정 퀵메뉴 원리	// 위치를 최상단으로 고정시켜 두는 역할
	$(window).scroll(function(){
		$('#navigation').css({'top':$(document).scrollTop()});	
	});
	
});