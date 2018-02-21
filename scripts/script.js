$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            $('#menu-center ul li a').removeClass("span");
            currLink.addClass("active");
            currLink.addClass("span");
        }
        else{
            currLink.removeClass("active");
            currLink.removeClass("span");
        }
    });
};

var img = new Image,
    canvas = document.getElementById('gif'),
    ctx = canvas.getContext('2d');

/// change to this color
ctx.fillStyle = '#00c';

/// load image, when ready render it with new color
img.onload = render;
img.src = 'test1.gif';

function render() {
    /// this composite mode clears the canvas as well
    ctx.globalCompositeOperation = 'copy';
    ctx.drawImage(img, 0, 0);

    /// this mode fills in whatever, in the image
    ctx.globalCompositeOperation = 'source-in';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}



