var main = function () {
    $('.buttonpush').click(function () {
        $('#Project').siblings().hide();
        
        $('.containrect').animate({
            width: "show"
        }, 500);
        
        $('.maincontent').animate({
            left: "+53%",
            width: "47%"
        }, 800, "swing", function () {
            $('#Project').toggle('slow');
        });
        $('.maincontent').addClass("moved");
        
    });
    
    $('.aboutbutton').click(function () {
        $('#About').toggle('slow');
        
        if ($('.maincontent').hasClass('moved')) {
            $('.containrect').animate({
                width: "hide"
            }, 500);
            
            $(".maincontent").removeClass("moved");
            $(".maincontent").animate({
                left: "0%",
                width: "100%",
                opacity: "1"
            }, 800);
            
        }
        $('.maincontent').promise().done(function () {
            $('#About').siblings().hide();
        });
    });
    
    

};

$(document).ready(main);