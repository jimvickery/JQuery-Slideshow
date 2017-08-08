console.log('inside main.js');

// Slideshows should have the following features:

// Arrow buttons to navigate between images
// An auto-rotate feature that navigates through the images on a loop
// A caption for each image
// A fade in and fade out animation
// A consistent height and width, regardless of the size or dimensions of the images being shown

$(function(){
    var slides = $('.slideshow>li');
    var slideCount = 0;
    var totalSildes = slides.length;
    var slideCache = [];

    (function preloader() {
        if (slideCount < totalSildes) {
            //load images
            slideCache[slideCount] = new Image();
            slideCache[slideCount].src = slides.eq(slideCount).find('img').attr('src');
            slideCache[slideCount].onload = function() {
                slideCount++;
                preloader();
            }
        } else {
            //run slides
            slideCount = 0;
            Slideshow();
        }
    }() );

    function Slideshow() {
        //slideshow IIFE
        slides.eq(slideCount).fadeIn(1000).delay(2500).fadeOut(1000, function(){
            slideCount < totalSildes -1 ? slideCount ++ : slideCount = 0;
            Slideshow();

        });
    }

});