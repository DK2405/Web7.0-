var Nakama = {};
Nakama.configs = {
  PLAYER_SPEED: 500,
  BACKGROUND_SPEED: 6,
  BULLET_SPEED: 1500,
  // player1Controls : {
  //   up        : Phaser.Keyboard.UP,
  //   down      : Phaser.Keyboard.DOWN,
  //   left      : Phaser.Keyboard.LEFT,
  //   right     : Phaser.Keyboard.RIGHT,
  //   fire      : Phaser.Keyboard.SPACEBAR
  // },
  // player2Controls : {
  //   up        : Phaser.Keyboard.W,
  //   down      : Phaser.Keyboard.S,
  //   left      : Phaser.Keyboard.A,
  //   right     : Phaser.Keyboard.D,
  //   fire      : Phaser.Keyboard.K
  // }
};

window.onload = function() {
  Nakama.game = new Phaser.Game(640, 960, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update,
    render: render
  }, false, false);
}

// preparations before game starts
var preload = function() {
  Nakama.game.scale.minWidth = 320;
  Nakama.game.scale.minHeight = 480;
  Nakama.game.scale.maxWidth = 640;
  Nakama.game.scale.maxHeight = 960;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');

}

var chooseShipType = function() {
  var player1Controls = {
    up: Phaser.Keyboard.UP,
    down: Phaser.Keyboard.DOWN,
    left: Phaser.Keyboard.LEFT,
    right: Phaser.Keyboard.RIGHT,
    fire: Phaser.Keyboard.SPACEBAR
  };
  var player2Controls = {
    up: Phaser.Keyboard.W,
    down: Phaser.Keyboard.S,
    left: Phaser.Keyboard.A,
    right: Phaser.Keyboard.D,
    fire: Phaser.Keyboard.K
  };
  do {
    var userInput = prompt("Enter your spacecraft type\n1:\n2:\n3:");
    switch (userInput) {
      case '1':
        Nakama.player = new ShipType1Controller(200, 800, player1Controls);
        Nakama.partner = new ShipType1Controller(400, 800, player2Controls);
        break;
      case '2':
        Nakama.player = new ShipType2Controller(200, 800, player1Controls);
        Nakama.partner = new ShipType2Controller(400, 800, player2Controls)
        break;
      case '3':
        Nakama.player = new ShipType3Controller(200, 800, player1Controls);
        Nakama.partner = new ShipType3Controller(400, 800, player2Controls)
        break;
      default:
        alert('Invalid input!');
        break;
    }
  } while (userInput < '1' || userInput > '3');
}
// initialize the game
var create = function() {
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;

  Nakama.background = Nakama.game.add.tileSprite(0, 0, 640, 960, 'background');
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.enemyGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();

  Nakama.players = [];
  chooseShipType();
}

// update game state each frame| fps: frame per second
var update = function() {
  Nakama.background.tilePosition.y += Nakama.configs.BACKGROUND_SPEED;
  Nakama.game.physics.arcade.collide(Nakama.player, Nakama.partner);
  Nakama.player.update();
  Nakama.partner.update();
}

// before camera render (mostly for debug)
var render = function() {}
