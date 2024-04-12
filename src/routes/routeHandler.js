export default function routeHandler({
  loadCountry,
  loadCountriesForRegion,
  loaderParameters,
  fromEvent,
}) {
  fromEvent(window, "hashchange").subscribe((x) => {
    const url = x.target.location.hash;
    const isCountryInHash = url.split("/").includes("country");
    const region = url.split("/").length == 2 ? url.split("/")[1] : null;

    if (region) {
      loadCountriesForRegion(loaderParameters, region);
      return;
    }
    if (isCountryInHash) {
      const country = url.split("/").pop();
      console.log(country);
      loadCountry(loaderParameters, country);

      return;
    }
  });
}
