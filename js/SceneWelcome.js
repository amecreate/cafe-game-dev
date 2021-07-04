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
        var clickhere = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY+50, 'click to order', { fontSize: '25px', fontFamily: 'Helvetica', color: '#000000'}).setOrigin(0.5);clickhere.alpha = 0;

        // toggle text
        startButton.on('pointerover', function (pointer) {
            clickhere.alpha = 1;
        }, this);

        startButton.on('pointerout', function (pointer) {
            clickhere.alpha = 0;
        }, this);

        // mouse event click to change scene
        startButton.once('pointerup', function (pointer) {
            // fade out current scene
            this.cameras.main.fadeOut(1000, 255, 255, 255)
        }, this);
        
        // once fadeout event complete
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            // pause for 500 ms
            this.time.delayedCall(500, () => {
            // start the next scene
            this.scene.start('SceneDrink');
            })
        })

    }

}
