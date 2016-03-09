angular.module("rockPaperScissors").controller("AnimationsController",['$scope',function($scope){
  angular.element(document).ready(function(){
      $scope.pokemonPlayer = '';
      $scope.pokemonComputer = '';
      $scope.showPokemon = function(){
        var pokemonController = new pokeController
        $scope.pokemonPlayer = pokemonController.pokemonPlayerDisplay($scope.pick.choice);
        $scope.pokemonComputer = pokemonController.pokemonComputerDisplay($scope.computerChoice)
      }
  })
}])


      // $('.animate').hide();
      // $('.pokepic').hide();
      // $scope.pokemonPlayer = ''
      // $scope.pokemonComputer = ''
      // function removeAnimationClass(){
      //   $('.animate').removeClass("animation");
      //   $('.play-button').removeAttr('disabled');
      //   $('.results').show();
      //   $('.computer-choice .choice').show();
      //   $('.result-picture ').show();
      //   $(".pokepic").show();
      // }
      // $scope.shake = function(){
      //   shakeDisplay();
      // }

      // function shakeDisplay(){
      //   $(".pokepic").hide();
      //   $('.animate').show();
      //   $('.animate').addClass("animation");
      //   $('.play-button').attr('disabled', 'disabled');
      //   $('.results').hide();
      //   $('.computer-choice .choice').hide();
      //   $('.result-picture').hide()
      //   setTimeout(removeAnimationClass,2000)
      // }
