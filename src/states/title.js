var startbtn;
var startbg;

export default class Title {

	preload() {

	    this.game.load.spritesheet('button', 'assets/images/btn_start.png', 177, 51);
	    this.load.image('preloadLogo', 'assets/images/logo.png');

	}

	create() {
	    this.game.stage.backgroundColor = '#000';
	    this.game.add.sprite(this.game.world.centerX - 222, 100, 'preloadLogo');
	    startbtn = this.game.add.button(this.game.world.centerX - 88, this.game.height -200, 'button', actionOnClick, this, 2, 1, 1);
	    startbtn.onInputOver.add(over, this);
	    startbtn.onInputOut.add(out, this);
	    startbtn.onInputUp.add(up, this);

		function actionOnClick() {
			this.game.state.start('battle')
		}

		function up() {
    		console.log('button up', arguments);
		}

		function over() {
		    console.log('button over');
		}

		function out() {
		    console.log('button out');
		}
	}

}