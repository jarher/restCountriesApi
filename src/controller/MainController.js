import { catchError, map, of } from "rxjs";

export default function MainController(instances, eventEmitter) {
  this.instances = instances;
  this.event = eventEmitter;
}
MainController.prototype.listenInitialEvents = function () {};

MainController.prototype.fetchData = function (url) {
  return this.event.ajaxState(url).pipe(
    map((userResponse) => userResponse),
    catchError((error) => {
      console.log("error: ", error);
      return of(error);
    })
  );
};
