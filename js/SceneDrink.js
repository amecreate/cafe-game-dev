export default class SceneDrink extends Phaser.Scene {
    // every class needs a constructor
    constructor() {
        super('SceneDrink');
    }

    preload() {
        this.load.image('tea1', 'assets/tea1.jpg');
        this.load.image('tea2', 'assets/tea2.jpg');
    }

    create() {
        const drinkList = ['tea1', 'tea2']
        // fade in current scene over 1500 ms (1.5 s)
        this.cameras.main.fadeIn(1500, 255, 255, 255)
        // randomly select a drink from drinkList
        this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY - 100, Phaser.Math.RND.pick(drinkList));
    }

}

