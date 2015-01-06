$(document).ready(function(){

//    $('html.touch .graph-display').hide();
//    $('html.notouch .code-display').hide();

    //DETERMINE PLATFORM
    var isMobile = { 
        Android: function() { return navigator.userAgent.match(/Android/i); }, 
        BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
        iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
        Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
        Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
        any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
    
    
    //IF NOT ON MOBILE, SHOW GRAPH
    if (!isMobile.any())
        $('.code-display').hide();
        $('#works-container').removeClass('container');
    //ELSE SHOW CAROUSEL
    if (isMobile.any()){
        $('#works-container').addClass('container');
        $("#owl-code").owlCarousel();
        $('.graph-display').hide();        
    }
    
    
    //------------------SET DATE
    var currentDate = new Date();
    var birthDate = new Date("1993","11","7");
    var timeDiff;
    if(currentDate.getMonth() < birthDate.getMonth()){
         timeDiff = Math.abs(currentDate.getFullYear() - birthDate.getFullYear() -1);
    }
    else if(currentDate.getMonth() == birthDate.getMonth()){
        if(currentDate.getDate() < birthDate.getDate()){
            timeDiff = Math.abs(currentDate.getFullYear() - birthDate.getFullYear() -1);
        }
        else{timeDiff = Math.abs(currentDate.getFullYear() - birthDate.getFullYear());}        
    }
    else{timeDiff = Math.abs(currentDate.getFullYear() - birthDate.getFullYear());}
    document.getElementById("age").innerHTML = timeDiff;	
    
    //------------------NAVIGATION MENU
    
    var offset = 300;

	var navigationContainer = $('#nav'),mainNavigation = navigationContainer.find('#main-nav ul');
    var contentSections = $('.section'),navigationItems = $('#main-nav a');

        //check status of menu
    checkMenu();
	$(window).scroll(function(){
		checkMenu();
	});
        
    	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    
        //smooth scroll to second section
    $('.scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

        //open-close navigation on touch devices
    $('.touch .nav-trigger').on('click', function(){
    	$('.touch #main-nav').toggleClass('menu-is-open');
  
    });
    
        //close navigation on touch devices when selecting an elemnt from the list
    $('html.touch #main-nav li').on('click', function(){
    	$('.touch #main-nav').removeClass('menu-is-open');
    });


	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}    
    
    	//open or close the menu clicking on the bottom "menu" link
	$('.nav-trigger').on('click', function(){
		$(this).toggleClass('menu-is-open');
		//we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
		mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

	});
    
    function checkMenu() {
        if( $(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
			navigationContainer.addClass('is-fixed').find('.nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
				mainNavigation.addClass('has-transitions');
			});
		} else if ($(window).scrollTop() <= offset) {
			//check if the menu is open when scrolling up
			if( mainNavigation.hasClass('is-visible')  && !$('html').hasClass('no-csstransitions') ) {
				//close the menu with animation
				mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					//wait for the menu to be closed and do the rest
					mainNavigation.removeClass('is-visible is-hidden has-transitions');
					navigationContainer.removeClass('is-fixed');
					$('.nav-trigger').removeClass('menu-is-open');
				});
			//check if the menu is open when scrolling up - fallback if transitions are not supported
			} else if( mainNavigation.hasClass('is-visible')  && $('html').hasClass('no-csstransitions') ) {
					mainNavigation.removeClass('is-visible has-transitions');
					navigationContainer.removeClass('is-fixed');
					$('.nav-trigger').removeClass('menu-is-open');
			//scrolling up with menu closed
			} else {
				navigationContainer.removeClass('is-fixed');
				mainNavigation.removeClass('has-transitions');
			}
		} 
	}

    
    //------------------TIMELINE BOUNCE
	var $timeline_block = $('.timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.timeline-img, .timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.timeline-img').hasClass('is-hidden') ) {
				$(this).find('.timeline-img, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});

    //------------------ANIMATE SKILLS    
    $('#skillbar li').each(function(){        
        $(this).appear(function(){

            var b = $(this).find('span').attr("data-width");
            
            $(this).find('span').animate({
                opacity:1,
                width: b + "%"
            },1200);
            
        });
    });
    
    $('.contact form').appear(function(){
        $(this).addClass('bounce-in');
    });

    $('#contact-form').submit(function(){
        var url = "mail-config.php";
        
        $.ajax({
            type:"POST",
            url:url,
            data:$("#contact-form").serialize(),
            success: function(data)
            {
                if(data == "Success")
                {
                    $('#confirmation').html('<i style="color:lime; padding:5px" class="fa fa-check-circle-o fa-2x"></i>'+
                                            '<span style="font-size:2vh; position:relative; color:lime; top:-5px;">Message sent</span>').slideDown(500).delay(2000).slideUp(500);
                }
                else
                {
                    $('#confirmation').html('<i style="color:red; padding:5px" class="fa fa-times fa-3x"></i>'+
                                            '<span style="font-size:2vh; color:pink;position:relative; top:-7px;">Try an alternative below.</span>').slideDown(500).delay(2000).slideUp(500);
                }
            },
            statusCode:
            {
                404:function(){
                    $('#confirmation').html('<i style="color:red; padding:5px" class="fa fa-times fa-3x"></i>'+
                                            '<span style="font-size:2vh; color:pink;position:relative; top:-7px;">Try an alternative below.</span>').slideDown(500).delay(2000).slideUp(500);
                }
                405:function(){
                    $('#confirmation').html('<i style="color:red; padding:5px" class="fa fa-times fa-3x"></i>'+
                                            '<span style="font-size:2vh; color:pink;position:relative; top:-7px;">Messaging suspended</span>').slideDown(500).delay(2000).slideUp(500);
                }
            }
        });
        
        return false;
    });
    
});

 