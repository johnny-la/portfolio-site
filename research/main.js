/** Called when the page loads */
function init()
{
    window.addEventListener('scroll', function(e) {
        
        // The scroll distance at which the nav-header changes.
        var scrollDistanceY = 50;
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        
        var navBar = document.getElementById("nav-bar");
        var innerNavBar = document.getElementById("inner-nav-bar");
        var navText = document.getElementById("nav-text");
        var logoImg = document.getElementById("logo-img");
        
        // When the user scrolls below a threshold, add the "scroll" classname to the navbar
        if(distanceY > scrollDistanceY) 
        {
            navBar.className = "scroll";
            innerNavBar.className = "scroll";
            navText.className = "scroll";
            logoImg.className = "large";
        }
        else
        {
            navBar.className = "";
            innerNavBar.className = "";
            navText.className = "";
            logoImg.className = "";
            
        }
        
    });
}

window.onload = init();


/*********************************** JQuery *****************************************/
// Set default easing type
jQuery.easing.def = "easeOutQuad";

$(document).ready(function(){ 
    // The default y-amount the widgets slide up by
    var ySlide = 200;
    // The higher the value, the lower the bottom elements start at before sliding up
    var ySlideDecayMultiplier = 0.63;
    // Milliseconds between starting the fading for each successive widget
    var fadeDelay = 110;
    // The amount of time it takes to fade in a widget
    var fadeTime = 720;

    // Fade out all elements and translate them down
	$(".fade-up").fadeTo(0,0).each(function(index) {
        $(this).animate({
            top: '+=' + (ySlide*(index+1)*Math.pow(ySlideDecayMultiplier,index)) + 'px'
        },0);
    });
    
    // Fade up the elements
    $(".fade-up").each(function(index) {
        $(this).delay(fadeDelay*index).animate({
            top: '-=' + (ySlide*(index+1)*Math.pow(ySlideDecayMultiplier,index)) + 'px',
            opacity: '1.0'
        },fadeTime);
    });
});