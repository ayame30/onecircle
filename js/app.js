$(function () { // wait for document ready
		var controller = new ScrollMagic.Controller();
    var tween = new TimelineMax()
			.add(TweenMax.to($("#intro-text-1"), 1, {css:{opacity: 0}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#logo-2"), 1, {css:{opacity: 1}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#logo-1"), 1, {css:{opacity: 0}, ease:Power1.easeInOut}))
      .add(TweenMax.to($("#intro-text-2"), 1, {css:{opacity: 1}, ease:Power1.easeInOut}))
      .add(TweenMax.to($("#intro-text-2"), 1, {css:{opacity: 0}, ease:Power1.easeInOut}))
      .add(TweenMax.to($("#intro-text-3"), 1, {css:{opacity: 1}, ease:Power1.easeInOut}));

    var introScene = new ScrollMagic.Scene({triggerElement: "#intro", duration: "100%", triggerHook: 0})
					.setPin("#intro")
					.setTween(tween)
					.addTo(controller);

    var headerTween = new TimelineMax()
      .add(TweenMax.to($("header nav a"), 0.1, {css:{width: "100%"}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("header .logo"), 0.3, {css:{width: "30%"}, ease:Power1.easeInOut}))
      .add(TweenMax.to($("header nav"), 0.1, {css:{width: "70%"}, ease:Power1.easeInOut}))
      .add(TweenMax.to($("header nav a:not(.first)"), 0.2, {css:{opacity:0, y: -50}, ease:Power1.easeInOut}))
      .add(TweenMax.to($("header nav a:not(.first)"), 0.2, {css:{y: 0, x:-50}, ease:Power1.easeInOut}))
      .add(TweenMax.to($("header nav a"), 0.1, {css:{width: "15%", marginLeft: -18}, ease:Power1.easeInOut}))
      .add(TweenMax.to($("header nav a:not(.first)"), 0.2, {css:{x: 0, opacity:1}, ease:Power1.easeInOut}))
	  	  	  .add(TweenMax.to($(".fixed-container"), 0, {css:{opacity: 1}, ease:null}));
    var headerScene = new ScrollMagic.Scene({triggerElement: ".header-space",  triggerHook: 0})
					.setPin("header")
          			.setTween(headerTween)
					//.addIndicators() // add indicators (requires plugin)
					.addTo(controller);


		var footerScene = new ScrollMagic.Scene({triggerElement: ".footer",  triggerHook: 1, offset: 50})
					.setPin(".footer")
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	$(document).on('scroll', function() {
		if($('.section-b').offset().top < $(window).scrollTop() + $(window).height()/2) {
			$('#section-content').removeClass('a');
			$('#section-content').empty();

		}
	})

});
