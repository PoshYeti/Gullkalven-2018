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

$(document).ready( function() {
    $("#background-top-bar").hide(); //hide your div initially
    var topOfOthDiv = $("#show").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#background-top-bar").show(); //reached the desired point -- show div
        }
        else{
            $("#background-top-bar").hide(); 
        }
    });
});