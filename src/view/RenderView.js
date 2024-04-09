export default function RenderView(data, template) {
  document.querySelector("main").innerHTML = template({ data });
}
