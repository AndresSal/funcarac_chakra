import BootLoader from "./bootloader.js";
import ChakraScene from "./scenes/chakraScene.js";

const config = {
    width:1300,
    height:900,
    parent:'contenedor',
    scene:[BootLoader,ChakraScene]
}

new Phaser.Game(config);