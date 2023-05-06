


const myObstacles = [];

const canvas= document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "/images/road.png";



    window.onload = () => { 
      document.getElementById('start-button').onclick = () => {      //UNCOMMENT AFTERWARDS!!!!
          startGame();
        };

        function startGame(){
          roadDisplay();
          updateCar()
          //updateObstacles();
        
          //scoreDisplay
        }
      }
      //};                                                      //        UNCOMMENT AFTERWARDS!!!!


            //WRITE THE LOGIC TO START THE GAME HERE.



    ///////////// ROAD
   
    const road = {

        img: img,
        y: 0,
        speed: +3,

        move: function(){
          this.y += this.speed;
          this.y %= canvas.width;
        },

        draw: function (){
          ctx.drawImage(this.img, 0, this.y, 500, 2000);
          ctx.drawImage(this.img, 0, this.y - this.img.height,500,2000);
          ctx.drawImage(this.img, 0, this.y - this.img.height*2,500,2000);
        },
    };

   
    function roadDisplay(){
      
      road.move();
      updateCar();
      ctx.clearRect(0,0,canvas.width, canvas.height);
      road.draw();

      requestAnimationFrame(roadDisplay);
    };

  /////////////// CAR

/////////////// Class for just the car, it doest not include the possible creation of obstacles!!!!

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
      this.x -=20;
    }
    moveRight(){
      this.x +=20;
    }
  
    draw(){
      ctx.drawImage(this.img, this.x, 550, 50,100);
    }
  }

  const car = new Car();

  document.addEventListener('keydown', e => {
    switch (e.keyCode){
      case 37: 
      if(car.x >10)
      car.moveLeft(); console.log('left', car);
      break;

      case 39: 
      if(car.x < 450)
      car.moveRight(); console.log('right', car);
      break;
    }
    updateCar();
  });

  
  function updateCar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    car.draw();
    //console.log("car x" + car.x) used to get to the limit of the canvas for the car. "if" statements inside the keyCode
  };


















///// Generate the obstacles

function generateObstacles(){

  class Obstacles {
    constructor(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
    }
    update() {
      const ctx = myGameArea.context;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    newPos() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }
  
}
const obstacle = new Obstacles (30, 30, 'red', 0, 110);

function updateObstacles(){
    for(i=0; i<myObstacles.length; i++){
      myObstacles[i].x += -1;
      myObstacles[i].update();
    }

    myGameArea.frames += 1;
    if (myGameArea.frames % 120 === 0) {
      let x = canvas.width;
      let minHeight = 20;
      let maxHeight = 200;
      let height = Math.floor(
        Math.random() * (maxHeight - minHeight + 1) + minHeight
      );
      let minGap = 50;
      let maxGap = 200;
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      myObstacles.push(new Obstacles(10, height, "green", x, 0));
      myObstacles.push(
        new Obstacles(10, x - height - gap, "green", x, height + gap)
      );
    }
  };

 

  


/////////////////////////////////////////////////////////////////////////////////////////
























//////////////////////// CAR and OBSTACLES

//Create car piece and motion
/* 
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
    this.x -=20;
  }
  moveRight(){
    this.x +=20;
  }

  draw(){
    ctx.drawImage(this.img, this.x, 500, 50,100);
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
}) 

function updateCanvas(){
  ctx.clearRect(0,0,500,700);
  car.draw();
}

updateCanvas();
 */
// ADD THIS NEXT CODE TO STOP THE CAR FROM MOVING. SETING THE KEYUP EVENT.


/* document.addEventListener('keyup', (e) => {
  road.speed = 0;
}); */



///////////// OBSTACLES












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


*/
