import { map, filter } from "rxjs";

export default function SubmitEvent(event) {
  return event(document, "submit").pipe(
    map((event) => {
      event.preventDefault();
      const target = event.target[0];
      return target.value;
    }),
    filter((value) => /\D\w/.test(value))
  );
}
