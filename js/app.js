const subbtn = document.getElementById("subscribe");
// const form = document.getElementById("form");
const xbtn = document.getElementById("x-button");
const mainContainer = document.getElementById("container");
const videoContainer = document.getElementById("videoContainer");

/* 
------------------------------------------------------------
 FUNCTIONS
------------------------------------------------------------
*/
// function getNewsletterIntoView() {
//   form.classList.add("spread");
//   videoContainer.classList.add("opaque");
//   subbtn.classList.remove('btn-active');
  
// }
// function getNewsletterOutOfView() {
//   form.classList.remove("spread");
//   videoContainer.classList.remove("opaque");
//   subbtn.classList.add('btn-active');
// }

/* 
------------------------------------------------------------
 TIMEOUTS FOR BUTTON APPEARANCE
------------------------------------------------------------
*/
setTimeout(() => {
  subbtn.style.display = "block";
}, 10000);

setTimeout(() => {
  subbtn.classList.add("btn-active");
}, 10000);

/* 
------------------------------------------------------------
EVENT LISTENERS
------------------------------------------------------------
*/
// subbtn.addEventListener("click", (e) => {
//     e.preventDefault;
//     if(subbtn.classList.contains("btn-active")) {
//       getNewsletterIntoView();
//     }
// });

// xbtn.addEventListener("click", (e) => {
//     e.preventDefault;
//   getNewsletterOutOfView();
// });

const video = document.getElementById('videoContainer');
const muteButton = document.getElementById('playMuted');
const icon_sound = document.getElementById('playSound');

muteButton.addEventListener('click', function() {
    if (video.muted) {
        video.muted = false;
        icon_sound.src = './svg/icono_speaker.svg';
    } else {
        video.muted = true;
        icon_sound.src = './svg/icono_speaker_on.svg';
    }
});





