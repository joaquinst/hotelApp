/* var fileTransferr = {
    subido: function(r){
        if(r.response != 0){
            // Satisfactorio
            var acciones = function(btn){
                if(btn == 1) 
                    navigator.notification.beep(1);
                if(btn == 2) 
                    navigator.vibrate(500);
            }
            navigator.notification.confirm('Se ha registrado correctamente',acciones,'¡Felicidades!',['Sonido','Vibrar','Cancelar']);
        }else{
            // Error en el servidor
            navigator.notification.alert('Error en el servidor: ', null, 'Lo sentimos!','Aceptar');
        }
    },
    error: function(err){
        navigator.notification.alert('Error: ' + err.code, null, 'Lo sentimos!','Aceptar');
    },
    opciones: new FileUploadOptions(),
    ft: new fileTransfer(),
    subirFoto: function(){
        fileTransfer.opciones.fileKey = 'foto';
        fileTransfer.opciones.fileName = 'joaquin';
        fileTransfer.opciones.mimeType = 'image/jpeg';
        
        fileTransfer.ft.upload(
            $('#regFoto').attr('rel'), // URL del archivo que queremos subir
            'http://carlos.igitsoft.com/apps/test.php', // URL del servidor
            fileTransfer.subido, // Funcion en caso de que sea satisfactorio
            fileTransfer.error, // Funcion en caso de error
            fileTransfer.opciones
        );
    }
    
};