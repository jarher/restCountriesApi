import { Observable } from "rxjs";
import { setCountryUrl } from "../helpers";

export default function SumbitController(eventsEmitter) {
  this.submitState = eventsEmitter.submitState;
}

SumbitController.prototype.listenSubmit = function () {
  this.submitState.subscribe((x) => {
    x.preventDefault();
    const target = x.target[0];
    if (/\D\w/.test(target.value)) {
      return new Observable((subscriber) => {
        subscriber(eventsEmitter.fetchData(setCountryUrl(target.value)));
      });
    }
    target.value = "";
  });
};
