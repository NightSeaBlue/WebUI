//window.onload = function(){	
	
	var item = document.getElementsByClassName('item');
	for (let i=0; i<item.length;i++) {
		item[i].onclick = function () {
			var price = item[i].getAttribute('data-price');
			alert(price);
		}// end of item.onclick
	}// end of for
	
	
	
	
	
	
	//};