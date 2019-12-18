import ToolButton from "../gameObjects/tools/toolButton.js";
import ToolsBox from "../gameObjects/tools/toolsBox.js";
import SeedsBox from "../gameObjects/seeds/seedsBox.js";
import Platform from "../gameObjects/chakras/Platform.js";

class ChakraScene extends Phaser.Scene{
    constructor(){
        super({key:'ChakraScene'});
    }

    create(){
        let toolsBox = new ToolsBox(this,187,335);
        let seedsBox = new SeedsBox(this,581,804);
        let platform = new Platform(this,761,335);
        this.add.existing(seedsBox);
        this.add.existing(toolsBox);
        this.add.existing(platform);

        this.input.setDefaultCursor('url(assets/cursores/manita.cur),pointer');
        //this.deployGUI();
    }

    deployGUI(){
        let toolBox = this.add.image(175.5,325,'cajaHtas');
        let seedBox = this.add.image(572,785,'cajaSemillas');
        
    }
}
export default ChakraScene;