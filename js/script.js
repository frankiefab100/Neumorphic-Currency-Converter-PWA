const amount = document.querySelector("#amount");
const rateValue = document.querySelector(".rate-value");
const convertFrom = document.querySelector("#from");
const convertTo = document.querySelector("#to");
const swapBtn = document.querySelector("#swap-btn");
const convertBtn = document.querySelector("#convert-btn");
const selectElem = document.querySelectorAll("select");

// PWA service worker
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("serviceworker.js")
//     .then((registration) => {
//       registration;
//     })
//     .catch((err) => {
//       alert(err);
//     });
// }

// From tutorial
let inputValue = amount.value;

// Fetch Currencies and Country Code
fetch("https://api.frankfurter.app/currencies")
  .then((response) => response.json())
  .then((data) => displayExchangeRate(data));

function displayExchangeRate(data) {
  const selection = Object.entries(data);

  for (let i = 0; i < selection.length; i++) {
    selectElem[0].innerHTML += `<option value="${selection[i][0]}">${selection[i][0]}</option>`;
    selectElem[1].innerHTML += `<option value="${selection[i][0]}">${selection[i][0]}</option>`;
  }
}

convertBtn.addEventListener("click", () => {
  let firstCurrency = selectElem[0].value;
  let secondCurrency = selectElem[1].value;

  if (firstCurrency !== secondCurrency) {
    convertCurrency(firstCurrency, secondCurrency, inputValue);
  } else {
    alert("Please select different currency pairs!");
  }
});

function convertCurrency(firstCurrency, secondCurrency, inputValue) {
  let api = `https://api.frankfurter.app/latest?amount=${inputValue}&from=${firstCurrency}&to=${secondCurrency}`;

  fetch(api)
    .then((result) => result.json())
    .then((result) => {
      console.log(Object.values(result.rates)[0]);
      // rateValue.value = Object.values(result.rates)[0];
      rateValue.innerHTML = Object.values(result.rates)[0];
      console.log(result.rates.secondCurrency);
    });
}

/////////////////////////////////////////////
////////////// 2nd Approach
amount.addEventListener("input", (e) => {
  //   let inputValue = e.target.value;
  //   let inputValue = amount.value;
  displayExchangeRate();
});
async function displayExchangeRate(rate) {
  let inputValue = amount.value;
  let convertFromOption = document.querySelector("#from option");
  let convertToOption = document.querySelector("#to option");

  const key = "d01d9846d88676a9ea701da57efe976b";
  let api = `http://api.currencylayer.com/convert?access_key=${key}&from=${convertFromOption}&to=${convertToOption}&amount=${inputValue}&format=1`;

  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then(displayExchangeRate)
    .catch((err) => {
      alert(err);
    });
}

function displayExchangeRate(response) {
  let exchangeRate = conversion_rates[convertTo.value];
  let overallValue = (inputValue * exchangeRate).toFixed(2);
  rateValue.innerHTML = `${overallValue} ${convertTo.value}`;
}

async function display() {
  //   const key = "d01d9846d88676a9ea701da57efe976b";
  //   let api = `http://api.currencylayer.com/convert?access_key=${key}&from=${convertFromOption}&to=${convertToOption}&amount=${inputValue}&format=1`;

  fetch(`https://api.frankfurter.app/latest?amount=2000&from=NGN&to=USD`)
    .then((resp) => resp.json())
    .then((data) => {
      alert(`$${data.rates.USD}`);
    });
}
