angular.module("rockPaperScissors").controller("AnimationsController",['$scope',function($scope){
  angular.element(document).ready(function(){

      $('.animate').hide()
      $scope.pokemon = ''
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
  })
}])
