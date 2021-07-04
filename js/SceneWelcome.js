export default class SceneWelcome extends Phaser.Scene {
    constructor() {
        super('SceneWelcome');
    }

    preload() {
        this.load.image('welcome', 'assets/welcome.png');
        this.load.image('start', 'assets/make-a-drink.png');
        this.load.bitmapFont('pressstart', 'assets/pressstart.png', 'assets/presstart.fnt')
    }

    create() {
        // sprite can be animated but slower than image
        this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY - 100, 'welcome');
        // setInteractive() allows listening to mouse event
        var startButton = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'start').setInteractive();  

        startButton.once('pointerup', function (pointer) {
            // start the next scene
            this.scene.start('SceneDrink');
        }, this);
    }

}

