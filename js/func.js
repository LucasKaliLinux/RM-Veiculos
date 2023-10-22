$(function(){

    var currentValue = 0;
    var isDrag = false;
    
    var precoMaximo = 70000;
    var preco_atual = 0;

    $(".pointer-barra").on("mousedown touchstart", function(){
        isDrag = true;
    });

    $(document).on("mouseup touchend", function(){
        isDrag = false;
        enableSelection();
    });

    $(".barra-preco").on("mousemove touchmove", function(e){
        if(isDrag){
            
            disableSelection();

            var elBase = $(this);
            var eventX = (e.type == "touchmove") ? e.originalEvent.touches[0].pageX : e.pageX;
            var mouseX = eventX - elBase.offset().left;
            if(mouseX < 0)
                mouseX = 0;
            if(mouseX > elBase.width())
                mouseX = elBase.width();

            $(".pointer-barra").css('left', (mouseX-13)+"px");

            currentValue = (mouseX / elBase.width()) * 100;

            $('.barra-preco-fill').css("width", currentValue+"%");
            
            //TODO: 
            preco_atual = (currentValue/100) * precoMaximo;
            preco_atual = numberFormat(preco_atual);
            $('.preco_pesquisa').html('R$'+preco_atual);
        }
    });

    function numberFormat(valor){

        valor = valor.toFixed(2);
        preco_arr = valor.split('.');

        var novo_preco = formatarTotal(preco_arr);
        
        return novo_preco;
    }

    function formatarTotal(arr){
        if(arr[0] < 1000){
            return arr[0]+','+arr[1];
        }else if(arr[0] < 10000){
            return arr[0][0]+'.'+arr[0].substr(1, arr[0].length)+','+arr[1];
        }else{
            return arr[0][0]+arr[0][1]+'.'+arr[0].substr(2, arr[0].length)+','+arr[1];
        }
    }

    function disableSelection(){
        $("body").css("-webkit-user-select", "none");
        $("body").css("-moz-user-select", "none");
        $("body").css("-ms-user-select", "none");
        $("body").css("-o-user-select", "none");
        $("body").css("user-select", "none");
    }

    function enableSelection(){
        $("body").css("-webkit-user-select", "auto");
        $("body").css("-moz-user-select", "auto");
        $("body").css("-ms-user-select", "auto");
        $("body").css("-o-user-select", "auto");
        $("body").css("user-select", "auto");
    }
})