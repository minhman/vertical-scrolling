// JavaScript Document
// fix with and height screen

$(document).ready(function() {
	var wh = $(window).height();

	$("body").css("height",wh*2 );
	$("body > section").css("height",wh);


	var hhf = $("body > section:first-child > header").height();
	var ahf = $("body > section:first-child > article").height();
	var fhf = $("body > section:first-child > footer").height();
	var lhf = wh-hhf-ahf;
	var mf = lhf - fhf - 20;
	$("body > section:first-child > footer").css("margin-top",mf);

	var hhl = $("body > section:last-child > header").height();
	var ahl = $("body > section:last-child > article").height();
	var fhl = $("body > section:last-child > footer").height();
	var lhl = wh-hhl-ahl;
	var ml = lhl - fhl;
	$("body > section:last-child > footer").css("margin-top",ml);


////////////////////////////////////////////////////////////////////////////

	var selector = "body > section:first-child > article > section:nth-child(2)";
	var selector1 = "body > section:first-child > article > section:nth-child(3)";
	var selectorf = "body > section:first-child > footer";

	$(selector).click(function(){
		$(selector1).animate({
			opacity: 0,
		},500,"linear", function(){
			$(selector).animate({
				"margin-left":"325px",
			},500,"linear",function(){
				$(selector + "> p").css("background-color","#e74c4a"),
				$(selectorf + "> section").fadeIn(300)
					})
			});
	})

	$(selector1).click(function(){
		$(selector).animate({
				opacity:0,
			},500, "linear", function(){
				$(selector).toggle("slow");
				$(selector1).animate({
					"margin-left":"325px"
					},500, "linear", function(){
							$(selector1 + "> p").css("background-color","#30adbf"),
							$(selectorf + "> section").fadeIn(300)
						})
				})
		})

	var list = "body > section:nth-child(2) > article > section ul li";

	$(list).addClass("not-check");
	$(list).removeClass("check");
	$(list).click(function(){
		$(this).animate({
			"background-image":"images/check.png",
			},500,"linear");
		$(this).removeClass("not-check").addClass("check");
		})

});


// Jquery Scroll.To with and height screen
$(document).ready(function() {

		$('a').click(function () {
			$('a').removeClass('selected');
			$(this).addClass('selected');
			current = $(this);
			$('body').scrollTo($(this).attr('href'), 800);
			return false;
	});

	$(window).resize(function () {
		resizePanel();
	});

});

