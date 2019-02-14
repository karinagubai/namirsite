//const schemeStep = document.querySelector('.step');
//const steps = document.querySelector('.steps');
//const arrowRight = document.querySelector('.fa-caret-right');
//const arrowDown = document.querySelector('.fa-caret-down');
//
//window.addEventListener('resize', () => {
//	let stepWidth = schemeStep.offsetWidth;
//	let stepsWidth = steps.offsetWidth;    
//    if ( stepWidth*2 < stepsWidth) {
//        arrowRight.style.display = 'block';
//		arrowDown.style.display = 'none';
//    } else {
//        arrowRight.style.display = 'none';
//		arrowDown.style.display = 'block';
//    }
//});
//
//const step1 = document.querySelector('.step1');
//const steps = document.querySelector('.steps');
//const arrowRight = document.querySelector('.fa-caret-right');
//const arrowDown = document.querySelector('.fa-caret-down');
//let stepWidth = step1.getClientRects();
//let stepsWidth = steps.getClientRects();
//if(stepWidth.width*2 < stepsWidth.width){
//	arrowDown.style.display = 'none';
//	arrowRight.style.display = 'block';
//} else {
//	arrowRight.style.display = 'none';
//arrowDown.style.display = 'block';
//


// fixed to top header
$(document).ready(function() {
    const $header = $('.header-main');
	$(window).scroll(function(){
		if ($(window).scrollTop() > 0) {
            $header.addClass('header-fixed');
        } else {
            $header.removeClass('header-fixed');
        }
     });
});

// toggle menu
$(document).ready(function() {
    $('.bars').on('click', function(){
        if ( $('.nav-menu').css('display') === 'none') {
            $('.nav-menu').css('display', 'block');
            $('.bars').toggleClass('open-nav fa-times');
        } else {
            $('.nav-menu').css('display', 'none');
            $('.bars').toggleClass('open-nav fa-times');
        }
    });
    $( window ).resize(function() {
        if ( $(window).width() > 767 ) {
            $('.nav-menu').css('display', 'block');
        } else {
            $('.nav-menu').css('display', 'none');
        }
    });
});

// lightbox

$(document).ready(function() {
    $('.open-lightbox').on('click', function(){
        const $imgHTML = $(this).attr("src");
        $('.lightbox-content img').attr("src", $imgHTML);
        $('.lightbox').css('display', 'flex');
    });
    $('.lightbox').on('click', function(){
        $(this).css('display', 'none');
    });
     $('.close-icon').on('click', function(){
        $('.lightbox').css('display', 'none');
    });
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
