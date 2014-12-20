var fileTransfer = {
    subido: function(r){
        if(r.response != 0){
            //Satisfactorio
            var acciones = function(btn){
                if(btn == 1)
                    navigator.notification.beep(1);
                if(btn == 2)
                    navigator.vibrate(1000);
                window.location.href="#home";
                storage.salvarRegistro();
            }
            navigator.notification.confirm('Se ha registrado correctamente',acciones,'¡Felicidades!',['Sonido','Vibrar','Cancelar']);
        }else{
            //Error en el servidor
            navigator.notification.alert('Error en el servidor',null,'¡Lo Sentimos!','Aceptar');
        }
    },
    error: function(err){
        navigator.notification.alert('Error: ' + err.code, null, '¡Lo sentimos!','Aceptar');
    },
    subirFoto: function(){
        var opciones = new FileUploadOptions();
        var ft = new FileTransfer();
        opciones.fileKey = 'foto';
        opciones.fileName = 'carlos';
        opciones.mimeType = 'image/jpeg';
        
        ft.upload(
            $('#regFoto').attr('rel'),//URL del Archivo que queremos subir
            'http://carlos.igitsoft.com/apps/test.php',//URL del servidor
            fileTransfer.subido,//Función en caso de que sea satisfactorio
            fileTransfer.error,//Función en caso de error
            opciones
        );
    }
};