export const initialUrl =
  "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags";

export const setRegionUrl = (regionName) =>
  `https://restcountries.com/v3.1/region/${regionName}?fields=name,population,region,capital,flags`;

export const setCountryUrl = (countryName) =>
  `https://restcountries.com/v3.1/name/${countryName}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`;

export function filterInitialData(data) {
  const countriesToInclude = [
    "Germany",
    "United States of America",
    "Brazil",
    "Iceland",
    "Afghanistan",
    "Åland Islands",
    "Albania",
    "Algeria",
  ];

  return data.filter(
    (element) =>
      countriesToInclude.includes(element.name.official) ||
      countriesToInclude.includes(element.name.common)
  );
}
