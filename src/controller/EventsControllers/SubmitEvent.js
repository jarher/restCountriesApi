import { map, filter } from "rxjs";

export default function SubmitEvent(event) {
  const searchForm = document.getElementById("search-form");
  return event(searchForm, "submit").pipe(
    map((event) => {
      event.preventDefault();
      const target = event.target[0];
      return target.value;
    }),
    filter((value) => /\D\w/.test(value))
  );
}
