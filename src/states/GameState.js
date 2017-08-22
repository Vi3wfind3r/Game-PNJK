

class GameState extends Phaser.State {
	init() {
			let platforms;
			let player;
			let cursors;
	}

	create() {
			this.game.physics.startSystem(Phaser.Physics.ARCADE);
      let sky = this.game.add.sprite(0, 0, 'sky');

      //platforms includes ground and ledges
      this.platforms = this.game.add.group();
      //enable physics in this group
      this.platforms.enableBody = true;

      let ground = this.platforms.create(0, this.game.world.height - 64, 'platform');
      ground.scale.setTo(3, 3);
      ground.body.immovable = true;

      let ledge = this.platforms.create(600, 400, 'platform');
      ledge.body.immovable = true;

      ledge = this.platforms.create(-100, 100, 'platform');
      ledge.body.immovable = true;

      ledge = this.platforms.create(200, 250, 'platform');
      ledge.body.immovable = true;

      this.player = this.game.add.sprite(32, this.game.world.height - 150, 'dude');
      this.game.physics.arcade.enable(this.player);

      this.player.body.bounce.y = 0.2;

      //tried increasing this to 500 and couldn't really jump
      this.player.body.gravity.y = 300; 

      //this is true or body will rebound back into the world
      //if false, then body will leave the world upon collision
      this.player.body.collideWorldBounds = true;

      this.player.animations.add('left', [0, 1, 2, 3], 10, true);
      this.player.animations.add('right', [5, 6, 7, 8], 10, true);

      this.cursors = this.game.input.keyboard.createCursorKeys();

    }


    update() {

      let hitPlatforms = this.game.physics.arcade.collide(this.player, this.platforms);

      this.player.body.velocity.x = 0;
      //can make movement more complex
      if(this.cursors.left.isDown) {
        this.player.body.velocity.x = -150;
        this.player.animations.play('left');
      } else if(this.cursors.right.isDown) {
        this.player.body.velocity.x = 150;
        this.player.animations.play('right');
      }
      else {
        this.player.animations.stop();
        this.player.frame = 4; //fourth frame in spritesheet is standing still
      }

      //can take out the last two conditions in if statement to allow for jumping in midair
      //possible powerup situation
      if(this.cursors.up.isDown && this.player.body.touching.down && hitPlatforms) {
        this.player.body.velocity.y = -350; //the height of the jump
      }
    }
}

export default GameState;
