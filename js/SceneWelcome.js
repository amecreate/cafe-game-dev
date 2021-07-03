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
        this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY - 100, 'welcome');
        var startButton = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'start').setInteractive();  

        startButton.once('pointerup', function (pointer) {
            this.scene.start('SceneDrink');
        }, this);
    }

}

