import { setRegionUrl } from "../helpers.js";
import data from "../../data.json";
import { Observable, filter, fromEvent } from "rxjs";

export default function HomeController(events, fetch) {
  this.event = events;
  this.fetch = fetch;
  this.initialData = events.fetchData("https://restcountries.com/v3.1/all");
}

HomeController.prototype.getRegionData = function () {
  return fromEvent(document.getElementById("select-region"), "change");
};

// HomeController.prototype.getHomeData = function () {
//   const regionName = this.listenSelect();
//   const regionUrl = setRegionUrl(regionName);
// };
