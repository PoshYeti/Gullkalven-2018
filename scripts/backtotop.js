window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { 
        document.getElementById("top-btn").style.display = "block";
         
        
    } else {
        document.getElementById("top-btn").style.display = "none";
        
    }
    
    
};

var timeOut;
function topFunction() {
  if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
    window.scrollBy(0,-50);
    timeOut=setTimeout('topFunction()',1);
  }
  else clearTimeout(timeOut);
}



$(document).ready(function(){
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navigation').outerHeight();
var navbarHeight = $('.deltagelse').outerHeight();   
    
$(window).scroll(function(event){
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 30);
function hasScrolled() {
    var st = $(this).scrollTop();
  
    console.log('st', st)
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
      
        // We want to hide both black bar on scroll down every time
        
        
        $('.deltagelse').removeClass('nav-top').addClass('nav-up');
         $('.navigation').removeClass('nav-top').addClass('nav-up');
       
        
      
        
    } else {
        // Scroll Up
        if(st < 40) {
          // If we are 40px from the top of the screen then show the bar.
            
        $('.deltagelse').removeClass('nav-up').removeClass('nav-top');
          $('.navigation').removeClass('nav-up').removeClass('nav-top');
                
            
        } else {
          // If we are more than 40px from the top then we want to show only bar
          
          $('.deltagelse').removeClass('nav-up').removeClass('nav-top');
            $('.navigation').removeClass('nav-up').addClass('nav-top');
            
        }
    }
    lastScrollTop = st;
}
});//]]> 


window.sr = ScrollReveal({ reset: true });

// Custom Settings
sr.reveal('.foo-1', { duration: 200 });

sr.reveal('.foo-2', { 
  origin: 'right', 
  duration: 2000 
});

sr.reveal('.foo-3', { 
  rotate: { x: 100, y: 100, z: 0 },
  duration: 1000
});

sr.reveal('.foo-4', { 
  viewFactor: 0.5
});

sr.reveal('.foo-5', { 
  duration: 200 
});


