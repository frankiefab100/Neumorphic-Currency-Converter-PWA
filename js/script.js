const amount = document.querySelector("#amount");
const selectElem = document.querySelectorAll("select");
const rateValue = document.querySelector(".rate-value");
const swapBtn = document.querySelector("#swap-btn");
const convertBtn = document.querySelector("#convert-btn");

amount.addEventListener("input", (e) => {
  let inputValue = e.target.value;
});

// PWA service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("serviceworker.js")
    .then((registration) => {
      registration;
    })
    .catch((err) => {
      alert(err);
    });
}
