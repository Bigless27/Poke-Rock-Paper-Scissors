function Player(value){
  this.choice = value;
  this.wins = 0;
  this.loses = 0;
};

function Computer(){
  var selections = ['Rock', 'Paper', 'Scissors']
  this.choice = function(){
    return selections[Math.floor((Math.random()* 3))]
  }
  this.loses = 0;
  this.wins = 0;
};

function Controller(){
//there's a problem in this function, Draw isn't showing up!
  this.two = new Computer;
  this.results = "Draw";

  this.play = function(value){
    var one = new Player(value);

    if (one.choice === "Rock"){
      if (this.two.choice() == "Scissors"){
        one.wins  += 1;
        this.two.loses += 1;
        this.results = "Player 1 wins";
      }
      else{
        one.loses += 1;
        this.two.wins += 1;
        this.results = "Player 2 wins";
      };
    }
    else if(one.choice === "Scissors"){
      if (this.two.choice() == "Paper"){
        one.wins  += 1;
        this.two.loses += 1;
        this.results = "Player 1 wins";
      }
      else{
        one.loses += 1;
        this.two.wins += 1;
        this.results = "Player 2 wins";
      };
    }
    else if(one.choice === "Paper"){
      if (this.two.choice() == "Rock"){
        one.wins  += 1;
        this.two.loses += 1;
        this.results = "Player 1 wins";
      }
      else{
        one.loses += 1;
        this.two.wins += 1;
        this.results = "Player 2 wins";
      };
    }
    return this.results
  }
}



