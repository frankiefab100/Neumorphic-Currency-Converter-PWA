let currencies = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

const amount = document.querySelector("#amount");
const rateValue = document.querySelector(".rate-value");
const selectFrom = document.querySelector("#from");
const selectTo = document.querySelector("#to");
const swapBtn = document.querySelector("#swap-btn");
const convertBtn = document.querySelector("#convert-btn");
const selectElems = document.querySelectorAll("select");

window.addEventListener("load", () => {
  amount.value = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayExchangeRate();
});

// Fetch Currencies from Exchange rate API
// fetch("https://www.exchangerate-api.com/docs/supported-currencies")
//   .then((response) => response.json())
//   .then((data) => displayOption(data));

// function displayOption(data) {
//   const selection = Object.entries(data);

//   for (let i = 0; i < selection.length; i++) {
//     selectElem[0].innerHTML += `<option value="${selection[i][0]}">${selection[i][0]}</option>`;
//     selectElem[1].innerHTML += `<option value="${selection[i][0]}">${selection[i][0]}</option>`;
//   }
// }

// Fetch Hardcoded Currencies from array
// selectElems.forEach((option) => {
//   const selection = Object.entries(data);

//   for (let i = 0; i < selection.length; i++) {
//     option[0].innerHTML += `<option value="${selection[i][0]}">${selection[i][0]}</option>`;
//     option[1].innerHTML += `<option value="${selection[i][0]}">${selection[i][0]}</option>`;
//   }
// });

for (let i = 0; i < selectElems.length; i++) {
  for (currencycode in currencies) {
    let option = `<option value="${currencycode}">${currencycode}</option>`;
    selectElems[i].insertAdjacentHTML("beforeend", option);

    // selectElems[0].innerHTML += `<option value="${currencycode}">${currencycode}</option>`;
    // selectElems[1].innerHTML += `<option value="${currencycode}">${currencycode}</option>`;
  }
}

function displayExchangeRate() {
  let inputValue = amount.value;

  const key = "e80c80e2337cc48ba936e067";
  let api = `https://v6.exchangerate-api.com/v6/${key}/latest/${selectFrom.value}`;

  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
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
