function obtieneInformacionRed(){

    //creamos un arreglo
    var tiposConexion={};
    tiposConexion[Connection.UNKNOWN]='Desconocido';
    tiposConexion[Connection.ETHERNET]='Ethernet';
    tiposConexion[Connection.WIFI]='Wifi';
    tiposConexion[Connection.CELL_2G]='Celular 2G';
    tiposConexion[Connection.CELL_3G]='Celular 3G';
    tiposConexion[Connection.CELL_4G]='Celular 4G';
    tiposConexion[Connection.CELL]='Celular Generica';
    tiposConexion[Connection.NONE]='Sin Conexión';

    var tipoConexionRed = navigator.connection.type;
    $('#infoRed').html('Tipo de Conexion :'+ tipoConexionRed);

    $('#infoRed').html('Tipo de conexión :'+ tiposConexion[ tipoConexionRed]);

}