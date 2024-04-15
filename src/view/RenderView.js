import homeTemplate from "../templates/home.pug";
import detailsTemplate from "../templates/details.pug";
import {
  insertContentInMainTag,
  pageTransition,
} from "../helpers/DOM-helpers.js";

export default function RenderView({
  isHomeActive,
  initialFilter,
  countriesData,
  timer,
}) {
  //if initialFilter exists load first eight countries by default, otherwise load
  //countries selected by region
  const homeData = initialFilter ? initialFilter(countriesData) : countriesData;

  insertContentInMainTag(
    isHomeActive
      ? homeTemplate({ data: homeData })
      : detailsTemplate({ data: countriesData })
  );

  pageTransition("section", timer);
}
