app.directive('cabecera', function () {
    return {
        restrict: 'E',
        templateUrl: 'partialsDirectives/cabecera.html'
    };
});

app.directive('navegacion', function () {
    return {
        restrict: 'E',
        templateUrl: 'partialsDirectives/navegacion.html'
    };
});

app.directive('carrucel', function () {
    return {
        restrict: 'E',
        templateUrl: 'partialsDirectives/carrucel.html'
    };
});

app.directive('primerafila', function () {
    return {
        restrict: 'E',
        templateUrl: 'partialsDirectives/primeraFila.html'
    };
});

app.directive('segundafila', function () {
    return {
        restrict: 'E',
        templateUrl: 'partialsDirectives/segundaFila.html'
    };
});

app.directive('tercerafila', function () {
    return {
        restrict: 'E',
        templateUrl: 'partialsDirectives/terceraFila.html'
    };
});

app.directive('cuartafila', function () {
    return {
        restrict: 'E',
        templateUrl: 'partialsDirectives/cuartaFila.html'
    };
});

app.directive('piepagina', function () {
    return {
        restrict: 'E',
        templateUrl: 'partialsDirectives/piePagina.html'
    };
});
