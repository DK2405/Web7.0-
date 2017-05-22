var Nakama = {};
Nakama.configs = {};

window.onload = function(){
  Nakama.game = new Phaser.Game(640,960,Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

var background;
// preparations before game starts
var preload = function(){
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

// initialize the game
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;

  background = Nakama.game.add.tileSprite( 0, 0, 640, 960, 'background');

  Nakama.player = Nakama.game.add.sprite(350, 400, 'assets', 'Spaceship1-Player.png');
  // Nakama.player2 = Nakama.game.add.sprite(200, 400, 'assets', 'Spaceship2-Player.png')
}

// update game state each frame| fps: frame per second
var update = function(){
    background.tilePosition.y += 6;
    if(Nakama.keyboard.isDown(Phaser.Keyboard.W) ){
      Nakama.player.position.y = Math.max(Nakama.player.position.y -10, 0);
    }
    else if(Nakama.keyboard.isDown(Phaser.Keyboard.S)){
      Nakama.player.position.y = Math.min(Nakama.player.position.y + 10, Nakama.game.height - 78);
    }
    if(Nakama.keyboard.isDown(Phaser.Keyboard.D)){
      Nakama.player.position.x = Math.min(Nakama.player.position.x + 10, Nakama.game.width - 78);
    }
    else if(Nakama.keyboard.isDown(Phaser.Keyboard.A)){
      Nakama.player.position.x = Math.max(Nakama.player.position.x -10, 0);
    }
    // if(Nakama.keyboard.isDown(Phaser.Keyboard.UP)){
    //   Nakama.player2.position.y -=10;
    // }
    // else if(Nakama.keyboard.isDown(Phaser.Keyboard.DOWN)){
    //   Nakama.player2.position.y +=10;
    // }
    // if(Nakama.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    //   Nakama.player2.position.x +=10;
    // }
    // else if(Nakama.keyboard.isDown(Phaser.Keyboard.LEFT)){
    //   Nakama.player2.position.x -=10;
    // }




}

// before camera render (mostly for debug)
var render = function(){}
