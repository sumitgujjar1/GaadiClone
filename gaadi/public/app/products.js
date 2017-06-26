app.controller('ProductsCtrl', function($scope, Car, ngProgress, toaster) {

   
$scope.car = new Car();

var refresh = function() {
  $scope.cars = Car.query(); 
  $scope.car ="";
}
refresh();

$scope.add = function(car) {
  Car.save(car,function(car){
    refresh();
  });
};

$scope.update = function(car) {
  car.$update(function(){
    refresh();
  });
};

$scope.remove = function(car) {
  car.$delete(function(){
    refresh();
  });
};

$scope.edit = function(id) {
  $scope.car = Car.get({ id: id });
}; 



$scope.deselect = function() {
  $scope.car = "";
}

  
})
app.controller('ViewCtrl', function($scope, $stateParams , Car, ngProgress, toaster) {   
    $scope.car = Car.get({ id: $stateParams.id })
    
})

app.controller('findCtrl', function($scope ,$http, Car ,ngProgress, toaster) {  
  $scope.find = new Car();
  var refresh = function() {  
  $scope.price = Car.query();  
  $scope.find  ="";
}
  refresh();
// Filter By Price 
   $scope.range = function(find) {
    return find.min_price <15;
  };
  $scope.range2 = function(find) {
    return find.min_price <8;
  };
  $scope.range3 = function(find) {
    return find.min_price <5; 
  };
  // FIlter by Brand 
  var brand = ["BMW", "Jeep", "Lamborghini"];

  var refresh = function(){
   $scope.brand = Car.query({brand: brand});
   $scope.find = "";
  }
  refresh();
})

app.controller('searchCtrl', function($scope, $http, Car ,ngProgress, toaster) {

$scope.test = new Car();
$scope.result = function() {
  var b = $scope.data;
  var refresh = function(){
      $scope.search = Car.query({brand:b});
      $scope.test = "";
}
refresh();
}

})

app.controller('filterCtrl', function($scope,$http,filterCar, ngProgress,toaster) {
  
})
app.controller('carsCtrl', function($scope, $http, Car , ngProgress, toaster) {
$scope.viewCars = new Car();
  var refresh = function() {
     $scope.viewcars = Car.query();
     $scope.viewCars = "";
  }
    refresh();

   $scope.brands = Car.query();
   $scope.list = "";
  

$scope.filtercar = function(brand){
   $scope.viewcars = Car.query({ brand: brand });
   $scope.viewCars = "";
     
}


})

