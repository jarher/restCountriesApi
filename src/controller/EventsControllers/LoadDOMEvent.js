export default function LoadDOMEvent(event) {
  event(document, "DOMContentLoaded").subscribe((x) => {
    window.location.hash = "#/";
  });
  return true;
}
