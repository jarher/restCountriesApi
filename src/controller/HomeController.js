import MainController from "./MainController.js";
import { setRegionUrl } from "../helpers.js";
import data from "../../data.json";

export default function HomeController(events) {
  MainController.call(this);
  this.event = events;
  this.state;
}
HomeController.prototype = Object.create(MainController.prototype);

HomeController.prototype.listenSelect = function () {
  this.event.changeState.subscribe((x) => {
    if (x.target.id === "select-region") {
      this.state = x.target.value;
      console.log(this.state);
    }
  });
  return this.state;
};

HomeController.prototype.getHomeData = function () {
  const regionName = this.listenSelect();
  const regionUrl = setRegionUrl(regionName);
  return MainController.prototype.fetchData.call(this, regionUrl);
};
