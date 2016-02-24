function Game(){
  this.choices = ["Rock", "Paper", "Scissors"];
  this.pick = function(){
    return this.choices[Math.floor((Math.random() * 3))]
  }
};

function Player1(){
  this.wins = 0;
  this.loses = 0;
};

function Player2(){
  this.loses = 0;
  this.wins = 0;
};

function Controller(){
  this.one = new Player1;
  this.two = new Player2;
  this.results = "Draw";

  this.play = function(){
    if (this.one.pick() === "Rock"){
      if (this.two.pick() == "Scissors"){
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
    else if(this.one.pick() === "Scissors"){
      if (this.two.pick() == "Paper"){
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

    else if(this.one.pick() === "Paper"){
      if (this.two.pick() == "Rock"){
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

$(document).ready(function(){
  Player1.prototype = new Game();
  Player2.prototype = new Game();
  var ryan = new Controller;

  $('#play-button').on('click',function(event){
    event.preventDefault();
    $('.display').html(ryan.play());
  });
})

