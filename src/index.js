// const { fetchData } = require("./fetch.js");
// const { setCountryUrl, setRegionUrl } = require("./urlSetters.js");
import HomeController from "./controller/HomeController.js";
import CountryController from "./controller/CountryController.js";
import routeHandler from "./routes/routeHandler.js";
import SwitchThemeController from "./controller/SwitchThemeController.js";
import EventsEmitterController from "./controller/EventsEmitterController.js";
import MainController from "./controller/MainController.js";
import LoadDOMController from "./controller/LoadDOMController.js";
import RenderView from "./view/RenderView.js";
// import data from "../data.json";
import "./css/styles.css";

const eventEmitter = new EventsEmitterController();

const newInstances = {
  switchTheme: new SwitchThemeController(eventEmitter),
  loadContent: new LoadDOMController(eventEmitter),
  homeController: new HomeController(eventEmitter),
  countryController: new CountryController(eventEmitter),
};

//??????
new MainController(
  { SwitchThemeController, LoadDOMController },
  eventEmitter
).listenInitialEvents();

routeHandler({
  Controllers: newInstances,
  render: RenderView,
  events: eventEmitter,
});
