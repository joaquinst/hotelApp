var capture = {
    imgTomada: function(imgs){
        var image = '';
        for(i = 0; i < imgs.length;i++)
            image = imgs[i].fullPath;
        $('#regFoto').attr('rel',image);
        $('#viewPhoto').html('<img scr="' + image + '" style="width:100%;">');
    },
    imgError: function(err){
        navigator.notification.alert('Error: '+err.code,null,'lo sentimos','aceptar');        
    },
    imgCapture: function(){
        navigator.device.capture.captureImage(capture.imgTomada, capture.imgError, {limit:2});
    }
}