class BulletController{
  constructor(x, y, spriteName){
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    // this.sprite.anchor = new Phaser.Point(0.5,0.5);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.velocity.y -= Nakama.configs.BULLET_SPEED;
  }
}
