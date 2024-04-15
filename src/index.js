import SelectEvent from "./controller/EventsControllers/SelectEvent.js";
import SwitchThemeEvent from "./controller/EventsControllers/SwitchThemeEvent.js";
import SubmitEvent from "./controller/EventsControllers/SubmitEvent.js";
import AjaxEvent from "./controller/EventsControllers/AjaxEvent.js";
import routeHandler from "./routes/routeHandler.js";
import RenderView from "./view/RenderView.js";
import { filterInitialData, initialUrl } from "./helpers/API-helpers.js";
import {
  loadCountriesForRegion,
  loadInitialDataInDOM,
  loadCountry,
} from "./helpers/countriesLoader.js";
import { fromEvent, timer } from "rxjs";
import "./sass/style.scss";

//Listen change event and create url hash width region name
SelectEvent(fromEvent).subscribe({
  next(region) {
    window.location.hash = `#/${region}`;
  },
  error(error) {
    console.log(error);
  },
});

//Listen submit event and create url hash width country name
SubmitEvent(fromEvent).subscribe({
  next(country) {
    window.location.hash = `#/country/${country}`;
  },
  error(error) {
    console.log(error);
  },
});

//initial parameters for load content
const loaderParameters = {
  AjaxEvent,
  RenderView,
  url: initialUrl,
  isHomeActive: true,
  initialFilter: filterInitialData,
  timer,
};

//load initial countries when browser load html document first
loadInitialDataInDOM(loaderParameters);

//Listen for hash change
routeHandler({
  loadCountry,
  loadCountriesForRegion,
  loaderParameters,
  fromEvent,
});
//change app theme color
SwitchThemeEvent(fromEvent);
