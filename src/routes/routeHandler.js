import {
  fetchData,
  pageTransition,
  setCountryUrl,
  setRegionUrl,
} from "../helpers.js";
import homeTemplate from "../templates/home.pug";
import countryTemplate from "../templates/country.pug";
import data from "../../data.json";

export default function routeHandler({ Controllers, render, fromEvent }) {
  // const { homeController, countryController } = Controllers;

  // router
  fromEvent(window, "hashchange").subscribe((x) => {
    const url = x.target.location.hash;
    const urlHash = url.split("&");

    switch (urlHash[0]) {
      case "#/":
        document.querySelector("main").innerHTML = "contenido cargado";

        // render(data, homeTemplate);
        // pageTransition(".home-section", events);

        break;
      case "#/country/":
        console.log("countryName");
        // render(data[0], countryTemplate);
        // pageTransition(".country-section", events);
        break;
    }
  });
}
