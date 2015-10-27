var app = angular.module('duoImpresiones', ['ngRoute']);
/**/
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partialsNgView/inicio.html'
        })
        .when('/presentacion', {
            templateUrl: 'partialsNgView/presentacion.html'
        })
        .when('/publicitario', {
            templateUrl: 'partialsNgView/publicitario.html'
        })
        .when('/personalizados', {
            templateUrl: 'partialsNgView/personalizados.html'
        })
        .when('/planos', {
            templateUrl: 'partialsNgView/planos.html'
        })
        .when('/invitaciones', {
            templateUrl: 'partialsNgView/invitaciones.html'
        })
        .when('/decorativos', {
            templateUrl: 'partialsNgView/decorativos.html'
        })
        .when('/escolares', {
            templateUrl: 'partialsNgView/escolares.html'
        })
        .when('/otros', {
            templateUrl: 'partialsNgView/otros.html'
        })
        .when('/contactanos', {
            templateUrl: 'partialsNgView/contactanos.html'
        })
        .when('/ubicacion', {
            templateUrl: 'partialsNgView/ubicacion.html'
        })
        .when('/nosotros', {
            templateUrl: 'partialsNgView/nosotros.html'
        })
        .when('/mision', {
            templateUrl: 'partialsNgView/mision.html'
        })
        .when('/vision', {
            templateUrl: 'partialsNgView/vision.html'
        })
        .when('/faq', {
            templateUrl: 'partialsNgView/faq.html'
        })
        .when('/avisolegal', {
            templateUrl: 'partialsNgView/avisolegal.html'
        })
        .when('/formasdepago', {
            templateUrl: 'partialsNgView/formasdepago.html'
        })
        .when('/condicionesdeuso', {
            templateUrl: 'partialsNgView/condicionesdeuso.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
