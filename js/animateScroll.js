		

$(window).scroll(function(){
		check("#art-work-01","animate-box-top");
        check("#art-work-02","animate-box-top","animate-box-center","animate-box-bottom");
        check("#art-work-03","animate-each-text","animate-each-icon");
        check("#art-work-04","animate-use-phone","animate-each-use","animate-img-use-badge");
        check("#art-work-05","animate-img-star");
        check("#art-work-06","animate-btn");
        check("#art-work-07","animate-img-award");
        
    });

	function check(id,animate01,animate02,animate03){
		var window_height = $(window).height();
        var window_top_position = $(window).scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        var $element = $(id);
        var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);
	    if (
	      element_top_position <= window_bottom_position) {
	      	 $element.addClass("herotran");
	      	if($element.find(".one").hasClass("one")){
	      		$element.find(".one").addClass(animate01).addClass("animated");	
	      	}
	      	if($element.find(".two").hasClass("two")){
	      		$element.find(".two").addClass(animate02).addClass("animated");
	      	}
	      	if($element.find(".three").hasClass("three")){
	      		$element.find(".three").addClass(animate03).addClass("animated");
	      	}
	      	if($element.find(".four").hasClass("four")){
	      		$element.find(".four").addClass(animate02).addClass("animated");
	      	}
	      	if($element.find(".five").hasClass("five")){
	      		$element.find(".five").addClass(animate03).addClass("animated");
	      	}
      		
	      
	    } else {
	    	$element.removeClass("herotran");
	      	if($element.find(".one").hasClass("one")){
	      		$element.find(".one").removeClass(animate01).removeClass("animated");	
	      	}
	      	if($element.find(".two").hasClass("two")){
	      		$element.find(".two").removeClass(animate02).removeClass("animated");
	      	}
	      	if($element.find(".three").hasClass("three")){
	      		$element.find(".three").removeClass(animate03).removeClass("animated");
	      	}
	      	if($element.find(".four").hasClass("four")){
	      		$element.find(".four").addClass(animate02).addClass("animated");
	      	}
	      	if($element.find(".five").hasClass("five")){
	      		$element.find(".five").addClass(animate03).addClass("animated");
	      	}
	    }

	}