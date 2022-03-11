const amount = document.querySelector("#amount");
const rateValue = document.querySelector(".rate-value");
const selectFrom = document.querySelector("#from");
const selectTo = document.querySelector("#to");
const swapBtn = document.querySelector("#swap-btn");
const convertBtn = document.querySelector("#convert-btn");
const selectElems = document.querySelectorAll("select");

for (let i = 0; i < selectElems.length; i++) {
  for (currencycode in currency_symbols) {
    let selected;

    let option = `<option value="${currencycode}" ${selected}>${currencycode}</option>`;
    selectElems[i].insertAdjacentHTML("beforeend", option);
  }
}

window.addEventListener("load", () => {
  amount.value = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayExchangeRate();
});

function displayExchangeRate() {
  let inputValue = amount.value;

  const key = "e80c80e2337cc48ba936e067";
  let api = `https://v6.exchangerate-api.com/v6/${key}/latest/${selectFrom.value}`;

  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let exchangeRate = data.conversion_rates[selectTo.value];
      let overallValue = (inputValue * exchangeRate).toFixed(2);
      rateValue.innerHTML = `${overallValue} ${selectTo.value}`;
    })
    .catch((err) => {
      alert(err);
    });
}

swapBtn.addEventListener("click", () => {
  [selectFrom.value, selectTo.value] = [selectTo.value, selectFrom.value];

  displayExchangeRate();
});
