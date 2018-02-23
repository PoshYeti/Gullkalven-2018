window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { 
        document.getElementById("top-btn").style.display = "block";
         
        
    } else {
        document.getElementById("top-btn").style.display = "none";
        
    }
    
    
};


function topFunction() {
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
};

$("#show").next().height($("#show").height())
$(window).scroll(function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 200) {
        $('#background-top-bar').css('opacity',1);
    }
    else {
        $('#background-top-bar').css('opacity',0+scrollTop/100);
    }
}).scroll();


