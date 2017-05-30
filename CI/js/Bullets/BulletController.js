class BulletController {

  constructor(x, y, spriteName, configs) {
    this.sprite = Nakama.bulletGroup.create(x, y,  'assets', spriteName);
    this.configs = configs;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.sprite.checkWorldBounds = true;
    this.sprite.outOfBoundsKill = true;
    this.sprite.body.velocity = configs.direction.setMagnitude(this.configs.BULLET_SPEED);
  }
}
