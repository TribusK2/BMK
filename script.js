$(document).ready(function(){
    var wrapp = $('.wrapper');
    var line = $('.gap');
    $(window).scroll(function(){
        var position = line.offset()['top']-8;
        var limit = 3500;
        if(position > limit){
            wrapHight = limit;
        }else{
            wrapHight = position;
        }
        wrapp.css('height',wrapHight);
        // wrapp.animate({height: wrapHight}, "0");
        
        // console.log(obj.offset());
        console.log(wrapHight);
    });
});