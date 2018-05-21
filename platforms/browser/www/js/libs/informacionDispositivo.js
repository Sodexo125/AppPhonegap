//siempre escucha los cambios de paginas, entra dos argumentos
$(document).on('pagecontainershow', function(event, ui){
    var paginaActual = ui.toPage.prop('id');
    if(paginaActual == 'informacionDispositivo'){
  
        obtieneInformacionDispositivo();
        obtenerInformacionBateria();
        obtieneInformacionRed();
        obtieneInformacionAcelerometro();
    }
});

function obtieneInformacionDispositivo(){
    $('#infoDispositivo').html('Modelo : '+ device.model +'<br />'+
    'Version Cordova : '+ device.cordova +'<br />'+
    'Plataforma : '+ device.platform +'<br />'+
    'UUID : '+ device.uuid +'<br />'+
    'Version OS : '+ device.version +'<br />');
}

