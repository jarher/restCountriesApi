const toggleClass = (selector, nameClass) =>
  document.querySelector(selector).classList.toggle(nameClass);

export function pageTransition(selector, event) {
  event(300).subscribe(() => {
    toggleClass(selector, "hide");
  });
}

export const insertLoader = () =>
  (document.querySelector(
    "main"
  ).innerHTML = `<span class="loader">Load&nbsp;ng</span>`);
