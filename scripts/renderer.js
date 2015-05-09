define(["require", "exports"], function (require, exports) {
    var Renderer = (function () {
        function Renderer() {
        }
        Renderer.prototype.renderPainterList = function (painterList) {
            var painterSelect = document.getElementById('PainterList');
            painterList.items.forEach(function (painter) {
                var opt = document.createElement('option');
                opt.innerHTML = painter.name;
                painterSelect.appendChild(opt);
            });
        };
        Renderer.prototype.renderError = function () {
            var examples = document.getElementById('examples');
            examples.value = 'Unable to load data!';
        };
        return Renderer;
    })();
    exports.Renderer = Renderer;
});
