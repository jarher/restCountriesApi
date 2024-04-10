import { scan } from "rxjs";
//listen an click event when user clicks on button theme
//change css app theme
export default function SwitchThemeEvent(event) {
  let defaultTheme = "light-theme";
  const switchTheme = document.getElementById("switch-theme");
  event(switchTheme, "click")
    .pipe(
      scan(
        (x) => (x === "light-theme" ? "dark-theme" : "light-theme"),
        defaultTheme
      )
    )
    .subscribe((state) => {
      document.body.className = state;
    });
}
