import { TypedList } from "./helpers";
import { IPainter } from "./painter";

export class Renderer {

  //Example how the RecipeCategories<T> generic is used.
  renderPainterList(painterList: TypedList<IPainter>) {
    var painterSelect = (<HTMLSelectElement> document.getElementById('PainterList'));
    painterList.items.forEach((painter) => {
      var opt = document.createElement('option');
      opt.innerHTML = painter.name;
      painterSelect.appendChild(opt);
    });
  }

  renderError() {
    var examples = (<HTMLSelectElement> document.getElementById('examples'));
    examples.value = 'Unable to load data!';
  }
}