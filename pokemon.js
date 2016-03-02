$(document).ready(function(){
  pokedex = {"grass": [], "fire": [], "water": []};
  for(i = 1; i < 10; i++){
    $.get("http://pokeapi.co/api/v2/pokemon/"+ i + "/",function(result){

      }).then(function(result){
        poketypeArray = [];
        for (i in result.types){
          poketypeArray.push(result.types[i].type.name);
        }
        if (poketypeArray.includes("grass") === true){
          pokedex.grass.push( "http://pokeapi.co/media/img/" + result.id + ".png");
        }
        else if(poketypeArray.includes("fire") === true){
          pokedex.fire.push("http://pokeapi.co/media/img/" + result.id + ".png");
        }
        else if(poketypeArray.includes("water") === true){
          pokedex.water.push("http://pokeapi.co/media/img/" + result.id + ".png");
        }
    });
  }
});

