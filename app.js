angular.module("rockPaperScissors").controller("MainController",['$scope', function($scope){

  this.main = MainController.pick
  $scope.choices = ['Rock', 'Paper', 'Scissors']
  $scope.pick = {choice: ''}

  $scope.results = ""
  $scope.playGame = function(){
    this.results = ryan.play(this.main);
  }
}]);