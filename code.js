var grabpoint = {};
var margin = 10;
var isdragging = false;
var selected;

$(function(){

	$(".comp").mousedown(function(e){
		grabpoint.left = e.pageX;
		grabpoint.top = e.pageY;
		grabpoint.cleft = $(this).position().left;
		grabpoint.ctop = $(this).position().top;
		isdragging = true;
		selected = this;
	});

	$(".comp").mouseup(function(e){
		isdragging = false;		
	});

	$(document).mousemove(function(e){

		if(isdragging){

		
			$(selected).css("left", grabpoint.cleft + ( e.pageX - grabpoint.left  ) +  "px");
			$(selected).css("top", grabpoint.ctop + ( e.pageY - grabpoint.top  ) + "px");
			
		}
		
	});

	
	ArrangeComponents();

});


function ArrangeComponents(){

	var components = $(".comp");
		var heightcount = 0;

		for(var i=0; i<components.length; i++){

			if(i > 0 ) heightcount+= margin;
			
			$( components[i] ).css("top", heightcount + "px" );
			heightcount += $( components[i] ).height();
			
		}


}