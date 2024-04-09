import { fromEvent, timer, map, catchError, of } from "rxjs";
import { ajax } from "rxjs/ajax";
// create observables to verify app state changes
export default function EventsEmitterController() {
  this.loadDOMState = fromEvent(document, "DOMContentLoaded");
  this.clickState = fromEvent(document, "click");
  this.changeState = fromEvent(document, "change");
  this.submitState = fromEvent(document, "submit");
  this.hashChangeState = fromEvent(window, "hashchange");
  this.ajaxState = ajax.getJSON;
  this.delayState = timer(200);
}
// make http request
EventsEmitterController.prototype.fetchData = function (url) {
  return ajax.getJSON(url).pipe(
    map((userResponse) => userResponse),
    catchError((error) => {
      console.log("error: ", error);
      return of(error);
    })
  );
};
