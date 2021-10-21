//creamos el objeto media
function MediaPlayer(config){
  this.media = config.el
  this.plugins = config.plugins || [];
  this._initPlugins();
}

/**Esta funcion inicializa el metodo run del video al iniciar */
MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
}
/**Esta es la funcion que inicia la ejecucion de nuestro video */
MediaPlayer.prototype.play = function(){
  this.media.play();
}

/**Esta es la funcion que le pone pausa a nuestro video */
MediaPlayer.prototype.pause = function(){
    this.media.pause();
}

/**Esta funcion Pone pausa o play al video */
MediaPlayer.prototype.togglePlay = function(){
    if(this.media.paused){
        this.play();
        
    }else{
        this.pause();
    }
}
/**Esta es la funcion que le pone mute a nuestro video */
MediaPlayer.prototype.mute = function(){
  this.media.muted = true
}
/**Esta es la funcion que le quita el muteo a nuestra funcion */
MediaPlayer.prototype.unmute = function(){
  this.media.muted = false;
}
//Exportamos la funcion 
export default MediaPlayer