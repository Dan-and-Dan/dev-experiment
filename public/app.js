$(document).ready(function () {
    $('body').scrollspy({
        target: '#navbar-section'
    });

    $(window).scroll(function () {
        console.log("i'm scrolling!");
        //make navbar thin here
        $("nav").addClass("navbarOnScroll");
    });

    $.fn.scrollEnd = function (callback, timeout) {
        $(this).scroll(function () {
            var $this = $(this);
            if ($this.data('scrollTimeout')) {
                clearTimeout($this.data('scrollTimeout'));
                $("nav").removeClass("navbarOnScroll");
            }
            $this.data('scrollTimeout', setTimeout(callback, timeout));
        });
    };

    // how to call it (with a 1000ms timeout):
    $(window).scrollEnd(function () {
        //add class back to here
    }, 1000);
    
    $('#sendEmailButton').on('click', function() {
        var mailObj = {}; 
        mailObj.name = $('#name').val(); 
        mailObj.number = $('#number').val(); 
        mailObj.message = $('#message').val(); 
        
        console.log(mailObj);
        
        window.open("mailto:"+"danielbolognino@midtowndev.io"+'?cc='+"danielpak@midtowndev.io"+'&subject='+mailObj.name + " " + mailObj.number +'&body='+mailObj.message)
    })

})
