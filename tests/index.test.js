const { fetchData } = require("../src/fetch/fetch.js");

const urlRegion =
  "https://restcountries.com/v3.1/region/europe?fields=name,population,region,capital";
const urlCountry =
  "https://restcountries.com/v3.1/name/germany?fields=name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languajes,borders";

test("GET HTTP request", async () => {
  const data = await fetchData(urlCountry);
  expect(data.length).toBeGreaterThan(0);
});
