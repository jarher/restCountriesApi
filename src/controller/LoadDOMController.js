export default function LoadDOMController(events) {
  this.events = events;
}
LoadDOMController.prototype.listenEvent = function () {
  this.events.loadDOMState.subscribe((x) => {
    window.location.hash = "#/";
  });
};
