
class Core{
  constuctor(w,h){
    this.w = w;
    this.h = h;
    initEngine();
  }
  
  initEngine(){
    
    this.inputhandler = new InputHandler();
    this.updater = new Updater();
    this.renderer = new Renderer(this.w, this.h);
    
  }
  
  getInput(){
    // gets keyboard input from the user
    console.log("input");
    document.alert("input");
  }
  
  update(){
    //when called by the 
    console.log("update");
    document.alert("update");
  }
  
  render(){
    //draws everything to the screen
    console.log("draw");
    document.alert("draw");
    this.renderer.draw();
  }
  
}