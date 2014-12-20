var storage = {
    salvarRegistro: function(){
        window.localStorage.setItem('user',$('#regNom').val());
        window.localStorage.setItem('id',device.uuid);
    },
    estaRegistrado: function(){
        if(window.localStorage.getItem('id') != undefined)
            return true;
        else
            return false;
    }
};