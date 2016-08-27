startCtrl
  .controller('TabsController', function ($scope) {
    $scope.onTabSelected = function () {
      console.log(0);
    };
    $scope.onTabDeselected = function () {
      console.log(1);
    }
  })
