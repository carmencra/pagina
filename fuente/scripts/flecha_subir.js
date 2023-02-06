// $(document).ready(function(){

// 	$('.flecha').click(function(){
// 		$('body, html').animate({
// 			scrollTop: '0px'
// 		}, 300);
// 	});

// 	$(window).scroll(function(){
// 		if( $(this).scrollTop() > 0 ){
// 			$('.flecha').slideDown(300);
// 		} else {
// 			$('.flecha').slideUp(300);
// 		}
// 	});

// });


// document.querySelector('.flecha').addEventListener('click', () => {
// 	window.scrollTo({
// 		top:0,
// 		behavior: 'smooth'
// 	})
// }) 



// $('.flecha').click(function(){
// 	$('body, html').animate({
// 		scrollTop: '0px'
// 	}, 300);
// });

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
