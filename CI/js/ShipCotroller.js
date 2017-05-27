class ShipCotroller {
  constructor(x, y, spriteName, configs) {
    this.sprite = Nakama.playerGroup.create(x, y, 'assets', spriteName);
    this.configs = configs;

  }

  update() {
    if (Nakama.keyboard.isDown(this.configs.up)) {
      this.sprite.position.y = Math.max(this.sprite.position.y - Nakama.configs.PLAYER_SPEED, 0);
    } else if (Nakama.keyboard.isDown(this.configs.down)) {
      this.sprite.position.y = Math.min(this.sprite.position.y + Nakama.configs.PLAYER_SPEED, Nakama.game.height - this.sprite.height);
    }
    if (Nakama.keyboard.isDown(this.configs.right)) {
      this.sprite.position.x = Math.min(this.sprite.position.x + Nakama.configs.PLAYER_SPEED, Nakama.game.width - this.sprite.width);
    } else if (Nakama.keyboard.isDown(this.configs.left)) {
      this.sprite.position.x = Math.max(this.sprite.position.x - Nakama.configs.PLAYER_SPEED, 0);
    }

    if (Nakama.keyboard.isDown(this.configs.fire)) {
      this.fire();
    }


  }

  fire() {
    var bullet = new BulletController(this.sprite.position.x, this.sprite.position.y, 'BulletType1.png');
    bullet.sprite.position.y -= bullet.sprite.height;
    bullet.sprite.position.x += (this.sprite.width - bullet.sprite.width) / 2;
  }

}
