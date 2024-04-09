import { pageTransition, setCountryUrl, setRegionUrl } from "../helpers.js";
import homeTemplate from "../templates/home.pug";
import countryTemplate from "../templates/country.pug";
import data from "../../data.json";

export default function routeHandler({ Controllers, render, events }) {
  const { homeController, countryController } = Controllers;

  // router
  events.hashChangeState.subscribe((x) => {
    switch (x.target.location.hash) {
      case "#/":
        render(data, homeTemplate);
        pageTransition(".home-section", events);
        homeController.listenSelect();
        break;
      case "#/country":
        render(data[0], countryTemplate);
        pageTransition(".country-section", events);
        break;
    }
    // if (x.target.location.hash === "#/") {
    // const homeController = new HomeController(events);
    // homeController.getHomeData().subscribe({
    //   next: (homeData) => {
    //     console.log(homeData);
    //     loadHomeModule(homeData);
    //   },
    //   error: (err) => console.log(err),
    // });

    // return;
    // }
    // if (x.target.location.hash.includes("#/country")) {
    //   const url = setCountryUrl(
    //     window.location.hash.split("/").pop().toLowerCase()
    //   );

    //   eventsEmitter.fetchData(url).subscribe({
    //     next: (countryData) => {
    //       CountryView(new CountryController(countryData[0]).getTemplate()),
    //         pageTransition(
    //           document.querySelector(".country-section"),
    //           "hide",
    //           eventsEmitter
    //         );
    //     },
    //     error: (err) => console.log(err),
    //   });

    //   return;
    // }
  });
}
