// creating variables for the car game
var canvas, bgimage;
var database;
var gamestate = 0;
var playercount;
var form, player, game;


// setting up the game
function setup(){

  //creating canvas
  canvas = createCanvas(500,500);

//reading data from firebase
database = firebase.database();

  console.log(database);

  game = new Game();
  game.getstate();
  game.start();



  
}

function draw(){
  background("white");
  
}

