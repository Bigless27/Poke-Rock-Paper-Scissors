angular.module("rockPaperScissors").controller("AnimationsController",['$scope',function($scope){
    $('.animate').hide()
    function removeAnimationClass(){
      $('.animate').removeClass("animation")
    }
    $scope.shake = function(){
      $('.animate').show()
      $('.animate').addClass("animation")
      $scope.results
      setTimeout(removeAnimationClass,3000)
    }


}])
