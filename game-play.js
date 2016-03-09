function Player(value){
  this.wins = 0;
  this.losses = 0;
};

function Computer(){
  this.selections = ['Fire', 'Water', 'Grass']
  this.choice = function(){
    return this.selections[Math.floor((Math.random()* 3))]
  }
};

function Play(playerChoice,gendelmanChoice,selections){
    if (playerChoice === ''){return "No Choice Selected"};
    var playerChoice = selections.indexOf(playerChoice);
    var gendelmanChoice = selections.indexOf(gendelmanChoice);
    if (playerChoice == gendelmanChoice) {
        return "Draw";
    }
    if (playerChoice == selections.length - 1 && gendelmanChoice == 0) {
        return "Gendelman Wins";
    }
    if (gendelmanChoice == selections.length - 1 && playerChoice == 0) {
        return "You Win";
    }
    if (playerChoice > gendelmanChoice) {
        return "You Win";
    } else {
        return "Gendelman Wins";
    }
}

function Controller(value){
  this.computer = new Computer;
  this.computersPick = this.computer.choice();
  this.choices = this.computer.selections;
  this.play =  Play(value,this.computersPick, this.choices);
}



