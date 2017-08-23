import {createButton, createText} from '../helper'

export default class GameOver extends Phaser.State {
    create(){
        this.add.sprite(0,0,'sky');
        createText(this, 'High Scores', 800/3, 50, '40px Arial', '#FFF', 'center');
        createButton(this, 'Go Back to Menu', 125, 75,
        200, 50, () => {
            this.state.start('MainMenu');
        });
    }
}