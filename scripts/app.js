window.onload =  function() {
  console.log("App.js has loaded");
  $.ajax({
    // type: 'get',
    // datatype: 'json',
    // url: 'http://applicant.pointsource.us/api/testUser/573f5d0b7e3d61136595a180',
    // success: function(response) {
    //   console.log(response)
    // },
    // error: function(e) {
    //   console.log(e);
    // }
  })

  // $.getJSON('http://applicant.pointsource.us/api/testUser/573f5d0b7e3d61136595a180', function(response) {
  //   console.log(response);
  // });
}
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
      var newURL = response.data.person.pictureURL.replace(".img", ".png");
      $scope.imageUrl = "http://applicant.pointsource.us" + newURL;
    })
  }
  });
