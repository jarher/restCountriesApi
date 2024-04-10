const toggleClass = (selector, nameClass) =>
  document.querySelector(selector).classList.toggle(nameClass);

export function pageTransition(selector, event) {
  event(300).subscribe((x) => {
    toggleClass(selector, "hide");
  });
}
