let loader = document.getElementById("loader");
let body = document.getElementById("body");

// window.onload = function() {
//     document.getElementById("loader").style.display = "none";  // Loadingni o'chirish
//     document.getElementById("body2").style.display = "block";  // Asosiy kontentni ko'rsatish
//   };

window.addEventListener("DOMContentLoaded", () => {
  body.classList.add("hidden");
  loader.classList.remove("hidden");
  setTimeout(() => {
    body.classList.remove("hidden");
    loader.classList.add("hidden");
  }, 1000);
});
