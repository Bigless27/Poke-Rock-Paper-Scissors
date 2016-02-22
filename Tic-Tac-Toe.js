function Choices(){
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

}

Player1.prototype.pick  = function(){

};


var ryan = new Player1;
var game = new Choices;
console.log(game.pick())