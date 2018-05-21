$('#consultarContactos').click(function(){
$.mobile.loading('show', {
        text : 'Cargando...',
        textVisible : true,
        theme : 'b',
        html : ''
    });

    var camposABuscar = ['displayName'];
    navigator.contacts.find(camposABuscar,contactosExisto, contactosError);
});

function contactosExisto(contactos){
    for(var i = 0; i < contactos.length; i++){
        if(contactos[i].displayName){
            $('#listaContactos').append('<li>'+contactos[i].displayName+'</li>');
        }
    }
    $('#listaContactos').listview('refresh');
    $.mobile.loading('hide');
}

function contactosError(mensaje){
    alert('Error al cargar los contactos: '+mensaje);
}