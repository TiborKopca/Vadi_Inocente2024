// console.log("vadim")

const subbtn = document.getElementById("subscribe");
const form = document.getElementById("form");
const xbtn = document.getElementById("x-button");
const mainContainer = document.getElementById("container");
const videoContainer = document.getElementById("videoContainer");

function getNewsletterIntoView() {
//   form.scrollIntoView({ behavior: "smooth", block: "end" });
  form.classList.add("spread");
  videoContainer.classList.add("opaque");
}
function getNewsletterOutOfView() {
    
  form.classList.remove("spread");
  videoContainer.classList.remove("opaque");
}

setTimeout(() => {
  subbtn.style.display = "block";
}, 2000);

setTimeout(() => {
  subbtn.classList.add("btn-active");
}, 2000);

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
