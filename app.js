var main = function () {
    $('.aboutbutton').click(function () {
        $('#About').siblings().hide(1000);
        
        if ($('.maincontent').hasClass('moved')) {
            $('#About').siblings().promise().done(function () {
                $('.picturecontainer').animate({
                    width: "hide"
                }, 500);
            
                $('.maincontent').removeClass('moved');
                $('.maincontent').animate({
                    left: "0%",
                    width: "100%",
                    opacity: "1"
                }, 800);    
            });
        }
        
        $('#About').siblings().promise().done(function () {
            $('.maincontent').promise().done(function () {
                $('#About').fadeIn(1000);
            });
        });
    });
    
    $('.dropdown-content').click(function (e) {
        var name = '#' + e.target.textContent;
        $(name).siblings().find('h2').hide();
        $(name).siblings().find('p').hide();
        
        
        if (!$('.maincontent').hasClass('moved')) { // Initial State
            
            $('#Project').siblings().hide();
            $('#Project').show();
            
            $('.maincontent').animate({
                left: "+53%",
                width: "47%"
            }, 800, "swing", function () {
                $('.picturecontainer').animate({
                    height: 'toggle'
                }, 500);
                
                $(name + ' > h2').toggle('slow');
                $(name + ' > h2').promise().done(function () {
                    $(name + ' > p').fadeIn(1000);
                });
            });
            
            $('.maincontent').addClass("moved");
        } else { //Moved State
            if(!$(name + ' > h2').is(":visible")){
                $(name + ' > h2').toggle('slow');
                $(name + ' > h2').promise().done(function () {
                    $(name + ' > p').fadeIn(1000);
                });
            }
            
        }
    });
};

$(document).ready(main);