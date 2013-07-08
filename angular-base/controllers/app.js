var app_module = angular.module('app', []);
// A continuación  sedefinimos las rutas de la 'app'
app_module.config(['$routeProvider', function ($routes) {
/*    $routes.
        //carga de home
        when('/home', {
            templateUrl: 'views/home.html',
            controller: HomeCtrl
        }).
        //si cualquier ruta no definida
        otherwise({
            redirectTo: '/home'
        });
*/
} ]);
// Template de servicio básico
/*app_module.service('sharedContext', function () {
    var _context = '';
    return {
        get: function () {
            return _context;
        },
        set: function (value) {
            _context = value;
        }
    };
});*/
// Template de directiva
/*app_module..directive('suma', function(){
 return{
 // con restrict E le decimos JS que utilizara como nombre de elemento
 restrict: 'E',
 //la funcion link le agrega el comportamiento indicado a la vista
 link: function(scope,element) {
 element.text( 2 + 2);
 }
 }
 });*/