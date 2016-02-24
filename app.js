angular.module("rockPaperScissors").controller("MainController",['$scope', function($scope){
  $scope.choices = ['Rock', 'Paper', 'Scissors'];
  $scope.pick = {choice: ''};

  $scope.results = "";
  $scope.playGame = function(){
    var ryan = new Controller($scope.results);
    console.log($scope.results)
    this.results = ryan.play();
  }
}]);