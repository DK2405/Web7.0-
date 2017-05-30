class BulletType1Controller extends BulletController {
  constructor(x, y, configs) {
    configs.bulletSpeed = 1500;
    super(x, y, 'BulletType1.png', configs);
    this.sprite.angle = Phaser.Math.radToDeg(Phaser.Math.angleBetween(
      0, 0,
      configs.direction.x, configs.direction.y
    )) + 90;
  }
}
