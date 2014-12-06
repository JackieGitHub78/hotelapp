var capture = {

    imgTomada: function(imgs)
    {
        var image='';
        for(i=0; i < imgs.length; i++)
        {
           image = imgs[i].fullPath; 
            $('#regFoto')Attr('rel', image);
        }
    },
    
    imgError: function(err)
        {
            navigator.notification.alert('Error'+err.code,null,'lo sentimos','Aceptar')
        },
    
    imgCapture: function()
    {
        navigator.device.capture.captureImage(capture.imgCapture, capture.imgError, {limit:2});
    }
}