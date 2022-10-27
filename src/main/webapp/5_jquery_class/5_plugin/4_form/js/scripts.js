$(document).ready(function(){
	
	$('#signup > form').validate({
		
		rules : {
			name : {required : true},
			email : {required : true, email : true},
			website : {required : true, url : true},
			password : {required : true, minlength : 6, maxlength : 12},
			passconf : {equalTo : '#password'}
					 
		},									// 규칙 지정
		success : function(label){
			label.addClass('valid');		// 성공시 valid Class 추가
			label.text('성공');				// label 옆에 녹색 체크표시 추가(text 입력 안되어 있으면 그게 안나옴, 이유는 몰?루?)
		}
		
	});										//validate : 유효성 검사
	
	// -----------------------------------------------------------
	// attr() 버그 있음 -> prop() 사용
	
	// 전체 체크 버튼 기능 활성화
	$('.check-all').click(function(){
		 /*if($('.check-all').is(':checked')) {$('.agree').prop("checked",true)}
		 else {$('.agree').prop("checked",false)}*/
		 $('.agree').prop('checked',$('.check-all').is(':checked'));
				
	});
	
	//체크박스들중 하나 체크 해제되면 전체체크 칸도 해제, 하나씩 체크하다 전체 체크 됐을땐 전체체크 선택박스에도 체크
   $(".stats").on("click",".agree",function(){
      /*let checked = $(this).is(":checked");
      
      if(!checked){
         $('.check-all').prop('checked', false);
      }else{
         $('.check-all').prop('checked', true);
      }*/ 
      
		var each = $('.agree:checked').length;
		if(each != 5) {	$('.check-all').prop('checked',false)} 
		else { $('.check-all').prop('checked',true) }
   });

	
})