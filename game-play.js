function Player(value){
  this.choice = value;
  this.wins = 0;
  this.losses = 0;
};

function Computer(){
  var selections = ['Fire', 'Water', 'Grass']
  this.choice = function(){
    return selections[Math.floor((Math.random()* 3))]
  }
};

function Controller(){
  this.computer = new Computer;
  this.computersPick = this.computer.choice();
  this.play = function(value){
    var player = new Player(value);
    var computerChoice = this.computersPick;
    var results = "Draw";
    if (player.choice == ""){
      results = "No choice selected"
      return results
    };
    if (player.choice == computerChoice){
      results = "Draw";
      return "Draw";
    };
    if (player.choice == "Fire" && computerChoice == "Grass"){
      results = "You Win";
      return results;
    }
    else if(player.choice == "Grass" && computerChoice == "Fire"){
      results = "Computer Wins";
      return results;
    }
    else if (player.choice == "Water" && computerChoice == "Fire"){
      results = "You Win";
      return results;
    }
    else if(player.choice == "Fire" && computerChoice == "Water"){
      results = "Computer Wins";
      return results;
    }
    else if(player.choice == "Grass" && computerChoice == "Water"){
      results = "You Win";
      return results;
    }
    else if(player.choice == "Water" && computerChoice == "Grass" ){
      results = "Computer Wins";
      return results;
    }
  }
}



