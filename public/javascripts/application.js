// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(function() {
	var $sharingContainer = $("#social_container");
	$(window).scroll(function() {
		//$sharingContainer.stop().animate(
	//		{ marginTop: $(window).scrollTop() + "px" },
	//		100);  
		$sharingContainer.css( { "position" : "fixed", "top" : "50px" });
	});
});
