// this ties the game to the engine and is the main game loop

//inits engine
var eng = new Core();

var w = 640;
var h = 480;


function clearCanvas() {
  // clear to the color previously set
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function run() {
  
  clearCanvas();
  
  eng.getInput();
  
  eng.update();
  
  eng.render();
  
}

function start(){
  
  setInterval(run, 10);
  
}