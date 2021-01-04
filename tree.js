class Mango{
    
        constructor(x,y,radious) {
            var options = {
                isStatic:true,
                friction:0.1,
                restitution:0.1
            }
            this.body = Bodies.circle(x,y,radious,options);
            //this.width = width;
            //this.height = height;
            World.add(world, this.body);
            this.image = loadImage("mango.png");
           
          }
          display(){
            var pos =this.body.position;
            imageMode(CENTER);
            
            image(this.image, pos.x, pos.y,30,30);
          
      
    }
  
   
  }
  