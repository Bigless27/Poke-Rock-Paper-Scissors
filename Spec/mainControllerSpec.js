describe("MainController", function(){
    beforeEach(module('rockPaperScissors'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }))

    describe('$scope.playGame',function(){
        it("Returns a win, a lose or a draw result",function(){

            var $scope = {};
            var controller = $controller('MainController', {$scope:$scope});
            $scope.pick.choice = "Fire";
            $scope.playGame();
            expect(["You Win", "Gendelman Wins", "Draw"].includes($scope.results)).toBeTruthy();
        })
    })

    describe("scope.playGame", function(){
        it("Increments user stats by one if it is a win, or if it's a draw does nothing", function(){

            var $scope = {}
            var controller = $controller('MainController', {$scope: $scope});

            var matcher;
            var value;
            $scope.playGame();
            if($scope.results === "You Win"){
                matcher = $scope.wins;
                value = 1;

            }
            else if($scope.results === "Computer Wins"){
                matcher = $scope.losses;
                value = 1;
            }
            else if($scope.results === "Draw"){
                matcher = $scope.wins
                value = 0;
            }
            expect(matcher).toEqual(value);
        })
    })

    describe("scope.resetStats", function(){
        it("Resets user's win stats to zero", function(){

            var $scope = {};
            var controller = $controller('MainController', {$scope:$scope});
            $scope.wins = 5;
            $scope.resetStats();

            expect($scope.wins).toEqual(0);

        })
    })

    describe("scope.resetStats", function(){
        it("Resets user's lose stats to zero", function(){

            var $scope = {};
            var controller = $controller('MainController', {$scope:$scope});
            $scope.losses = 5;
            $scope.resetStats();

            expect($scope.losses).toEqual(0);
        })
    })
})