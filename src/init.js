import BootLoader from "./bootloader.js";
import ChakraScene from "./scenes/chakraScene.js";
import CaracScene from "./scenes/caracScene.js";
import MainUIScene from "./scenes/mainUIScene.js";
import LibraryScene from "./scenes/libraryScene.js";
import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from "./consts/mainuiLib.js";
import TaleScene from "./scenes/taleScene.js";



const config = {
    scale:{
        mode:Phaser.Scale.FIT,
        parent:'contenedor',
        autocenter:Phaser.Scale.CENTER_BOTH,
        width:DEFAULT_WIDTH,
        height:DEFAULT_HEIGHT,
        // width:window.innerWidth,
        // height:window.innerHeight

    },

    scene:[BootLoader,MainUIScene,CaracScene,ChakraScene,LibraryScene,TaleScene]
}

new Phaser.Game(config);