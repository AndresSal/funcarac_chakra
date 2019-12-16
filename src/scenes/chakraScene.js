import ToolButton from "../gameObjects/tools/toolButton.js";
import ToolsBox from "../gameObjects/tools/toolsBox.js";

class ChakraScene extends Phaser.Scene{
    constructor(){
        super({key:'ChakraScene'});
    }

    create(){
        // // let button = new ToolButton(this,200,200);
        // // this.add.existing(button);
        // let toolsBox = new ToolsBox(this,400,400);
        // this.add.existing(toolsBox);
        this.deployGUI();
    }

    deployGUI(){
        let toolBox = this.add.image(175.5,325,'cajaHtas');
    }
}
export default ChakraScene;