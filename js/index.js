 /* window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    
    startGame();

  };

  function startGame() {
    
  }
}; */


  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  









//3. TRY //////////////////////////////



/* window.onload = function (){
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let img = "/images/road.png";
  ctx.drawImage(img, 500,700);
};

 */

/* 
function startGame () {
  //add function that sets up the road!!
  myGameArea.start();

}

let myGameArea = {

  canvas : document.getElementById("canvas"),
  ctx: canvas.getContext("2d"),
  
  start: function(){

    let img = new Image ();
    img.src = '/images/road.png';

    const backgroundImage = {
      img: img,
      x: 0,
      y: 0,
      speed: +0, //+3

    move: function(){
      this.y += this.speed;
      this.y %= canvas.height;
    },

    draw: function () {
      ctx.drawImage(this.img, 0, this.y, 500, 2000);
      ctx.drawImage(this.img, 0, this.y - this.img.height,500,2000);
      ctx.drawImage(this.img, 0, this.y - this.img.height*2,500,2000);

      //can't remove the "jump", between image creation, even when adding mor images (*80)
     }
    }

  function updateBackground(){
    backgroundImage.move();
    ctx.clearRect(0,0,canvas.width, canvas.height);
    backgroundImage.draw();
    requestAnimationFrame(updateBackground);
  }

  img.onload = function(){
    updateBackground()
  };

  }
  
  
}

startGame;





 */


/* 
// 2. AND 2.5 TRY -------------------------


//background dissapeared after adding the car
//both dessapeared when trying to add them both and the obstacles...

function startGame() {
  myGameArea.start();
  myGamePiece = car;
  let myObstacles = new component (10,200, "red", 300, 120);
}

// Created background road

let myGameArea = {
  canvas : document.getElementById("canvas"),
  ctx: canvas.getContext("2d"),
  start: function(){
    
    const img = new Image ();
    img.src = '/images/road.png';

    const backgroundImage = {
      img: img,
      x: 0,
      y: 0,
      speed: +0, //+3

    move: function(){
      this.y += this.speed;
      this.y %= canvas.height;
    },

    draw: function () {
      ctx.drawImage(this.img, 0, this.y, 500, 2000);
      ctx.drawImage(this.img, 0, this.y - this.img.height,500,2000);
      ctx.drawImage(this.img, 0, this.y - this.img.height*2,500,2000);

      //can't remove the "jump", between image creation, even when adding mor images (*80)
     }
    }

  function updateBackground(){
    backgroundImage.move();
    ctx.clearRect(0,0,canvas.width, canvas.height);
    backgroundImage.draw();
    requestAnimationFrame(updateBackground);
  }

  img.onload = function(){
    updateBackground()
  };

  }
}


//Create car piece and motion

let myGamePiece;

class Car{
  constructor(){
    this.x = 250;

    const car = new Image();
    car.addEventListener('load', () => {
      this.img = car;
      this.draw();
    });
    car.src = "/images/car.png"
  }

  moveLeft(){
    this.x -=25;
  }
  moveRight(){
    this.x +=25;
  }

  draw(){
    ctx.drawImage(this.img, this.x, 500, 50,85);
  }
}

const car = new Car();

document.addEventListener('keydown', e => {
  switch (e.keyCode){
    case 37: car.moveLeft(); console.log('left', car);
    break;
    case 39: car.moveRight(); console.log('right', car);
    break;
  }
  updateCanvas();
}) */

// ADD THIS NEXT CODE TO STOP THE CAR FROM MOVING. SETING THE KEYUP EVENT.

/*
document.addEventListener('keyup', e => {
  switch (e.keyCode){
    case 37: car.moveLeft(); console.log('left', car);
    break;
    case 39: car.moveRight(); console.log('right', car);
    break;
  }
  updateCanvas();
})
*/ 
/* 
function updateCanvas(){
  ctx.clearRect(0,0,500,700);
  car.draw();
}

updateCanvas(); */


// Create obstacles












// 1 TRY -------------------------


/* 
//Drawing player and obstacles -> need constructor class to move them!

const car = new Image ();
car.src = '/images/car.png';

let carX = 0;
let carY= 0;

function drawCar(x,y){
  ctx.clearRect (0,0,500,700);
  ctx.drawImage(car, carX, carY, 50, 50);
  setTimeout('draw (x, y)', 30);
}



//Defining backgroundRoad

const img = new Image();
img.src = '/images/road.png';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const backgroundImage = {
  img: img,
  y: 0,
  speed: -1,

  draw: function() {
    ctx.drawImage(this.img, 0, 0, 500, 700); //the 500 and 700 stretchs the image
  },
};

function updateCanvas() {
  

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();

  requestAnimationFrame(updateCanvas);
}

// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;

};





//ATTENTION
// 

/* QUESTIONS AND UNDONE ITERATIONS
    1. getting the start game button to make the road appear!
       Now it is fixed: - tried DOM manipulation, css display:none 
       (could't access the element I wanted! - maybe beacause it is in css file....?)
       // https://ironhack.zoom.us/rec/play/iNPrzM7g4yIcC70VGX3fq-Ft6Vt4Zr3aRFG3NaUXNp_Marnw-dPGqPAMuAnIYNXYEY94Ri0GqSw7OydA.Qm3QTpPNSXyU8HQR?canPlayFromShare=true&from=share_recording_detail&startTime=1682617045000&componentName=rec-play&originRequestUrl=https%3A%2F%2Fironhack.zoom.us%2Frec%2Fshare%2FbT-jNzGE_NfH9HGXuRBWNtU40aMWFCKL--g7GPAEqYlOQ3YhBgEi_jbauXokWWfn.TvkBxQI34f9ka7iA%3FstartTime%3D1682617045000

       2. Why it is not accepting the KeyCode for the keydown/up  ??? */