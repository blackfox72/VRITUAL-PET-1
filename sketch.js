//Create variables here
var Dog1, happydog, foodS, foodStock;
var database;
var food;

function preload()
{
  //load images here
  Dog1= loadImage("Dog.png");
  happyDog= loadImage("happydog.png");

}

function setup() {
  database=firebase.database();

  createCanvas(500, 500);

  dog= createSprite(200,300,50,50);
  dog.addImage(Dog1);
  dog.scale= 0.2

foodStock = database.ref('Food');
foodStock.on("value",readStock);
textSize=20;

}

function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(happyDog);
}

  drawSprites();
  
  fill(255,255,254);
  text("Food remaining:"+foodS,170,200)
  fill("white");
  stroke(2);
  text("Note: Press UP ARROW KEY TO FEED DRAGO MILK");
 
}

   function readStock(data) {
     foodS= data.val();
   }

   function writeStock(x) {

    if(x<0) {
      x=0;
    } else{
      x=x-1;
    }

    database.ref('/').update({
      Food:x
    })

   }

