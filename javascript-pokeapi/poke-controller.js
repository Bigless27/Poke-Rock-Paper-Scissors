function pokeController(){
  this.pokedex = new Pokedex
  this.pokemonPlayerDisplay = function(type){
    return this.pokedex.getPokemon(type)
  }
  this.pokemonComputerDisplay = function(type){
    return this.pokedex.getPokemon(type)
  }
}