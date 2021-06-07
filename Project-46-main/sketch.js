const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var bgg,bggimg
var form, player, game;

var soldire2
var soldire1
var soldires = []

var sol1,solimg
var sol2,solimg2

var bullet,bulletimg

var opponent,opponentimg,oppanimation;
var torget,torgetimg

function preload() {
  bgimg = loadImage("images/bg.png");
  bggimg = loadImage("images/bgg.jpg")
  solimg = loadImage("images/gunplayer.png")
  bulletimg = loadImage("images/bullet.png")
  opponentimg = loadImage("images/opponent6.png")
  solimg2 = loadImage("images/player2.png")
  torgetimg = loadImage("images/shoottarget.png")
  shooot = loadSound("shoot.mp3")

  oppanimation = loadAnimation("images/opponent4.png","images/opponent6.png")
  
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
 
  engine = Engine.create();
   world = engine.world;
  database = firebase.database();
  opponentG = new Group();
  bulletG = new Group();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  background(bgimg)
  Engine.update(engine);

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
