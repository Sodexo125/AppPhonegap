$('#imageCamara').click(function(){
   //Esta funcion requiere de tres argumentos.
    var opciones = {
        quality : 50,
        destinationType : Camera.DestinationType.DATA_URL,
        sourceType : Camera.PictureSourceType.CAMERA
    };

    //declaramos el objeto camara
    navigator.camera.getPicture(exitoFoto, errorFoto, opciones);
});


function exitoFoto(imageData){
    var fotoImagen = document.getElementById('foto');
    fotoImagen.src = "data:image/jpeg;base64," + imageData;
}

function errorFoto(mensaje){
alert('Error en foto' + mensaje);
}

