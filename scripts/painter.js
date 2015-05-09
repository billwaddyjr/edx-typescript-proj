define(["require", "exports"], function (require, exports) {
    var Painter = (function () {
        function Painter(name, style) {
            this.name = name;
            this.style = style;
        }
        return Painter;
    })();
    exports.Painter = Painter;
});
