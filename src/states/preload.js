const
    IMAGES_DIR = 'assets/images/';

export default class Preload {
    preload() {
        this.load.image('preloadLogo', 'assets/images/logo.png');

        this.load.onLoadComplete.addOnce(
            () => this.game.state.start('title')
        );
    }

    create() {
        this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'preloadLogo');
    }
}
