export default class SceneWelcome extends Phaser.Scene {
    constructor() {
        super('SceneWelcome');
    }

    preload() {
        this.load.image('store1', 'assets/Store1.png');
        this.load.image('store2', 'assets/Store2.png');
        this.load.audio("ding", ["assets/Chime.mp3"]);
        this.load.audio("water", ["assets/Water.mp3"]);

        // add loading graphics
        var progressBox = this.add.graphics();
        var progressBar = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(this.cameras.main.centerX-150, this.cameras.main.centerY,320,50);
        var loadingText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY-100,'Loading...', { fontSize: '25px', fontFamily: 'Helvetica', color: '#000000'}).setOrigin(0.5);

        // loading in progress
        this.load.on('progress', value => {
            console.log(value);
            progressBar.clear();
            progressBar.fillStyle(0xCCCCCC, 1);
            progressBar.fillRect(this.cameras.main.centerX+10-150, this.cameras.main.centerY+10, 300 * value, 30)
        });

        // loading complete
        this.load.on('complete', () =>{
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
        });

    }

    create() {
        // music
        const soundList = ["ding","water"];

        // sprite can be animated but slower than image
        // setInteractive() allows listening to mouse event
        const storeList = ["store1", "store2"];
        var startButton = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, Phaser.Math.RND.pick(storeList)).setInteractive();
        var clickhere = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY-200, 'Click To Order', { fontSize: '25px', fontFamily: 'Helvetica', color: '#000000'}).setOrigin(0.5);clickhere.alpha = 0;

        // toggle text
        startButton.on('pointerover', function (pointer) {
            clickhere.alpha = 1;
        }, this);

        startButton.on('pointerout', function (pointer) {
            clickhere.alpha = 0;
        }, this);

        // mouse event click to change scene
        startButton.once('pointerup', function (pointer) {
            
            // play music
            const marker = {name: "short", start:1, duration: 2};
            this.sound.play(Phaser.Math.RND.pick(soundList), marker);

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
