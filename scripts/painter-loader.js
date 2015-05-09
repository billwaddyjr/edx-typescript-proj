define(["require", "exports", "jquery"], function (require, exports, $) {
    var PainterLoader = (function () {
        function PainterLoader(url, list) {
            this.url = url;
            this.list = list;
        }
        PainterLoader.prototype.load = function () {
            var _this = this;
            $.getJSON(this.url, function (data) {
                _this.mapData(data);
            });
        };
        PainterLoader.prototype.mapData = function (data) {
            if (data) {
                console.log(data);
            }
        };
        return PainterLoader;
    })();
    exports.PainterLoader = PainterLoader;
});
