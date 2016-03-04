function Pokedex(){
  this.pokemonId = [3,6,9,130,71,154,157,160,169,175,254,257,260];
}

Pokedex.prototype.getPokemon = function(){
  pokedex = {"grass": [], "fire": [], "water": []};
  for(i in this.pokemonId){
    $.get("http://pokeapi.co/api/v2/pokemon/"+ this.pokemonId[i] + "/",function(result){

      }).then(function(result){
        poketypeArray = [];
        for (i in result.types){
          poketypeArray.push(result.types[i].type.name);
        }

        if (poketypeArray.includes("grass") === true){
          pokedex['grass'].push( "http://pokeapi.co/media/img/" + result.id + ".png");
        }
        else if(poketypeArray.includes("fire") === true){
          pokedex['fire'].push("http://pokeapi.co/media/img/" + result.id + ".png");
        }
        else if(poketypeArray.includes("water") === true){
          pokedex['water'].push("http://pokeapi.co/media/img/" + result.id + ".png");
        }
    });
  }
  return pokedex
}


