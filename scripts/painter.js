define(["require", "exports"], function (require, exports) {
    var Painter = (function () {
        function Painter(name, style, examples) {
            this.name = name;
            this.style = style;
            this.examples = examples;
        }
        return Painter;
    })();
    exports.Painter = Painter;
});
