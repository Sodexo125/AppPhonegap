
document.addEventListener('deviceready', onDeviceReady, false);

//
function onDeviceReady(){
	console.log('Escribiendo a log. evento deviceReady!!! \n');
	console.log('LA PUEBA DE QUE EXISTE ->'+device.cordova);
	$('#botonLogin').button('enable');
	

}

