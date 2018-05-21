$('#imagenBibliotecaFoto').click(function(){
    //Esta funcion requiere de tres argumentos.
     var opciones = {
         quality : 50,
         destinationType : Camera.DestinationType.DATA_URL,
         sourceType: Camera.PictureSourceType.PHOTOLIBRARY
     };
 
     //declaramos el objeto camara
     navigator.camera.getPicture(exitoFoto,errorFoto,opciones);
    
     //los metodo no hace falta definirlos en este archivo, esta definidos en camera.js y puede ser accesados

 });
 
 
