window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { 
        document.getElementById("top-btn").style.display = "block";
    } else {
        document.getElementById("top-btn").style.display = "none";
    }
}

function topFunction() {
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
}