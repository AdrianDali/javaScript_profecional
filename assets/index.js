import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "./plugins/AutoPlay.js"

/**element = document.querySelector(selectores);
 * Devuelve el primer elemento del documento que coincida con
 *  el grupo especificado de selectores 
 * SELECTORES: son usados para apuntar al elemento HTML que quieres estilizar
 * */
const video = document.querySelector('video')
/**Este metodo lo que hace es enviar el elemento y el plugin para ser inicializados
 * en Mediaplayer y el video inicie automaticamente
 */
const player = new MediaPlayer({el: video,plugins: [/**new AutoPlay()*/]});

/** Enlace al botton de play*/
const button = document.querySelector('#playButton')
/**Cuando se presione el boton se ejecutara la funcion de togglePlay */
button.onclick = () => player.togglePlay();

/**Enlace al boton de mute */
const muteButton = document.querySelector('#muteButton');
/**Cuando se presione el boton se ejecutara una arrow funcion */
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};