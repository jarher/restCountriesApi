import { Observable, scan } from "rxjs";
//listen an click event when user clicks on button theme
//change css app theme
export default function SwitchThemeController(events) {
  this.theme = "light-theme";
  this.events = events;
}
SwitchThemeController.prototype.listenEvent = function () {
  this.events.clickState.subscribe((x) => {
    if (x.target.id === "switch-theme") {
      new Observable((subscriber) => {
        subscriber.next();
      })
        .pipe(
          scan(
            (x) => (x === "light-theme" ? "dark-theme" : "light-theme"),
            this.theme
          )
        )
        .subscribe((state) => {
          document.body.className = state;
          this.theme = state;
        });
    }
  });
};
