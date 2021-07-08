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
        this.load.image('cake1', 'assets/Cake1.png');
    }

    create() {
        const drinkList = ['drink1', 'drink2', 'drink3', 'drink4'];
        // fade in current scene over 1500 ms (1.5 s)
        this.cameras.main.fadeIn(1500, 255, 255, 255)
        // randomly select a drink from drinkList
        var drinkName = Phaser.Math.RND.pick(drinkList);
        this.drink = this.physics.add.image(this.cameras.main.centerX, this.cameras.main.centerY, drinkName);

        // add drink name
        const orderList = {'drink1': 'Dragon Well','drink2': 'White Peony','drink3': 'Red Oolong','drink4': 'Ginger Orchid'};
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY-250, 'Your Order Is: ' + orderList[drinkName], {
            fontSize: '20px', 
            fontFamily: 'Helvetica', 
            color: '#000000'}).setOrigin(0.5);

        // add buttons
        const textConfig = { 
            fontSize: '20px', 
            fontFamily: 'Helvetica', 
            color: '#000000', 
            backgroundColor: '#FEA99F', 
            padding: {left:8,right:8,top:3,bottom:3}};
        this.cakeButton = this.add.text(this.cameras.main.centerX-43, this.cameras.main.centerY-215, 'Cheese Cake Please!', textConfig).setOrigin(0.5).setInteractive();
        this.returnButton = this.add.text(this.cameras.main.centerX+110, this.cameras.main.centerY-215, 'Return', textConfig).setOrigin(0.5).setInteractive();

        
        // toggle text transparency
        this.cakeButton.on('pointerover', pointer => {
            this.cakeButton.alpha = 0.5});
            
        this.cakeButton.on('pointerout', pointer => {
            this.cakeButton.alpha = 1});
        
        this.returnButton.on('pointerover', pointer => {
            this.returnButton.alpha = 0.5});
            
        this.returnButton.on('pointerout', pointer => {
            this.returnButton.alpha = 1});
        
        // return button click event
        this.returnButton.once('pointerup', pointer => {
            this.scene.start('SceneWelcome')});

        // cake button click event
        this.cakeButton.once('pointerup', function (pointer) {
            // change text
            this.cakeButton.destroy();
            this.add.text(this.cameras.main.centerX-43, this.cameras.main.centerY-215, 'Enjoy!', textConfig).setOrigin(0.5);

            // move existing sprite
            this.tweens.add({
                targets: this.drink,
                x: this.cameras.main.centerX - 200,
                duration: 2000,
                ease: 'Power2',
                yoyo: false
            });

            // delay add new sprite
            this.time.delayedCall(2000, () => {
                this.add.sprite(this.cameras.main.centerX+200, this.cameras.main.centerY, "cake1");
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

