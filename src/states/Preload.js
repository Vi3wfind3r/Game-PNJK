import GameState from './GameState'; 

class Preload extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#b0d9fc';
    //prevent users to pause the game by clicking away
    this.stage.disableVisibilityChange = true;
  }

  preload() {
      this.load.image('sky', 'assets/sky.png');
      this.load.image('platform', 'assets/platform.png');
      this.load.image('star', 'assets/star.png');
      this.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    }

  create() {
      this.state.start('MainMenu');
  }
}

export default Preload;