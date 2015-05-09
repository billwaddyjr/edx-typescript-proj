import { TypedList } from "./helpers";
import { IPainter } from "./painter";
import { PainterLoader } from "./painter-loader";
import { Renderer } from "./renderer";

export function init() {
  var PainterList: TypedList<IPainter>;
  var renderer = new Renderer();

  var loader = new PainterLoader('/JSON/famousPainters.json', PainterList, renderer);
  loader.load();

  var painterSelect = (<HTMLSelectElement> document.getElementById('PainterList'));
  painterSelect.onchange = () => loadPainters();
};

function loadPainters() {

}




