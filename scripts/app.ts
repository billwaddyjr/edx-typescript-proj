import { TypedList } from "./helpers";
import { IPainter } from "./painter";
import { PainterLoader } from "./painter-loader";
import { Renderer } from "./renderer";

export function init() {
  var painterList = new TypedList<IPainter>();
  var renderer = new Renderer();

  var loader = new PainterLoader('/JSON/famousPainters.json', painterList, renderer);
  loader.load();

  var painterSelect = (<HTMLSelectElement> document.getElementById('PainterList'));
  painterSelect.onchange = () => renderer.renderPainter(painterList);
};




