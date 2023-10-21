
$(function(){

    var miniImg = $('.mini-img-wrapper');
    var navGaleria = $('.nav-galeria-wrapper');

    var imgShow = 3;
    var maxIndex = Math.ceil(miniImg.length/3) - 1;
    var curIndex = 0;

    initSlider();
    navigationSlider();
    clickSlider();

    function initSlider(){
        
        var amt = miniImg.length * 33.3;
        
        navGaleria.css("width", amt+"%");
        miniImg.css("width", 33.3*(100/amt)+"%");
    }

    function navigationSlider(){
        $('.arrow-right-nav').click(function(){
            if(curIndex < maxIndex){
                curIndex++;

                var elOff = miniImg.eq(curIndex*3).offset().left - navGaleria.offset().left;

                $(".nav-galeria").animate({
                    "scrollLeft":elOff
                });
            }else{
                console.log("chegamos ate o final");
            }
        });

        $('.arrow-left-nav').click(function(){
            if(curIndex > 0){
                curIndex--;

                var elOff = miniImg.eq(curIndex*3).offset().left - navGaleria.offset().left;
                
                $(".nav-galeria").animate({
                    "scrollLeft":elOff
                });
            }else{
                console.log("estamos no inicio");
            }
        });
    }

    function clickSlider(){

        miniImg.click(function(){
            
            var img = $(this).children().css('background-image');
            
            miniImg.css('background-color','transparent');
            $(this).css('background-color','rgb(200, 200, 200)');
            
            $('.foto-destaque').css('background-image', img);
        });

        miniImg.eq(0).click();

    }

});
