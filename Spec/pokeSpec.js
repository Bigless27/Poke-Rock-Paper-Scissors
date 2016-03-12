describe("Pokedex", function(){

  it("getPokemon should return a .png", function(){
    var pokedex = new Pokedex;
    expect(pokedex.getPokemon("fire")).toMatch(/\S.png/);
  })
})