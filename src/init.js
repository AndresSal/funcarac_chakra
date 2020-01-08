import BootLoader from "./bootloader.js";
import ChakraScene from "./scenes/chakraScene.js";
import CaracScene from "./scenes/caracScene.js";
import MainUIScene from "./scenes/mainUIScene.js";

const config = {
    // width:1160,
    // height:950,
    width:2400,
    height:1200,
    parent:'contenedor',
    scene:[BootLoader,MainUIScene,CaracScene,ChakraScene]
}

new Phaser.Game(config);