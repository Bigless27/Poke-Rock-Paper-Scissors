angular.module('rockPaperScissors').controller('MainController', ['$scope', function($scope){
    $scope.choices = ['Rock', 'Paper', 'Scissors']
    $scope.pick = {choice: ''}
}]);