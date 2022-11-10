// main.js


    $(document).ready(function(){
        //마우스올렸을때
        $("article").mouseover(function(){
            console.log('test!!!!')
            $("article").removeClass("on");
            $(this).addClass("on");
            
            var img = $(this).find("img")
        });
        //마우스뗐을때
        $("article").mouseout(function(){
            $("article").removeClass("on");
        });
    });
