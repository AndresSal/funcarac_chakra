import ToolButton from "../gameObjects/tools/toolButton.js";
import ToolsBox from "../gameObjects/tools/toolsBox.js";
import SeedsBox from "../gameObjects/seeds/seedsBox.js";
import Platform from "../gameObjects/chakras/Platform.js";

class ChakraScene extends Phaser.Scene{
    platform;
    group;
    constructor(){
        super({key:'ChakraScene'});
    }

    init(){
        this.input.setDefaultCursor('url(assets/cursores/manita.cur),pointer');
        localStorage.setItem('currentCursor','url(assets/cursores/manita.cur),pointer');
    }

    create(){
        let toolsBox = new ToolsBox(this,0,0);
        let seedsBox = new SeedsBox(this,0,0);
        this.platform = new Platform(this,0,0);
        this.add.existing(seedsBox);
        this.add.existing(toolsBox);
        this.add.existing(this.platform);
        
        this.group = this.add.group([toolsBox,this.platform,seedsBox]);

        Phaser.Actions.GridAlign(this.group.getChildren(),{
            width:2,
            height:2,
            cellWidth:363,
            cellHeight:650,
            x:1384,
            y:560
        })
    }

    update(){
        this.platform.selectAChakra();
    }
}
export default ChakraScene;