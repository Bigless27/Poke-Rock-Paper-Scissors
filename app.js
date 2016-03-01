angular.module("rockPaperScissors").controller("MainController",['$scope', function($scope){
    $scope.choices = ['Rock', 'Paper', 'Scissors'];
    $scope.pick = {choice: ''};

    $scope.results = "";
    $scope.computerChoice = "None";
    $scope.wins = 0;
    $scope.losses = 0;
    $scope.playGame = function(){
      var ryan = new Controller();
      $scope.results = ryan.play($scope.pick.choice);
      $scope.computerChoice = ryan.computersPick;
      if ($scope.results === "You Win"){
        $scope.wins += 1;
      }
      else if($scope.results == "Computer Wins"){
        $scope.losses += 1;
      }
    }

    $scope.resetStats = function(){
      $scope.results = "";
      $scope.wins = 0;
      $scope.losses = 0;
      $scope.computerChoice = "None";
    }
}]);

