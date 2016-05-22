window.onload =  function() {
  console.log("App.js has loaded");
}

// Creating module for Angular called myApp and a UserController.
angular.module('myApp', [])
  .controller("UserController", function($scope, $http) {
    $scope.init = function () {
      fetch();
    }
  function fetch() {
    $http.get("http://applicant.pointsource.us/api/testUser/573f5d0b7e3d61136595a180")
    .then(function(response) {
      $scope.firstName = response.data.person["first"];
      $scope.lastName = response.data.person["last-name"];
      $scope.gender = response.data.person["gender"];
      $scope.houseNum = response.data.person.address["house-#"];
      $scope.streetName = response.data.person.address["street-name"];
      $scope.city = response.data.person.address["city"];
      $scope.st = response.data.person.address["st"];
      $scope.zip = response.data.person.address["zip"];
      $scope.unitNum = response.data.person.address["unit-number"];
      // Correcting for incorrectly uploaded image under .img extension.
      var newURL = response.data.person.pictureURL.replace(".img", ".png");
      $scope.imageUrl = "http://applicant.pointsource.us" + newURL;
    })
  }
  });
