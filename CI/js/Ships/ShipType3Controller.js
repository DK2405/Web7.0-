class ShipType3Controller extends ShipController {
  constructor(x, y, configs) {
    configs.cooldown = 0.4;
    configs.speed = 1000;
    super(x, y, 'Spaceship3-Player.png', configs);
  }
  createBullet(direction) {
    new BulletType3Controller(
      this.sprite.position.x,
      this.sprite.position.y, {
        direction: direction
      }
    );
  }
  fire() {
    this.createBullet(new Phaser.Point(0, -1));
  }
}
