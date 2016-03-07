function Player(value){
  this.choice = value;
  this.wins = 0;
  this.losses = 0;
};

function Computer(){
  this.selections = ['Fire', 'Water', 'Grass']
  this.choice = function(){
    return this.selections[Math.floor((Math.random()* 3))]
  }
};

function Controller(){
  this.computer = new Computer;
  this.choices = this.computer.selections
  this.computersPick = this.computer.choice();
  this.play = function(value){
    var player = new Player(value);
    var playerChoice = this.choices.indexOf(player.choice);
    var gendelmanChoice = this.choices.indexOf(this.computersPick);
    if (playerChoice == gendelmanChoice) {
        return "Draw";
    }
    if (playerChoice == this.choices.length - 1 && gendelmanChoice == 0) {
        return "Gendelman Wins";
    }
    if (gendelmanChoice == this.choices.length - 1 && playerChoice == 0) {
        return "Player Wins";
    }
    if (playerChoice > gendelmanChoice) {
        return "Player Wins";
    } else {
        return "Gendelman Wins";
    }
  }
}



