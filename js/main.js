$(document).ready(function() {
	
	
	
	$(".trigger").click(triggerNav);
	
	function triggerNav(){
		if($(".nav-border").hasClass("nav-off")){
			$(".nav-border").addClass("nav-on");
			$(".nav-border").removeClass("nav-off");
			$(".trigger").addClass("color-white");
			$("nav").addClass("active");
		}
		else{
			$(".nav-border").addClass("nav-off");
			$(".nav-border").removeClass("nav-on");	
			$(".trigger").removeClass("color-white");
			$("nav").removeClass("active");
		}	
	}

	
	
	
	
	
	
	
	
	
	
	});