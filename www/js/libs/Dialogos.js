//Dialogos validamos los camopos para activar el btn
$('#formularioLogin').submit(function(){
	var telefono = $('#telefonoLogin').val();
	var pass = $('#passLogin').val();

	if(telefono && pass){
		//creamos una alert personalizado.
		navigator.notification.alert(
			'¿Intentando acceder a la App?',
			alertDismissed,
			'Datos completos',
			'Ok');
	}else{
		alert('Llene los campos');
	}
	return false;//para no retornar a la misma vista
});

//alertas no generico.
function alertDismissed(){
	//se invoca la alerta mobile
	$.mobile.loading('show',{
		//pasamos los argumentos.arreglo
		text : 'Iniciando sessión',
		textVisible : true,
		theme : 'b',
		html : ''
	});
	//Tiempo que dura el alert
	setTimeout(ocultaDialogo,3000);
}

function ocultaDialogo(){
	$.mobile.loading('hide');//ocultamos el loanding
	
	//referenciamos a una parte de la vista
	$(':mobile-pagecontainer').pagecontainer('change','#menuInicial');//parametro o ruta a la que se dirige.
}