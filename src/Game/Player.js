//class for player and atributes

class Player extends Units {
  constructor(name, age){
    this.name = name;
    this.age = age;
    test();
    }
  
    test(){window.alert("Player loaded");}
    
    draw() {
      ctx.fillStyle = "blue";
      ctx.rect(this.x,this.y,32,32);
      ctx.stroke();}
    
}
