import { loadCountries } from "./helpers.js";
import { filter, fromEvent, timer } from "rxjs";
import HomeController from "./controller/HomeController.js";
import CountryController from "./controller/CountryController.js";
import routeHandler from "./routes/routeHandler.js";
import homeTemplate from "./templates/home.pug";
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
  timer,
};
//load initial countries
if (LoadDOMEvent(fromEvent)) {
  loaderParameters.url = initialUrl;
  loaderParameters.template = homeTemplate;
  loaderParameters.initialFilter = filterInitialData;
  loadCountries(loaderParameters);
}

//recuperar el valor del select
//incluirlo en la url de region
//cargar parametros del loader necesarios
//llammar loadcountries (cambiar nombre de funcion más adecuado)
//load countries from region
// SelectEvent({ AjaxEvent, setRegionUrl, fromEvent }).subscribe((region) => {
// RenderView(res, homeTemplate);
// pageTransition(".home-section", eventEmitter);
// });

//load country
// new SubmitEvent(fromEvent).subscribe((value) => {
//   console.log(value);
// });

// SwitchThemeEvent(fromEvent);
