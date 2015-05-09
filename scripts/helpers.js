define(["require", "exports"], function (require, exports) {
    var TypedList = (function () {
        function TypedList(items) {
            if (items === void 0) { items = []; }
            this.items = items;
        }
        return TypedList;
    })();
    exports.TypedList = TypedList;
});
