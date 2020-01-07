import BootLoader from "./bootloader.js";
import ChakraScene from "./scenes/chakraScene.js";
import CaracScene from "./scenes/caracScene.js";

const config = {
    width:1160,
    height:950,
    parent:'contenedor',
    scene:[BootLoader,ChakraScene,CaracScene]
}

new Phaser.Game(config);