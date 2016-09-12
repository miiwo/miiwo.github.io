var main = function () {
    $('.buttonpush').click(function () {
        $('.containrect').animate({
            width: "toggle"
        }, 500);
        
        
        if ($(".maincontent").hasClass("moved")) {
            $(".maincontent").removeClass("moved");
            $(".maincontent").animate({
                left: "-=300px",
                opacity: "1"
            }, 800);
        } else {
            $('.maincontent').animate({
                left: "+=300px",
                opacity: "0.7"
            }, 800, "swing");
            $(".maincontent").addClass("moved");
        }
    });
    
    

};

$(document).ready(main);