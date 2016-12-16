var game = new Phaser.Game(800, 600, Phaser.AUTO);

var GameState = {
  preload: function() {
    game.load.image('logo', 'images/phaser.png');
  },
  create: function() {
    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
  },
  update: function() {

  }
};

game.state.add('GameState', GameState);
game.state.start('GameState');
