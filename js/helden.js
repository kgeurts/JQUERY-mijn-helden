$(document).ready(function(){
// Test of het document werkt.
// $('main').hide(3000).delay(1000).show(500);

// Muis events.
$('figure img').mouseenter( function(){ 
	$(this).fadeTo(600, .01);
}).mouseleave(function(){
	$(this).fadeTo(1000, 1);
}).click(function(){
	$(this).next().toggle(700);
});

//Footer

$('footer').click ( function(){
	$(this).animate( {
		top: '-=50px',
		opacity: '-=0.2'

	}, 900)
	}).dblclick( function(){
		$(this).animate({
			top: '0',
			opacity: '1'
		}, 900)
	})
});

// Extra plugin
