import BootLoader from "./bootloader.js";
import ChakraScene from "./scenes/chakraScene.js";

const config = {
    width:1160,
    height:950,
    parent:'contenedor',
    scene:[BootLoader,ChakraScene]
}

new Phaser.Game(config);