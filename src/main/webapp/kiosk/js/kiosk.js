$(document).ready(function(){
   
   var totalPrice = 0;
   var topDiv = $('.container');
   var anchors = topDiv.find('ul img')
   var lastAnchor = anchors.next();
   var lastTap = $(lastAnchor.attr('href'));
   var tables = topDiv.find('.tables')
   
    tables.hide();
	lastTap.show();
	
   $(".container").hide();
   
	$("img#main").click(function(){
		$(this).fadeOut(2000);
		$(".container").show();
	})
   
   anchors.click(function(){
		var currentAnchor = $(this).next();
		var currentTap = $(currentAnchor.attr('href'));
		
		tables.hide();
		currentTap.show();
		
		lastAnchor.removeClass('on');
		currentAnchor.addClass('on');
		lastAnchor.closest('li').removeClass('on');
		currentAnchor.closest('li').addClass('on');
		
		
		lastAnchor = currentAnchor;
		lastTap = currentTap;
	})
   
   
   $('.tables img').click(function(){
      var tr = $('<tr class="orderList"/>');
      var count = $('<td><button class="btnMinus"> - </button><span id="cnt">1</span><button class="btnPlus"> + </button></td>')
      var name = $(this).parent().find("span").attr("data-name");
      var price = parseInt( $(this).parent().find("span").attr("data-price") );
      var cancel = $('<td><button id="cancel" class="btn btn-warning">취소</button></td>');
      
      
      if( $("#list:contains("+name+")").length == 0 ){
         tr.append([$('<td/>').text(name),$('<td/>').text(price).attr("id","price"),count,cancel]);
         $('#list').append(tr);
         totalPrice += price;
         $('#total').val(totalPrice);
      }else{
         alert("이미 추가 되었습니다.");
      }
      
      cancel.click(function(){
            let cnt = parseInt($(this).parent().find("#cnt").text()); 			        
         	totalPrice -= parseInt( $(this).closest("tr").find("#price").text() )*cnt;
         	$(this).closest('tr').remove();
         	$('#total').val(totalPrice);
         	
         });
   });
      
      
   $('#list').on("click",".btnMinus",function(){
      if( $(this).parent().find("#cnt").text() === "1" ){
         totalPrice -= parseInt( $(this).closest("tr").find("#price").text() );
         $('#total').val(totalPrice);
         //$(this).parent().parent().remove();
         $(this).closest('tr').remove();
         
      }else{
         let cnt = parseInt($(this).parent().find("#cnt").text()) - 1;
         $(this).parent().find("#cnt").text(cnt);
         totalPrice -= parseInt( $(this).closest("tr").find("#price").text() );
         $('#total').val(totalPrice);
      }
   });
      
      
   $('#list').on("click",".btnPlus", function(){
      let cnt = parseInt($(this).parent().find("#cnt").text()) + 1;
      $(this).parent().find("#cnt").text(cnt);
      totalPrice += parseInt( $(this).closest("tr").find("#price").text() );
      $('#total').val(totalPrice);
   });
   
   
   $('#btn.btn').click(function(){
      if (confirm("주문하시겠습니까?") == true){
         if($('.orderList').length == 0){
            alert("주문하실 상품을 선택해주세요.");
         }else{
            alert("주문이 완료되었습니다.");
            totalPrice = 0;
            $('#total').val(totalPrice);
               $('.orderList').remove();
         }
       }else{
         alert("이전 화면으로 되돌아갑니다.");
         return;
       }
       });

})