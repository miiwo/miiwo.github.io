var main = function () {
    $('.buttonpush').click(function () {
        $('.containrect').animate({
            width: "show"
        }, 500);
            
        $('.maincontent').animate({
            left: "+53%",
            width: "47%"
        }, 800, "swing");
        $('.maincontent').addClass("moved");
        
        $('#base_nav').hide();
        $('#project_nav').show();
        
        $('.maincontent').promise().done(function () {
            $('#Project').siblings().hide();
            $('#Project').toggle('slow');
        });
        
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