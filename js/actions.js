var fn = {
    ready: function(){
        document.addEventListener('deviceready',fn.init,false);
    },
    init: function(){
        $('#regSend').click(fn.enviarRegistro);
        var x = false;
        if(!x){
            window.location.href = '#reg';
        }
    },
    enviarRegistro: function(){
        var nom = $('#regNom').val(); // val('asigna') // $('#regNom').val().val('asigna')
        var tel = $('#regTel').val();
        var mail = $('#regMail').val();
        if(nom !='' && tel !='' && mail !='' ){
            navigator.notification.alert('Correcto',null,'Felicidades','Aceptar');
        }else{
            alert('Todos los campos son requeridos');        
        }
    }
};

$(fn.ready);
