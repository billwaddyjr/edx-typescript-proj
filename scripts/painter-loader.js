define(["require", "exports", "./painter", "jquery"], function (require, exports, painter_1, $) {
    var PainterLoader = (function () {
        function PainterLoader(url, list, renderer) {
            this.url = url;
            this.list = list;
            this.renderer = renderer;
        }
        PainterLoader.prototype.load = function () {
            var _this = this;
            $.getJSON(this.url, function (data) {
                _this.mapData(data);
            });
        };
        PainterLoader.prototype.mapData = function (data) {
            var _this = this;
            if (data) {
                var painters = data.famousPainters;
                painters.forEach(function (painter) {
                    _this.list.items.push(new painter_1.Painter(painter.name, painter.style));
                });
                this.renderer.renderPainterList(this.list);
            }
            else {
                this.renderer.renderError();
            }
        };
        return PainterLoader;
    })();
    exports.PainterLoader = PainterLoader;
});
