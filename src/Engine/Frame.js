


class Frame {
  constructor(width, height){
  this.width = width;
  this.height = height;
  // defines canvas object
  this.canvas = document.getElementById("gc");
  this.canvas.width = w;
  this.canvas.height = h;
  this.ctx = canvas.getContext("2d");
  }
  
  clearCanvas() {
  // clear to the color previously set
  this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
