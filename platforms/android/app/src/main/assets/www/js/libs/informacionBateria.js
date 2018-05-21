function obtenerInformacionBateria(){
    window.addEventListener('batterystatus', onBatteryStatusChange, false);
}

//metodos internos
function onBatteryStatusChange(info){
    $('#infoBateria').html("Cargando : "+info.isPlugged +'<br />'+
        "Nivel de carga : "+info.level+"%");
}