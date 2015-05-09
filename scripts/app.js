define(["require", "exports", "./painter-loader", "./renderer"], function (require, exports, painter_loader_1, renderer_1) {
    function init() {
        var PainterList;
        var renderer = new renderer_1.Renderer();
        var loader = new painter_loader_1.PainterLoader('/JSON/famousPainters.json', PainterList, renderer);
        loader.load();
        var painterSelect = document.getElementById('PainterList');
        painterSelect.onchange = function () { return loadPainters(); };
    }
    exports.init = init;
    ;
    function loadPainters() {
    }
});
