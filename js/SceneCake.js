export default class SceneCake extends Phaser.Scene {
    constructor() {
        super('SceneCake');
    }

    preload() {
        this.load.image('cake1', 'assets/cake1.jpg');
    }

    create() {
        this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY - 100, 'cake1');
    }

}

