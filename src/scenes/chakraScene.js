import ToolButton from "../gameObjects/tools/toolButton.js";
import ToolsBox from "../gameObjects/tools/toolsBox.js";
import SeedsBox from "../gameObjects/seeds/seedsBox.js";

class ChakraScene extends Phaser.Scene{
    constructor(){
        super({key:'ChakraScene'});
    }

    create(){
        let toolsBox = new ToolsBox(this,175.5,325);
        let seedsBox = new SeedsBox(this,571,784);
        this.add.existing(seedsBox);
        this.add.existing(toolsBox);
        //this.deployGUI();
    }

    deployGUI(){
        let toolBox = this.add.image(175.5,325,'cajaHtas');
        let seedBox = this.add.image(572,785,'cajaSemillas');
        
    }
}
export default ChakraScene;