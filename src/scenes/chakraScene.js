import ToolButton from "../gameObjects/tools/toolButton.js";
import ToolsBox from "../gameObjects/tools/toolsBox.js";
import SeedsBox from "../gameObjects/seeds/seedsBox.js";
import Platform from "../gameObjects/chakras/Platform.js";

class ChakraScene extends Phaser.Scene{
    platform;
    constructor(){
        super({key:'ChakraScene'});
    }

    init(){
        this.input.setDefaultCursor('url(assets/cursores/manita.cur),pointer');
        localStorage.setItem('currentCursor','url(assets/cursores/manita.cur),pointer');
    }

    create(){
        let toolsBox = new ToolsBox(this,187,335);
        let seedsBox = new SeedsBox(this,581,804);
        this.platform = new Platform(this,761,335);
        this.add.existing(seedsBox);
        this.add.existing(toolsBox);
        this.add.existing(this.platform);   
    }

    update(){
        this.platform.selectAChakra();
    }
}
export default ChakraScene;