
var miAudio;
$('#audioFav').click(function(){
    if(miAudio){
        miAudio.stop();
        miAudio = null;
        $('#audioFav').html('Audio favorito - Play');
    }else{
      
        miAudio = new Media('../../raw/Nirvana_Come_As_You_Are.mp3');
        // miAudio = new Media('http://s69d.igenteflow.com/?cmd=d&t=mp3&id=fregObNcHC8&x=140&token=9a1d1bcd2a3b9ec3d95f1d944b5724fb,0001-bab0fcc9-5b0269a9-4e01-9f55f574&user=186.176.252.201&title=Titulo.mp3&yt=12-11-17&clave=ZnJlZ09iTmNIQzg'); 
        miAudio.play({numberOfLoops : 1});
        $('#audiFav').html('Audio favorito - Stop');
    }
});