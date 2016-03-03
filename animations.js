angular.module("rockPaperScissors").controller("AnimationsController",['$scope',function($scope){
  angular.element(document).ready(function(){
      pokemonController = new pokeController()
      $('.animate').hide()
      $scope.pokemonPlayer = ''
      $scope.pokemonComputer = ''
      function removeAnimationClass(){
        $('.animate').removeClass("animation");
        $('.play-button').removeAttr('disabled');
        $('.results').show();
        $('.computer-choice .choice').show();
        $('.result-picture ').show();
      }
      $scope.shake = function(){
        $('.animate').show();
        $('.animate').addClass("animation");
        $('.play-button').attr('disabled', 'disabled');
        $('.results').hide();
        $('.computer-choice .choice').hide();
        $('.result-picture').hide()
        setTimeout(removeAnimationClass,2000)
      }

      $scope.showPokemon = function(){

        $scope.pokemonPlayer = pokemonController.choicePokemon[($scope.pick.choice).toLowerCase()][Math.floor((Math.random()* 3))];
        $scope.pokemonComputer = pokemonController.choicePokemon[($scope.computerChoice).toLowerCase()][Math.floor((Math.random()* 3))];
      }
  })
}])
