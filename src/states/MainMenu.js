import GameState from './GameState';
import {createButton, createText} from '../helper';

export default class MainMenu extends Phaser.State {
  create() {
    this.add.sprite(0,0,'sky');
    
    createText(this, 'Hi, I am a title', 800/3, 100, '40px Arial', '#FFF', 'center');

    // title.anchor.setTo(0.25, 0.5);
    createButton(this, 'Play Game', this.world.centerX, this.world.centerY - 50,
                200, 50, () => {
                    console.log('GameState');
                    this.state.start('GameState')
                });
    
    createButton(this, 'About', this.world.centerX, this.world.centerY + 50,
                200, 50, () => {
                    console.log('about');
                    this.state.start('InfoModal');
                });
    createButton(this, 'High Scores', this.world.centerX, this.world.centerY + 150,
                200, 50, () => {
                    console.log('High Scores');
                    this.state.start('HighScores');
                });    
  }
}

