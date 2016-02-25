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

function Controller(value){
  this.one = new Player(value);
  this.two = new Computer;
  this.results = "Draw";

  this.play = function(){
    if (this.one.choice === "Rock"){
      if (this.two.choice() == "Scissors"){
        this.one.wins  += 1;
        this.two.loses += 1;
        this.results = "Player 1 wins";
      }
      else{
        this.one.loses += 1;
        this.two.wins += 1;
        this.results = "Player 2 wins";
      };
    }
    else if(this.one.choice === "Scissors"){
      if (this.two.choice() == "Paper"){
        this.one.wins  += 1;
        this.two.loses += 1;
        this.results = "Player 1 wins";
      }
      else{
        this.one.loses += 1;
        this.two.wins += 1;
        this.results = "Player 2 wins";
      };
    }
    else if(this.one.choice === "Paper"){
      if (this.two.choice() == "Rock"){
        this.one.wins  += 1;
        this.two.loses += 1;
        this.results = "Player 1 wins";
      }
      else{
        this.one.loses += 1;
        this.two.wins += 1;
        this.results = "Player 2 wins";
      };
    }
    return this.results
  }
}



