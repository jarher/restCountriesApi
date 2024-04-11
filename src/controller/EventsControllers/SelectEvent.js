import { switchMap } from "rxjs";

export default function SelectEvent(fromEvent) {
  const selectRegion = document.querySelector("#select-region");
  // return fromEvent(selectRegion, "change").pipe(
  //   switchMap((e) => AjaxEvent(setRegionUrl(e.target.value)))
  // );
}
