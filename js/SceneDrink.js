export default class SceneDrink extends Phaser.Scene {
    // every class needs a constructor
    constructor() {
        super('SceneDrink');
    }

    preload() {
        this.load.image('drink1', 'assets/Drink1.png');
        this.load.image('drink2', 'assets/Drink2.png');
        this.load.image('drink3', 'assets/Drink3.png');
        this.load.image('drink4', 'assets/Drink4.png');
    }

    create() {
        const drinkList = ['drink1', 'drink2', 'drink3', 'drink4'];
        // fade in current scene over 1500 ms (1.5 s)
        this.cameras.main.fadeIn(1500, 255, 255, 255)
        // randomly select a drink from drinkList
        this.drink = this.physics.add.image(this.cameras.main.centerX, this.cameras.main.centerY, Phaser.Math.RND.pick(drinkList));

        const cakeButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY-200, 'Cheese Cake Please!', { 
            fontSize: '20px', 
            fontFamily: 'Helvetica', 
            color: '#000000', 
            backgroundColor: '#FEA99F', 
            padding: {left:3,right:3,top:3,bottom:3}})
            .setOrigin(0.5).setInteractive();
        
        // toggle text transparency
        cakeButton.on('pointerover', pointer => {
            cakeButton.alpha = 0.5
        });

        cakeButton.on('pointerout', pointer => {
            cakeButton.alpha = 1
        });
        
        cakeButton.once('pointerup', function (pointer) {
            cakeButton.destroy();

            this.tweens.add({
                targets: this.drink,
                x: this.cameras.main.centerX - 300,
                duration: 2000,
                ease: 'Power2',
                yoyo: false
            });

/*             this.moveDrink = this.physics.moveTo(this.drink, this.cameras.main.centerX-100, this.cameras.main.centerY, 200); */
        },this);
    }

    update () {
/*         if (this.drink.x <= this.cameras.main.centerX-300) {
            this.moveDrink.stop();
        }; */
    }

}

