export default class SceneDrink extends Phaser.Scene {
    // every class needs a constructor
    constructor() {
        super('SceneDrink');
    }

    preload() {
        this.load.image('drink1', 'assets/Drink1.png');
        this.load.image('drink2', 'assets/Drink2.png');
    }

    create() {
        const drinkList = ['drink1', 'drink2']
        // fade in current scene over 1500 ms (1.5 s)
        this.cameras.main.fadeIn(1500, 255, 255, 255)
        // randomly select a drink from drinkList
        this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, Phaser.Math.RND.pick(drinkList));
    }

}

