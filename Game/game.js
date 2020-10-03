function startGame() {
    console.log("start game")
    myGameArea.start();
    myGamePiece = new component(50, 50,"../slimy_boi.png", 10, 10, "image");
    }
  
  var myGameArea = {
    canvas : document.querySelector(".game-canvas"),
    start : function() {
      this.canvas.width = 500;
      this.canvas.height = 500;
      this.context = this.canvas.getContext("2d");
      this.interval = setInterval(updateGame, 20);
    },
    clear: function () {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
      clearInterval(this.interval)
    }
  }

  function component(width, height, color, x, y, type) {
  this.type = type;
  if(type == "image" ) {
    this.image = new Image();
    this.image.src = color;
  }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
      console.log("game piece update")
    ctx = myGameArea.context;
      if(type == "image" ) {
        ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height);
      } else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);     
    } 
  }
}

function updateGame(){
  myGamePiece.update();
}

  startGame();