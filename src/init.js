import BootLoader from "./bootloader.js";

const config = {
    width:640,
    height:400,
    parent:'contenedor',
    scene:[BootLoader]
}

new Phaser.Game(config);