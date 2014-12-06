var fn = {
ready: function()
    {
        document.addEventListener("deviceready",fn.init,false);
    },
    
init: function()
    {
       $('#regSend').click(fn.enviarRegistro);
        var x = false;
        if(!x)
        {
            window.location.href ='#reg';
        }
    },
    
    enviarRegistro: function()
    {
        var nom = $('#regNom').val();
        var tel = $('#regTel').val();
        var mail = $('#regMail').val();
        
        if(nom != '' && tel != '' && mail != '')
            {
                navigator.notification.alert('correcto', null,'felicidades', 'aceptar');
            }
                else
                    {
                        alert('todos los campos son requeridos');
                    }
    }
    
}; 

$(fn.ready);