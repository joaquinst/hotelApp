var capture = {
    imgTomada: function(imgs){
        var image = '';
        for(i = 0; i < imgs.length;i++)
            image = imgs[i].fullPath;
        $('#regFoto').attr('rel',image);
    },
    imgError: function(err){
        navigator.notification.alert('Error: '+err.code,null,'lo sentimos','aceptar');        
    },
    imgCapture: function(){
        navigator.device.capture.captureImage(capture.imgTomada, capture.imgError, {limit:2});
    }
}