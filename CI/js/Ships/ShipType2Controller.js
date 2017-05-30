class ShipType2Controller extends ShipController{
  constructor(x, y, spriteName, configs){
    configs.cooldown = 0.3;
    configs.speed    = 700;
    super(x, y, spriteName, configs);
  }

  fire(){
    this.createBullet(new Phaser.Point(-1, -10));
    this.createBullet(new Phaser.Point(1, -10));
  }

  createBullet(direction){
    new BulletType2Controller(
      this.sprite.position.x,
      this.sprite.position.y,
      {
          direction: direction
      }
    );
  }
}
