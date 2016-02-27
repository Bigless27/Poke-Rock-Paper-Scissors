function Player(value){
  this.choice = value;
  this.wins = 0;
  this.losses = 0;

};

function Computer(){
  var selections = ['Rock', 'Paper', 'Scissors']
  this.choice = function(){
    return selections[Math.floor((Math.random()* 3))]
  }
  this.losses = 0;
  this.wins = 0;
};

function Controller(){
//there's a problem in this function, Draw isn't showing up!
  this.two = new Computer;
  this.results = "Draw";


  this.play = function(value){
    var player = new Player(value);
    var computerChoice = this.two.choice()
    debugger
    debugger

    return this.results
  }
}



