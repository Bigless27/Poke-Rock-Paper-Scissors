function Pokedex(){
  this.pokedex = {"grass": [3,71,154,45,251,103,254,389,192,460,182,275,497,114,331,123,212], "fire": [6,59,157,229,38,244,250,257,392,126,146, 219, 485, 136,383], "water": [9,62,73,87,99,91,130,260,331,382,484,279,350, 367,378,395,249,144  ]};
}

Pokedex.prototype.getPokemon = function(type){
  if (type === ''){return}
  var typeLower = type.toLowerCase()
  var index = Math.floor(Math.random() * this.pokedex[typeLower].length);
  var pokemonImg = this.pokedex[typeLower][index];
  return "http://pokeapi.co/media/img/" + pokemonImg  + ".png"
}




