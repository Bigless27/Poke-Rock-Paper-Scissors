angular.module("rockPaperScissors").controller("AnimationsController",['$scope',function($scope){
    $('.animate').hide()
    function removeAnimationClass(){
      $('.animate').removeClass("animation")
      $('.play-button').removeAttr('disabled')
    }
    $scope.shake = function(){
      $('.animate').show()
      $('.animate').addClass("animation")
      $('.play-button').attr('disabled', 'disabled')

      setTimeout(removeAnimationClass,3000)
    }


}])
