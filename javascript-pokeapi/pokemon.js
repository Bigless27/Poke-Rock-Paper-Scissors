function Pokedex(){
  this.pokedex = {"grass": [3,71,154,45,251,103,254,389,192,460], "fire": [6,59,157,229,38,244,250,257,392,126,146], "water": [9,62,73,87,99,91,130,260,331,382,484]};
}

Pokedex.prototype.getPokemon = function(type){
  if (type === ''){return}
  var typeLower = type.toLowerCase()
  var index = Math.floor(Math.random() * this.pokedex[typeLower].length);
  var pokemonImg = this.pokedex[typeLower][index];
  return "http://pokeapi.co/media/img/" + pokemonImg  + ".png"
}




