import GameState from './GameState';
import {createButton, createText} from '../helper';

export default class HighScores extends Phaser.State {
    create(game){
        game.add.sprite(0,0,'sky');

        createText(game, 'High Scores', 800/3, 50, '40px Arial', '#FFF', 'center');

        createButton(game, 'Go Back to Menu', 125, 75,
        200, 50, () => {
            this.state.start('MainMenu');
        });

        let highScore = 'Name';
        createText(game, highScore, 200, 150, '20px Arial', '#FFF', 'center');

        highScore = 'Score';
        createText(game, highScore, 500, 150, '20px Arial', '#FFF', 'center');
    }  
}