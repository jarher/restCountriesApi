import { ajax } from "rxjs/ajax";
import { map, catchError, of } from "rxjs";

export default function AjaxEvent(url) {
  return ajax.getJSON(url).pipe(
    map((userResponse) => userResponse),
    catchError((error) => {
      console.log("error: ", error);
      return of(error);
    })
  );
}
