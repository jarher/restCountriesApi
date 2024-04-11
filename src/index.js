import { loadCountries } from "./helpers/countryLoader.js";
import { fromEvent, timer } from "rxjs";
import routeHandler from "./routes/routeHandler.js";
import RenderView from "./view/RenderView.js";
import SelectEvent from "./controller/EventsControllers/SelectEvent.js";
import SwitchThemeEvent from "./controller/EventsControllers/SwitchThemeEvent.js";
import SubmitEvent from "./controller/EventsControllers/SubmitEvent.js";
import LoadDOMEvent from "./controller/EventsControllers/LoadDOMEvent.js";
import AjaxEvent from "./controller/EventsControllers/AjaxEvent.js";
import {
  filterInitialData,
  initialUrl,
  setCountryUrl,
  setRegionUrl,
} from "./helpers/API-helpers.js";
import "./css/styles.css";

const newInstances = {};
routeHandler({
  Controllers: newInstances,
  render: RenderView,
  fromEvent,
});

//initial parameters for loader
const loaderParameters = {
  AjaxEvent,
  RenderView,
  url: initialUrl,
  isHomeActive: true,
  initialFilter: filterInitialData,
  timer,
};
//load initial countries
if (LoadDOMEvent(fromEvent)) {
  loadCountries(loaderParameters);
}

//load countries from region
SelectEvent(fromEvent).subscribe((region) => {
  loaderParameters.url = setRegionUrl(region);
  loaderParameters.isHomeActive = true;
  loaderParameters.initialFilter = null;

  loadCountries(loaderParameters);
});

// load country
SubmitEvent(fromEvent).subscribe((value) => {
  loaderParameters.url = setCountryUrl(value.toLowerCase());
  loaderParameters.isHomeActive = false;
  loaderParameters.initialFilter = null;

  loadCountries(loaderParameters);
});

SwitchThemeEvent(fromEvent);
