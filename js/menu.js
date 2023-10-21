
$(function(){

    var menu = $(".mobile");

    menu.click(function(){
        $(this).find("ul").slideToggle(); 
    });

    $('a[data-goto=contato]').click(function(e){

        e.preventDefault();

        location.href = 'index.html?contato';
    });

    checkUrl();

    function checkUrl(){
        var url = location.href.split('/');
        var curPage = url[url.length-1].split('?');

        if(curPage[1] != undefined && curPage[1] == 'contato'){

            var elOff = $("#contato").offset().top;

            $('header nav a').css('color', 'black');
            $('footer nav a').css('color', 'white');
            $('a[data-goto=contato]').css('color', '#EB2D2D');

            $("html,body").animate({
                "scrollTop":elOff
            });
        }
    }

})