import SceneWelcome from './SceneWelcome.js'
import SceneDrink from './SceneDrink.js'

const config = {
    width:1024,
    height:600,
    backgroundColor: '#FFFFFF',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    // resolution: window.devicePixelRatio,
    type: Phaser.AUTO,
    parent: 'phaser-game',
    scene:[ SceneWelcome, SceneDrink ]
};

var game = new Phaser.Game(config);