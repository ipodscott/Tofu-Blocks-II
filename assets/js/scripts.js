jQuery(document).ready(function() {
    jQuery('.open-overlay').delay(1000).fadeOut(500, function() {});
    jQuery('.all').delay(500).fadeTo(500, 1);

    jQuery('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return !1
            }
        }
    });

    jQuery(".modal-open").click(function() {
        jQuery('.modal-box').fadeIn()
    });
    jQuery(".close-modal").click(function() {
        jQuery('.modal-box').fadeOut()
    });
    jQuery(".menu-btn").click(function() {
        jQuery(".menu").addClass('show-menu');
        jQuery(".menu-layer").fadeIn(500);
        jQuery(".all, body").addClass('stop-scroll');
		jQuery('.footer').removeClass('footer-up').addClass('footer-down');
    });
    jQuery(".menu ul li, .menu ul li a, .close-menu, .menu-layer").click(function() {
        jQuery(".menu").removeClass('show-menu');
        jQuery(".menu-layer").delay(250).fadeOut(500);
        jQuery(".all, body").removeClass('stop-scroll');
    });

    jQuery(".menu-btn").click(function() {
        jQuery(".menu").addClass('show-menu');
        jQuery(".menu-layer").fadeIn(500);
        jQuery(".all, body").addClass('stop-scroll');
        });

	jQuery(".menu ul li, .menu ul li a, .close-menu, .menu-layer").click(function() {
        jQuery(".menu").removeClass('show-menu');
        jQuery(".menu-layer").delay(250).fadeOut(500);
        jQuery(".all, body").removeClass('stop-scroll');
		});


   // Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = jQuery('.footer').outerHeight();

	jQuery(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 500);

	function hasScrolled() {
	    var st = jQuery(this).scrollTop();

	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;

	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        jQuery('.footer').removeClass('footer-down').addClass('footer-up');
	    } else {
	        // Scroll Up
	        if(st + jQuery(window).height() < jQuery(document).height()) {
	            jQuery('.footer').removeClass('footer-up').addClass('footer-down');
	        }
	    }

	    lastScrollTop = st;
	}

  // simple accordion

  jQuery('.acc-top').click(function(){
    jQuery(this).next(".accord-content").slideToggle().addClass('show');
    jQuery(this).closest("div").find('.accord-content').slideUp().addClass('show');
  });


});
