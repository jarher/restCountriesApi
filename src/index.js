const { fetchData } = require("./fetch/fetch.js");

const urlRegion =
  "https://restcountries.com/v3.1/region/europe?fields=name,population,region,capital";
const urlCountry =
  "https://restcountries.com/v3.1/name/germany?fields=name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languajes,borders,flags";

async function getApiData() {
  const res = await fetchData(urlCountry);
  console.log(res);
}

console.log(getApiData());
