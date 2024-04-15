const removeClass = (selector, nameClass) =>
  document.querySelector(selector).classList.remove(nameClass);

export function pageTransition(selector, event) {
  event(300).subscribe(() => {
    removeClass(selector, "hide");
  });
}

export const insertContentInMainTag = (content) =>
  (document.querySelector("main").innerHTML = content);

export const insertLoader = () =>
  insertContentInMainTag(`<span class="loader">L &nbsp; ading</span>`);
