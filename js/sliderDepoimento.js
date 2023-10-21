$(function(){

    var amt = $('.depoimento-single q').length;
    var amtP = $('.nome-depoimento p').length;
    var curIndex = 0;

    iniciarDepoimento();
    navegarDepoimento();

    function iniciarDepoimento(){
        $('.depoimento-single q').hide();
        $('.depoimento-single q').eq(0).show();

        $('.nome-depoimento p').hide();
        $('.nome-depoimento p').eq(0).show();
    }

    function navegarDepoimento(){

        $("[data-arrows=right]").click(function(){
            
            curIndex++;

            if(curIndex >= amt)
                curIndex = 0;

            $('.depoimento-single q').hide();
            $('.depoimento-single q').eq(curIndex).show();

            $('.nome-depoimento p').hide();
            $('.nome-depoimento p').eq(curIndex).show();
        });

        $("[data-arrows=left]").click(function(){
            
            curIndex--;

            if(curIndex < 0)
                curIndex = amt-1;

            $('.depoimento-single q').hide();
            $('.depoimento-single q').eq(curIndex).show();

            $('.nome-depoimento p').hide();
            $('.nome-depoimento p').eq(curIndex).show();

        });

        
    }

})