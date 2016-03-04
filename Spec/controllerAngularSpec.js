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
            $scope.pick.choice = "Fire";
            $scope.playGame();
            var matcher;
            if($scope.results === "You Win"){
                matcher = "You Win";
            }
            else if($scope.results === "Computer Wins"){
                matcher = "Computer Wins";
            }
            else if($scope.results === "Draw"){
                matcher = "Draw"
            }
            expect($scope.results).toEqual(matcher)
        })
    })
})