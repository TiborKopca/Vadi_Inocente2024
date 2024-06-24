// console.log("vadim")

const subbtn = document.getElementById("subscribe");
const form = document.getElementById("form");
const xbtn = document.getElementById("x-button");
const mainContainer = document.getElementById("container");
const videoContainer = document.getElementById("videoContainer");

/* 
------------------------------------------------------------
 FUNCTIONS
------------------------------------------------------------
*/
function getNewsletterIntoView() {
//   form.scrollIntoView({ behavior: "smooth", block: "end" });
  form.classList.add("spread");
  videoContainer.classList.add("opaque");
}
function getNewsletterOutOfView() {
    
  form.classList.remove("spread");
  videoContainer.classList.remove("opaque");
}

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
subbtn.addEventListener("click", (e) => {
    e.preventDefault;
    if(subbtn.classList.contains("btn-active")) {
      getNewsletterIntoView();
    }
});

xbtn.addEventListener("click", (e) => {
    e.preventDefault;
  getNewsletterOutOfView();
});

//SCREEN ORIENTATION LOCK
const DEFAULT_SCREEN_WIDTH = 500;
window.addEventListener("orientationchange", () => {
  // console.log('orientation')
  document.documentElement.requestFullscreen().then(
    console.log('fullscreen requested'));

  console.log(screen.orientation);
  console.log(`screen width: ${screen.width}`);

  if(screen.width < DEFAULT_SCREEN_WIDTH) {
    console.log('success')
    screen.orientation.lock('portrait');
    // screen.orientation.type = "portrait-primary";
    // screen.orientation.lock("portrait-primary");
  } else {
    screen.orientation.unlock();
  }
});

// document.addEventListener("DOMContentLoaded", function() {
//   // Function to lock the screen orientation to landscape
//   function lockOrientation() {
//       if (screen.orientation) {
//           screen.orientation.lock('landscape')
//               .then(function() {
//                   console.log('Screen orientation locked to landscape');
//               })
//               .catch(function(error) {
//                   console.error('Error locking screen orientation:', error);
//               });
//       } else if (screen.lockOrientation) { // For older browsers
//           screen.lockOrientation('landscape');
//       } else if (screen.mozLockOrientation) { // For Firefox
//           screen.mozLockOrientation('landscape');
//       } else if (screen.msLockOrientation) { // For IE/Edge
//           screen.msLockOrientation('landscape');
//       } else {
//           console.error('Screen Orientation API not supported');
//       }
//   }

//   // Event listener for orientation changes
//   window.addEventListener('orientationchange', function() {
//       if (window.screen.orientation === 90 || window.screen.orientation === -90) {
//           // If the device is in landscape mode
//           lockOrientation();
//       }
//   });

//   // Initial check in case the device starts in landscape mode
//   if (window.screen.orientation === 90 || window.screen.orientation === -90) {
//       lockOrientation();
//   }
// });




// document.addEventListener("DOMContentLoaded", function() {
//   // Function to lock the screen orientation to landscape
//   function lockOrientation() {
//       if (screen.orientation && screen.orientation.lock) {
//           screen.orientation.lock('portrait')
//               .then(function() {
//                   console.log('Screen orientation locked to landscape');
//               })
//               .catch(function(error) {
//                   console.error('Error locking screen orientation:', error);
//               });
//       } else {
//           console.error('Screen Orientation API not supported');
//       }
//   }

//   // Request fullscreen and then lock orientation
//   function requestFullscreenAndLock() {
//       if (document.documentElement.requestFullscreen) {
//           document.documentElement.requestFullscreen()
//               .then(lockOrientation)
//               .catch(function(error) {
//                   console.error('Error entering fullscreen:', error);
//               });
//       } else if (document.documentElement.mozRequestFullScreen) { // Firefox
//           document.documentElement.mozRequestFullScreen()
//               .then(lockOrientation)
//               .catch(function(error) {
//                   console.error('Error entering fullscreen:', error);
//               });
//       } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
//           document.documentElement.webkitRequestFullscreen()
//               .then(lockOrientation)
//               .catch(function(error) {
//                   console.error('Error entering fullscreen:', error);
//               });
//       } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
//           document.documentElement.msRequestFullscreen()
//               .then(lockOrientation)
//               .catch(function(error) {
//                   console.error('Error entering fullscreen:', error);
//               });
//       } else {
//           lockOrientation(); // Fallback if fullscreen is not supported
//       }
//   }

//   // Event listener for orientation changes
//   window.addEventListener('orientationchange', function() {
//       if (window.orientation === 90 || window.orientation === -90) {
//           // If the device is in landscape mode
//           requestFullscreenAndLock();
//       }
//   });

//   // Initial check in case the device starts in landscape mode
//   if (window.orientation === 90 || window.orientation === -90) {
//       requestFullscreenAndLock();
//   }
// });



