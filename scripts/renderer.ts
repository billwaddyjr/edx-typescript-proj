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

  renderPainter(painterList: TypedList<IPainter>) {
    var el = (<HTMLSelectElement> document.getElementById('PainterList'));
    try {
      var painter = painterList.items
        .filter(item => item.name === el.value)
        .reduce(item => item);

      //Update style
      var el = (<HTMLSelectElement> document.getElementById('style'));
      el.innerHTML = painter.style;

      //Update examples
      var examples = (<HTMLSelectElement> document.getElementById('examples'));
      examples.value = '';
      var html = '<ul>';
      for (var i = 0, len = painter.examples.items.length; i < len; i++) {
        html += '<li>' + painter.examples.items[i] + '</li>';
      }
      examples.innerHTML = html + '</ul>';

    }
    catch (ex) { alert(ex.message) }
  }

  renderError() {
    var examples = (<HTMLSelectElement> document.getElementById('examples'));
    examples.value = 'Unable to load data!';
  }
}