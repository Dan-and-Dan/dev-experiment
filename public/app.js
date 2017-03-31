//angular.module("devShop", [])
//.controller("mainController", ["$scope", function($scope){
//}]);
$(document).ready(function () {
    $('body').scrollspy({
        target: '#navbar-section'
    });

    $(window).scroll(function () {
        console.log("i'm scrolling!");
        //make navbar thin here
    });

    $.fn.scrollEnd = function (callback, timeout) {
        $(this).scroll(function () {
            var $this = $(this);
            if ($this.data('scrollTimeout')) {
                clearTimeout($this.data('scrollTimeout'));
            }
            $this.data('scrollTimeout', setTimeout(callback, timeout));
        });
    };

    // how to call it (with a 1000ms timeout):
    $(window).scrollEnd(function () {
        //add class back to here
    }, 1000);

})
