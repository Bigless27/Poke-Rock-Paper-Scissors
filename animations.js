angular.module("rockPaperScissors").controller("AnimationsController",['$scope',function($scope){
  angular.element(document).ready(function(){
      pokemonController = new pokeController()
      $('.animate').hide();
      $('.pokepic').hide();
      $scope.pokemonPlayer = ''
      $scope.pokemonComputer = ''
      function removeAnimationClass(){
        $('.animate').removeClass("animation");
        $('.play-button').removeAttr('disabled');
        $('.results').show();
        $('.computer-choice .choice').show();
        $('.result-picture ').show();
        $(".pokepic").show();
      }
      $scope.shake = function(){
        shakeDisplay();
      }

      function shakeDisplay(){
        $(".pokepic").hide();
        $('.animate').show();
        $('.animate').addClass("animation");
        $('.play-button').attr('disabled', 'disabled');
        $('.results').hide();
        $('.computer-choice .choice').hide();
        $('.result-picture').hide()
        setTimeout(removeAnimationClass,2000)
      }

      $scope.showPokemon = function(){
        var playerLowerCase = ($scope.pick.choice).toLowerCase()
        var computerLowerCase = ($scope.computerChoice).toLowerCase()
        $scope.pokemonPlayer = pokemonController.choicePokemon[playerLowerCase][Math.floor((Math.random()* playerLowerCase.length ))];
        $scope.pokemonComputer = pokemonController.choicePokemon[computerLowerCase][Math.floor((Math.random()* computerLowerCase.length))];
      }
  })
}])
