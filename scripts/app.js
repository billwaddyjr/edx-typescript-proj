define(["require", "exports", "./painter-loader"], function (require, exports, painter_loader_1) {
    function init() {
        var PainterList;
        var loader = new painter_loader_1.PainterLoader('/JSON/famousPainters.json', PainterList);
        loader.load();
        var painterSelect = document.getElementById('PainterList');
        painterSelect.onchange = function () { return loadPainters(); };
    }
    exports.init = init;
    ;
    function loadPainters() {
    }
});
