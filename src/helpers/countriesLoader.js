import { setCountryUrl, setRegionUrl } from "./API-helpers.js";
import { insertContentInMainTag, insertLoader } from "./DOM-helpers.js";

function renderData(RenderView, parameters, data) {
  // asign countriesData key with data value in parameters object
  parameters.countriesData = data;
  RenderView(parameters);
}
//change values of object parameters
//receive the  object named parameters for changing its keys values
function setParameters(parameters, url, isHomeActive, initialFilter, region) {
  parameters.url = url;
  parameters.isHomeActive = isHomeActive;
  parameters.initialFilter = initialFilter;
  parameters.region = region;
}

export function loadInitialDataInDOM(parameters) {
  try {
    const { AjaxEvent, RenderView, url } = parameters;
    // load loader animation before ajax request
    insertLoader();
    AjaxEvent(url).subscribe({
      next: (data) => {
        parameters.timer(1000).subscribe(() => {
          renderData(RenderView, parameters, data);
        });
      },
    });
  } catch {
    insertContentInMainTag("error");
  }
}

export function loadCountry(parameters, country) {
  //asign parameters values based in country
  setParameters(parameters, setCountryUrl(country), false, null, null);
  loadInitialDataInDOM(parameters);
}

export function loadCountriesForRegion(parameters, region) {
  //asign parameters values based in region
  setParameters(parameters, setRegionUrl(region), true, null, region);
  loadInitialDataInDOM(parameters);
}
