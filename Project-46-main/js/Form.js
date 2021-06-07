class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset =createButton('reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("BATTLE GROUND");
    title.position(displayWidth/2-20,0);

    this.input.position(displayWidth/2-20,displayHeight/2-30);
    this.button.position(displayWidth/2,displayHeight/2);
    this.reset.position(displayWidth-200, 50);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html(" Hello " + player.name)
      this.greeting.position(450,230,50,50);
    });


    this.reset.mousePressed(()=>{

      player.updateCount(0);
      game.update(0);
    })
  }
}
