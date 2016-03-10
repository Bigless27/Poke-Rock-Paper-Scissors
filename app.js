angular.module("rockPaperScissors").controller("MainController",['$scope', function($scope){
    $scope.choices = ['Grass', 'Water', 'Fire'];
    $scope.pick = {choice: ''};
    $scope.results = "";
    $scope.computerChoice = "None";
    $scope.wins = 0;
    $scope.losses = 0;

    $scope.colorInput = function(){
      $('.choices label').removeClass('selected');
      $('#' + $scope.pick.choice).parent().parent().addClass('selected');
    }

    $scope.playGame = function(){
      var gamePlay = new Controller($scope.pick.choice);
      $scope.results = gamePlay.play;
      $scope.computerChoice = gamePlay.computersPick;
      incrementResults();
    }

    $scope.resetStats = function(){
      $scope.results = "";
      $scope.wins = 0;
      $scope.losses = 0;
      $scope.computerChoice = "None";
    }

    function incrementResults(){
      if ($scope.results === "You Win"){
        $scope.wins += 1;
      }
      else if($scope.results == "Gendelman Wins"){
        $scope.losses += 1;
      }
    }
}]);

