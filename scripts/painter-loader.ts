import { TypedList } from "./helpers";
import { IPainter, Painter } from "./painter";
import { Renderer } from "./renderer";
import $ = require("jquery");

export class PainterLoader {
  constructor(private url: string, private list: TypedList<IPainter>, private renderer: Renderer) { }

  load() {
    $.getJSON(this.url, (data) => {
      this.mapData(data);
    });
  }

  mapData(data) {
    if (data) {
      var painters: any[] = data.famousPainters;

      painters.forEach((painter) => {
        this.list.items.push(
          new Painter(
            painter.name,
            painter.style,
            new TypedList<string>(painter.examples)
        ));
      });

      this.renderer.renderPainterList(this.list);
    } else {
      this.renderer.renderError();
    }
  }
}