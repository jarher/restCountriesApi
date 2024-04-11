export function loadCountries(parameters) {
  const { AjaxEvent, RenderView, url } = parameters;
  AjaxEvent(url).subscribe({
    next: (data) => {
      // asign countriesData key with data value in parameters object
      parameters.countriesData = data;
      RenderView(parameters);
    },
    error: (error) => console.log(error),
  });
}
