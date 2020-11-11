//Create variables here
var dog, happyDog;
var database,foodS,foodStock;

function preload()
{
  //load images here
  d1 = loadImage("images/dogImg.png")
  d2 = loadImage("images/dogImg1.png")

}

function setup() {
 database = firebase.database();
  createCanvas(500,500);
  dog = createSprite(250,350);
  dog.addImage(d1);
  dog.scale=0.5

  foodStock=database.ref('food');
  foodStock.on("value",readStock)
  
}


function draw() {  

  background(rgb(46,139,87))

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS)
    dog.addImage(d2)
  }
  drawSprites();
  //add styles here
  textSize(10);
  fill("black")
  stroke(5);
  text(foodStock, 400,50);
  text("NOTE:  PRESS UP_ARROW KEY TO FEED DRAGE MILK!",10,30);


}

function readStock(data){

  foodS= data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x-=1
  }
  database.ref('/').update({
food:x
  })
}



