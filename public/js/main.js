var game = new Phaser.Game(768, 625, Phaser.AUTO);

// Keys used in game
var upKey;
var downKey;
var leftKey;
var rightKey;

var rocks = [];

var LEFTBOUNDARY = 50;
var RIGHTBOUNDARY = 718;
var ROCKOUTOFRANGE = 625;


function movePlane(plane) {
  if (leftKey.isDown) {
    if (plane.x - 5 > LEFTBOUNDARY) {
      plane.x -= 5;
    }
  } else if (rightKey.isDown) {
    if (plane.x + 5 < RIGHTBOUNDARY) {
      plane.x += 5;
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function createRocks() {
  setInterval(function() {
    var rock = game.add.sprite(getRandomInt(20, 748) , 20, 'rock');
    rock.scale.setTo(0.2, 0.2);
    rocks.push(rock);
    console.log('created rock on position: ', rock);
    console.log("we have in group: ", rocks);
  }, 250);
}


var GameState = {
  preload: function() {
    game.load.image('background', 'images/background.png');
    game.load.image('plane', 'images/plane.png');
    game.load.image('rock', 'images/rock.gif');
  },
  create: function() {
    this.background = this.game.add.tileSprite(0, 0, 1024, 625, 'background');
    var plane = game.add.sprite(this.game.world.centerX, this.game.world.centerY + 200, 'plane');

    createRocks();
    plane.scale.setTo(0.2, 0.2);
    this.plane = plane;
    this.rocks = rocks;
    this.plane.anchor.setTo(0.5);



    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  },
  update: function() {
    this.background.tilePosition.y += 2;
    rocks.forEach(function(rock) {
      if (rock.y + 7 < 600) {
        rock.y += 7;
        console.log('move', rock.y);
      } else {
        console.log('destroy', rock.y);
        rock.destroy();
        console.log('destroy1', rock.y);
      }

    });

    movePlane(this.plane);
  }
};

game.state.add('GameState', GameState);
game.state.start('GameState');
