var app = angular.module("rockPaperScissors",[]);

app.controller('MainController', ['$scope', function($scope){
    $scope.choices = ['Rock', 'Paper', 'Scissors']
    $scope.pick = {choice: ''}
}]);