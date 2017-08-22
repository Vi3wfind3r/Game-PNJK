import GameState from 'states/GameState';
import Preload from 'states/Preload';
import MainMenu from 'states/MainMenu';
import InfoModal from 'states/InfoModal';
import HighScores from 'states/HighScores';

class Game extends Phaser.Game {

	constructor() {
		super(800, 600, Phaser.AUTO, 'content', null);
    
    this.state.add('GameState', GameState, false);
    this.state.add('Preload', Preload, false);
    this.state.add('MainMenu', MainMenu, false);
    this.state.add('InfoModal', InfoModal, false);
    this.state.add('HighScores', HighScores, false);

		this.state.start('Preload');
	}

}

new Game();
