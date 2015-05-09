define(["require", "exports", "./helpers", "./painter-loader", "./renderer"], function (require, exports, helpers_1, painter_loader_1, renderer_1) {
    function init() {
        var painterList = new helpers_1.TypedList();
        var renderer = new renderer_1.Renderer();
        var loader = new painter_loader_1.PainterLoader('/JSON/famousPainters.json', painterList, renderer);
        loader.load();
        var painterSelect = document.getElementById('PainterList');
        painterSelect.onchange = function () { return renderer.renderPainter(painterList); };
    }
    exports.init = init;
    ;
});
