const toggleClass = (selector, nameClass) =>
  document.querySelector(selector).classList.toggle(nameClass);

export function pageTransition(selector, event) {
  event.delayState.subscribe((x) => {
    toggleClass(selector, "hide");
  });
}
export const setRegionUrl = (regionName) =>
  `https://restcountries.com/v3.1/region/${regionName}?fields=name,population,region,capital,flags`;

export const setCountryUrl = (countryName) =>
  `https://restcountries.com/v3.1/name/${countryName}?fields=name,nativeName,population,region,subregion,capital,topleveldomain,currencies,languajes,borders,flags`;
