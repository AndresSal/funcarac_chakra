import ToolButton from "../gameObjects/tools/toolButton.js";
import ToolsBox from "../gameObjects/tools/toolsBox.js";
import SeedsBox from "../gameObjects/seeds/seedsBox.js";
import Platform from "../gameObjects/chakras/Platform.js";
import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from "../consts/mainuiLib.js";

class ChakraScene extends Phaser.Scene{
    platform;
    group;
    constructor(){
        super({key:'ChakraScene'});
    }
    
    create(){
        let toolsBox = new ToolsBox(this,0,0);
        let seedsBox = new SeedsBox(this,0,0);
        this.platform = new Platform(this,0,0);        
        this.group = this.add.group([toolsBox,this.platform,seedsBox]);

        Phaser.Actions.GridAlign(this.group.getChildren(),{
            width:2,
            height:2,
            cellWidth:363,
            cellHeight:650,
            x:DEFAULT_WIDTH/2-DEFAULT_WIDTH/27,
            y:DEFAULT_HEIGHT/2-DEFAULT_HEIGHT/30
        })
    }

    update(){
        this.platform.selectAChakra();
    }
}
export default ChakraScene;