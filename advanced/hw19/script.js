// Task 1
const containerAll = document.getElementById("container");
const USER_IP = "https://ipapi.co/json/";

const countryInfoRequest = async () => {
  const userCountryResponse = await fetch(USER_IP);
  const result = await userCountryResponse.json();
  console.log("result", result);

  getCountryInfo(result);
};

const getCountryInfo = (result) => {
  const { country_name, country_capital, currency } = result;

  const countryInfoContainer = document.createElement("div");
  const countryName = document.createElement("h1");
  const countryCapital = document.createElement("h2");
  const countryCurrency = document.createElement("p");

  countryName.innerText = country_name;
  countryCapital.innerText = country_capital;
  countryCurrency.innerText = currency;

  countryInfoContainer.append(countryName, countryCapital, countryCurrency);

  countryFlagRequest(country_name, countryInfoContainer);

  containerAll.append(countryInfoContainer);
};

const countryFlagRequest = async (countryName, div) => {
  const userFlagResponse = await fetch(
    `https://restcountries.com/v2/name/${countryName}`
  );
  const result = await userFlagResponse.json();

  getCountryFlag(result, div);
};

const getCountryFlag = (countryName, div) => {
  const [{ flag }] = countryName;

  const img = document.createElement("img");
  img.setAttribute("src", flag);

  div.append(img);
};

// countryInfoRequest();