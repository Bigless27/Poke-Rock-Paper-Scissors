function Pokedex(){
  this.pokedex = {"grass": [3,71,154,45,251,103,254,389,192,460], "fire": [6,59,157,229,38,244,250,257,392,126,146], "water": [9,62,73,87,99,91,130,260,331,382,484]};
}

Pokedex.prototype.getPokemon = function(type){
  var pokemon = []
  var index = Math.floor(Math.random() * this.pokedex.type.length);
  var pokemonImg = this.pokedex.type[index];
  $.get("http://pokeapi.co/media/img/" + pokemonImg  + ".png", function(result){

  }).then(function(result){
    pokemon.push(result);
  }).error(function(error){
    console.log(error);
  })
  return pokemon
}


