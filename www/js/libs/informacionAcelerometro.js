function obtieneInformacionAcelerometro() {
     console.log('mae que es este vara que no funciona'); // ReferenceError num1 is not defined.
    var opciones = {frequency : 1000}; //tiempo de frecuencia de medidas
    IDLecturaAccel = navigator.accelerometer.watchAcceleration(intervaloExito, intervaloError, opciones); //Objeto,recive 3 argumentos callback,callback-error,opciones-definidas 
}

function intervaloExito(acceleration) {
    $('#infoAccel').html('Aceleración en X :' + acceleration.x + '<br/>' +
        'Aceleración en Y :' + acceleration.y + '<br/>' +
        'Aceleración en Z :' + acceleration.z + '<br/>' +
        'Marca de tiempo :' + acceleration.timestamp + '<br/>');
}

function intervaloError() {
    alert('Error a leer acelerómetro');
}