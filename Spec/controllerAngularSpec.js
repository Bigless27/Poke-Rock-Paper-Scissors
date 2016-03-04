describe("MainController", function(){
    beforeEach(module('rockPaperScissors'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }))

    describe('$scope.playGame',function(){
        it("Returns a win a lose or a draw result",function(){

            var $scope = {};
            var controller = $controller('MainController', {$scope:$scope});

            $scope.pick.choice = "fire";
            $scope.playGame();
            console.log($scope.results)
            expect($scope.results).toEqual("You Win")
        })
    })
})