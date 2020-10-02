function startGame() {
    console.log("start game")
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
  }
  
  var myGameArea = {
    canvas : document.querySelector(".game-canvas"),
    start : function() {
      this.canvas.width = 500;
      this.canvas.height = 500;
      this.context = this.canvas.getContext("2d");
    }
  }

  function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  startGame();