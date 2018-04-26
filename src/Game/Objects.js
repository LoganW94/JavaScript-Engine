
class Objects {
  constructor(){

    this.x = null;
    this.y = null;
    test();
    }
    
    getinfo(){
      //return everything about the player that is to be referenced by update or draw
      info = [this.name, this.age, this.x, this.y]
      return info;
    }
    
    setinfo(x,y){
      //
      this.x = x;
      this.y = y;
    }
    
    isinstanceof(){
      //returns class instance
    }
}