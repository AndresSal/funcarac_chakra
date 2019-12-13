import ToolButton from "./gameObjects/tools/toolButton.js";

class BootLoader extends Phaser.Scene{
    constructor(){
        super({key:'BootLoader'});
    }

    preload(){
        this.load.image('cajaHtas','./assets/tools_box.png');
        this.load.image('placaHtas','./assets/plaque.png');
        this.load.image('bordeHta','./assets/tool_board.png');
        this.load.image('cuerpoHta','./assets/tool_body.png');
        this.load.image('etiquetaHta','./assets/tool_title.png');
    }

    create(){

        let toolButton = new ToolButton(this,300,300);
        this.add.existing(toolButton);
    }
}

export default BootLoader;