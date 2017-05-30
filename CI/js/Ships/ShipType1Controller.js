class ShipType1Controller extends ShipController {
  constructor(x, y, configs) {
    configs.cooldown = 0.3;
    configs.speed = 500;
    super(x, y, "Spaceship1-Player.png", configs);
  }

  fire() {
    this.createBullet(new Phaser.Point(0, -10));
    this.createBullet(new Phaser.Point(1, -5));
    this.createBullet(new Phaser.Point(-1, -5));
    this.createBullet(new Phaser.Point(2, -5));
    this.createBullet(new Phaser.Point(-2, -5));
  }
  createBullet(direction) {
    new BulletType1Controller(
      this.sprite.position.x,
      this.sprite.position.y,
      {
        direction: direction
      }
    );
  }
}
