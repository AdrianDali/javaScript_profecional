import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "./plugins/AutoPlay.js"

/**element = document.querySelector(selectores);
 * Devuelve el primer elemento del documento que coincida con
 *  el grupo especificado de selectores 
 * SELECTORES: son usados para apuntar al elemento HTML que quieres estilizar
 * */
const video = document.querySelector('video')

const player = new MediaPlayer({el: video,plugins: [new AutoPlay()]});

const button = document.querySelector('#playButton')
button.onclick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};