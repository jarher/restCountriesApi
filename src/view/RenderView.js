import homeTemplate from "../templates/home.pug";
import countryTemplate from "../templates/country.pug";
import { pageTransition } from "../helpers/DOM-helpers.js";

export default function RenderView({
  isHomeActive,
  initialFilter,
  countriesData,
  timer,
}) {
  //select class name of template for add transition effect
  let cssSelector;
  let content;
  const homeData = initialFilter ? initialFilter(countriesData) : countriesData;

  if (isHomeActive) {
    content = homeTemplate({ data: homeData });
    cssSelector = ".home-section";
  } else {
    content = countryTemplate({ data: countriesData });
    cssSelector = ".country-section";
  }
  document.querySelector("main").innerHTML = content;
  pageTransition(cssSelector, timer);
}
