import { pageTransition } from "./helpers/DOM-helpers.js";

export function loadCountries({
  AjaxEvent,
  RenderView,
  url,
  template,
  initialFilter,
  timer,
}) {
  AjaxEvent(url).subscribe({
    next: (data) => {
      RenderView(initialFilter ? initialFilter(data) : data, template);
      pageTransition(".home-section", timer);
    },
    error: (error) => console.log(error),
  });
}
