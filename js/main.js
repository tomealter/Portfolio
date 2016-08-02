$(document).ready(function () {
	
	//SCRIPT FOR RUNNING THE BORDER NAVIGATION
	function triggerNav() {
		if ($(".nav-border").hasClass("nav-off")) {
			$(".nav-border").addClass("nav-on");
			$(".nav-border").removeClass("nav-off");
			$(".trigger").addClass("color-white");
			$("nav").addClass("active");
		}
		else {
			$(".nav-border").addClass("nav-off");
			$(".nav-border").removeClass("nav-on");	
			$(".trigger").removeClass("color-white");
			$("nav").removeClass("active");
		}	
	}
	
    $(".trigger").click(triggerNav);
    $("nav a").click(triggerNav);

    
    //SMOOTH SCROLL BETWEEN SECTIONS
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    //ACTIVATE UP ARROW ON SCROLL
    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 150;             // set to whatever you want it to be

        if(y_scroll_pos > scroll_pos_test) {
            $(".up-arrow").removeClass("arrow-off");
            $(".up-arrow").addClass("arrow-on");
        }
        else{
            $(".up-arrow").removeClass("arrow-on");
            $(".up-arrow").addClass("arrow-off");
        }
    });
    
});

