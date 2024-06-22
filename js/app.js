// console.log("vadim")

const subbtn = document.getElementById("subscribe");
const form = document.getElementById("form");
const xbtn = document.getElementById("x-button");
const mainContainer = document.getElementById("container");

function getNewsletterIntoView() {
//   form.scrollIntoView({ behavior: "smooth", block: "end" });
  form.classList.add("spread");
  mainContainer.classList.add("opaque");
}
function getNewsletterOutOfView() {
    
  form.classList.remove("spread");
  mainContainer.classList.remove("opaque");
}

setTimeout(() => {
  subbtn.style.display = "block";
}, 2000);

setTimeout(() => {
  subbtn.classList.add("btn-active");
}, 2000);

subbtn.addEventListener("click", (e) => {
    e.preventDefault;
  getNewsletterIntoView();
});
xbtn.addEventListener("click", (e) => {
    e.preventDefault;
  getNewsletterOutOfView();
});
