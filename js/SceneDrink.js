export default class SceneDrink extends Phaser.Scene {
    constructor() {
        super('SceneDrink');
    }

    preload() {
        this.load.image('tea1', 'assets/tea1.jpg');
        this.load.image('tea2', 'assets/tea2.jpg');
    }

    create() {
        const drinkList = ['tea1', 'tea2']
        this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY - 100, Phaser.Math.RND.pick(drinkList));
    }

}

