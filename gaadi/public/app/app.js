var app = angular.module('myApp', ['ngResource', 'ui.router', 'ngProgress', 'ngAnimate', 'toaster']);
app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('myHttpInterceptor');
});

app.config(function($stateProvider,$locationProvider, $urlRouterProvider) {
    
$urlRouterProvider.otherwise('/');
  $stateProvider.state('movies', { // state for showing all movies
    url: '/',
    templateUrl: 'partials/home.html',
    controller: 'ProductsCtrl'
  }).state('viewCar', { //state for showing single movie
    url: '/api/cars/:id',
    templateUrl: 'partials/detail.html',
    controller: 'ViewCtrl'
  }).state('viewImages', { //state for showing single movie
    url: '/api/cars/:id/images',
    templateUrl: 'partials/images.html',
    controller: 'ViewCtrl'
  }).state('viewCars', { //state for showing single movie
    url: '/cars',    
    templateUrl: 'partials/cars.html',
    controller: 'carsCtrl'
  }).state('inseryCars', { //state for showing single movie
    url: '/upload-car',    
    templateUrl: 'partials/upload-car.html',
    controller: 'insertCtrl'
  });
   $locationProvider.html5Mode(true);
   $locationProvider.hashPrefix('!');
 
}).run(function($state) {
  $state.go('movies'); //make a transition to movies state when app starts
});

// Handle http server errors
app.factory('myHttpInterceptor', function ($q,toaster) {
    return {
        responseError: function (response) {
          console.log(response);
          if(response.data){
            if(response.data.message)
            toaster.error("Error: ", response.data.message);
            else
            toaster.error("Error: ", response.data);
          }
          return $q.reject(response);
        }
    };
});

// Showing loading indicator on top while data is requested from database
app.directive('loading',   ['$http', 'ngProgress', function ($http, ngProgress)
{
    return {
        restrict: 'A',
        link: function (scope, elm, attrs)
        {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function (v)
            {
                if(v){
                    ngProgress.start();
                }else{
                    ngProgress.complete();
                }
            });
        }
    };
}]);

// Create a resource factory to access products table from database 
app.factory('Car', function($resource) {
  return $resource('/api/cars/:id', { id: '@_id' }, {
    update: { // We need to define this method manually as it is not provided with ng-resource
      method: 'PUT'
    }
  });
});




