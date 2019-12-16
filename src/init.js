import BootLoader from "./bootloader.js";
import ChakraScene from "./scenes/chakraScene.js";

const config = {
    width:1143,
    height:921,
    parent:'contenedor',
    scene:[BootLoader,ChakraScene]
}

new Phaser.Game(config);