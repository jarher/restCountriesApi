const { fetchData } = require("./fetch/fetch.js");

const setRegionUrl = (regionName) =>
  `https://restcountries.com/v3.1/region/${regionName}?fields=name,population,region,capital,flags`;

const setCountryUrl = (countryName) =>
  `https://restcountries.com/v3.1/name/${countryName}?fields=name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languajes,borders,flags`;

async function getApiData() {
  try {
    const res = await fetchData(setCountryUrl("europa"));
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

getApiData();
