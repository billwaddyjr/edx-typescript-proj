requirejs.config({
    baseUrl: 'scripts',
    paths: {
        'jquery': '../libs/jquery-1.11.2'
    },
    shim: {
        jquery: {
            exports: '$'
        }
    }
});
requirejs(['app'], function (app) {
    app.init();
});
