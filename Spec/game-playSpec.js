describe("Game play objects", function(){

  describe("Controller Object", function(){
    it("Returns a win, a lose, or a drae result",function(){

      var controller = new Controller("Fire");
      var matcher = controller.play;

      expect(["You Win", "Gendelman Wins", "Draw"].includes(matcher)).toBeTruthy();
     }
    )
  })
})