class BulletType2Controller extends BulletController{
  constructor(x, y, configs){
    configs.BULLET_SPEED = 1500;
    super(x, y, 'BulletType2.png', configs);
  }
}
