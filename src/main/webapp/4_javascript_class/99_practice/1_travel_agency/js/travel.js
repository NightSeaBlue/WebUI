 window.onload=function () {
		
		let frm = document.getElementById('frm');
		let adultPrice = frm.tfAdult;
		let childPrice = frm.tfChild;
		let juniorPrice = frm.tfJunior;	
		
		adultPrice.onchange=calc;
		childPrice.onchange=calc;
		juniorPrice.onchange=calc;
		

	 
	 function calc() {
		frm.tfSum.value=(adultPrice.value*39000)+(childPrice.value*29000)+(juniorPrice.value*19000);
	}
	
	
	frm.onsubmit = function(evt) {
		evt.stopPropagation();
		evt.preventDefault();
		
		if(!frm.cb.checked||!frm.cb2.checked) {
			alert('반드시 체크해 주셔야 합니다!');
				return;
		} 
		
		frm.submit();
		
		}	
	
};