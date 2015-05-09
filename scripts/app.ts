import {TypedList} from "./helpers";
import {IPainter } from "./painter";
import {PainterLoader } from "./painter-loader";

export function init() {
  var PainterList: TypedList<IPainter>;
  //var renderer = new Renderer();

  var loader = new PainterLoader('/JSON/famousPainters.json', PainterList);
  loader.load();

  var painterSelect = (<HTMLSelectElement> document.getElementById('PainterList'));
  painterSelect.onchange = () => loadPainters();
};

function loadPainters() {

}




