import { map } from "rxjs";

export default function SelectEvent(fromEvent) {
  return fromEvent(document, "change").pipe(map((e) => e.target.value));
}
