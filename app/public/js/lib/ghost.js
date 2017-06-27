var Ghost = function(image,gridX, gridY, tileSize){
  var img = image;
  img.src = '/img/red_ghost_spritesheet.png';
  this.img = img;
  this.img.size = 28;
  this.frameIndex = {x:0, y:0};
  this.frameWidth = Math.floor(68/ 2);
  this.frameHeight = 164 / 4;
  this.animationCycle = 0;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.dirX = 1;
  this.dirY = 0;
  this.speed = 1;
  this.currentX = gridX;
  this.currentY = gridY;
  this.gridMoveX = this.currentX + 1;
  this.gridMoveY = this.currentY;
  this.direction = {right: false, left: false, up: false, down: false};
  this.targetX = 20;
  this.targetY = 0;
  this.offset = (this.img.size - tileSize)/2;
  this.posX = this.currentX * tileSize - this.offset;
  this.posY = this.currentY * tileSize - this.offset;
  this.motionrules = new MotionRules(this, tileSize);
  this.intendedDirection = 'right';
};

Ghost.prototype = {
  update: function() {
    this.posX += this.xSpeed;
    this.posY += this.ySpeed;
    this.motionrules.availablePath();
    this.motionrules.currentGrid();
    this.motionrules.wallBounce();
    this.motionrules.nextMove();
    this.motionrules.escapeSide();
    this.moveOptions();
    if (this.ySpeed === 0) { this.dirX = this.xSpeed; }
    if (this.xSpeed === 0) { this.dirY = this.ySpeed; }
    this.ghostOrientation();
    this.ghostAnimation();

  },
  draw: function(renderer) {
    renderer.drawSprite(this);
  },
  ghostOrientation: function() {
    if (this.xSpeed < 0) {
      this.frameIndex.y = 2;
    } else if (this.xSpeed > 0) {
      this.frameIndex.y = 3;
    } else if (this.ySpeed < 0) {
      this.frameIndex.y = 0;
    } else if (this.ySpeed > 0) {
      this.frameIndex.y = 1;
    }
  },

  ghostAnimation: function() {
    this.animationCycle += 0.1;
    this.frameIndex.x = Math.floor(this.animationCycle) % 2;
  },

  velocity: function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  },
  moveOptions: function() {
    if (this.gridMoveX === this.currentX && this.gridMoveY === this.currentY) {
      this.options = [];
      this.updateGrid();
    }
  },
  updateGrid: function() {
    if(this.dirX === this.xSpeed && this.dirX != 0) {
      this.newPath();
    } else if (this.dirY === this.ySpeed && this.dirY != 0) {
      this.newPath();
    }
  },
  newPath: function() {
    switch(this.dirX) {
    case this.speed:
      if(levelone.path[this.currentY][this.currentX+2] === 1) {this.options.push('right');}
      if(levelone.path[this.currentY+1][this.currentX+1] === 1) {this.options.push('down');}
      if(levelone.path[this.currentY-1][this.currentX+1] === 1) {this.options.push('up');}
      break;
    case -this.speed:
      if(levelone.path[this.currentY][this.currentX-2] === 1) {this.options.push('left');}
      if(levelone.path[this.currentY+1][this.currentX-1] === 1) {this.options.push('down');}
      if(levelone.path[this.currentY-1][this.currentX-1] === 1) {this.options.push('up');}
    }
    switch(this.dirY) {
    case this.speed:
      if(levelone.path[this.currentY+2][this.currentX] === 1) {this.options.push('down');}
      if(levelone.path[this.currentY+1][this.currentX-1] === 1) {this.options.push('left');}
      if(levelone.path[this.currentY+1][this.currentX+1] === 1) {this.options.push('right');}
      break;
    case -this.speed:
      if(levelone.path[this.currentY-2][this.currentX] === 1) {this.options.push('up');}
      if(levelone.path[this.currentY-1][this.currentX+1] === 1) {this.options.push('right');}
      if(levelone.path[this.currentY-1][this.currentX-1] === 1) {this.options.push('left');}
    }
    this.setDirection();
  },
  setDirection: function(){
    var rand = this.options[Math.floor(Math.random() * this.options.length)];
    this.intendedDirection = rand;
    if (this.intendedDirection === 'right') { this.gridMoveX = this.currentX + 1; }
    if (this.intendedDirection === 'left') { this.gridMoveX = this.currentX - 1; }
    if (this.intendedDirection === 'up') { this.gridMoveY = this.currentY - 1; }
    if (this.intendedDirection === 'down') { this.gridMoveY = this.currentY + 1; }
  },
};
