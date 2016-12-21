var main = function () {
    $('.buttonpush').click(function () {
        $('#Project').siblings().hide();
        
        $('.maincontent').animate({
            left: "+53%",
            width: "47%"
        }, 800, "swing", function () {
            $('.containrect').animate({
                height:'toggle'
            }, 500);
            $('#Project').toggle('slow');
        });
        $('.maincontent').addClass("moved");
        
    });
    
    $('.aboutbutton').click(function () {
        $('#About').siblings().hide();
        
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
            $('#About').toggle('slow');
        });
    });
    
    $('.dropdown-content').click(function (e) {
        var name = e.target.textContent;
        $('#' + name).siblings().hide();
        
        if (!$('.maincontent').hasClass('moved')) {
            
        
            $('.maincontent').animate({
                left: "+53%",
                width: "47%"
            }, 800, "swing", function () {
                $('.containrect').animate({
                    height: 'toggle'
                }, 500);
                $('#' + name).toggle('slow');
            });
            
            $('.maincontent').addClass("moved");
        } else {
            $('#' + name).toggle('slow');
        }
    });
};

$(document).ready(main);