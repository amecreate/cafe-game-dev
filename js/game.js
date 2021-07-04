import SceneWelcome from './SceneWelcome.js'
import SceneDrink from './SceneDrink.js'

const config = {
    width:1024,
    height:600,
    backgroundColor: '#FFFFFF',
    // set game to the center of the browser, can be also done in <div> css style in html file
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    // resolution: window.devicePixelRatio,
    type: Phaser.AUTO,
    // link to div id in index.html
    parent: 'phaser-game',
    scene:[ SceneWelcome, SceneDrink ]
};

var game = new Phaser.Game(config);