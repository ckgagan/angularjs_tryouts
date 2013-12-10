    var phonecatControllers = angular.module('phonecatControllers', []);

    phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
    function PhoneListCtrl($scope, $http) {
      $scope.phones = [{id: 1, imageUrl: "", name: "samsung galaxy S3", snippet: "good look and feel"},
                      {id: 1, imageUrl: "", name: "LG nexus 5", snippet: "bad battery"},
                      {id: 1, imageUrl: "", name: "LG optimus", snippet: "good lense"},
                      {id: 1, imageUrl: "", name: "Sony eriction", snippet: "good one but price is high"}]
    // $http.get('phones/phones.json').success(function(data) {
    // $scope.phones = data;
    // });

    $scope.orderProp = 'age';
    }]);

    phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
    }]);