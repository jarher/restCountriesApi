import { loadCountries } from "./helpers/countryLoader.js";
import { filter, fromEvent, timer } from "rxjs";
import HomeController from "./controller/HomeController.js";
import CountryController from "./controller/CountryController.js";
import routeHandler from "./routes/routeHandler.js";
import homeTemplate from "./templates/home.pug";
import countryTemplate from "./templates/country.pug";
import RenderView from "./view/RenderView.js";
import SelectEvent from "./controller/EventsControllers/SelectEvent.js";
import SwitchThemeEvent from "./controller/EventsControllers/SwitchThemeEvent.js";
import SubmitEvent from "./controller/EventsControllers/SubmitEvent.js";
import LoadDOMEvent from "./controller/EventsControllers/LoadDOMEvent.js";
import AjaxEvent from "./controller/EventsControllers/AjaxEvent.js";
import data from "../data.json";
import "./css/styles.css";
import {
  filterInitialData,
  initialUrl,
  setCountryUrl,
  setRegionUrl,
} from "./helpers/API-helpers.js";

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

//recuperar el valor del select
//incluirlo en la url de region
//cargar parametros del loader necesarios
//llammar loadcountries (cambiar nombre de funcion más adecuado)
//load countries from region
SelectEvent(fromEvent).subscribe((region) => {
  RenderView(res, homeTemplate);
  pageTransition(".home-section", eventEmitter);
});

// load country
SubmitEvent(fromEvent).subscribe((value) => {
  loaderParameters.url = setCountryUrl(value.toLowerCase());
  loaderParameters.isHomeActive = false;
  loaderParameters.initialFilter = null;

  loadCountries(loaderParameters);
});

SwitchThemeEvent(fromEvent);
