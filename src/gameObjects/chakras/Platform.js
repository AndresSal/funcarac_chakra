import Chakra from "./chakra.js";
import { toolsInfo } from "../../consts/chakraLib.js";

class Platform extends Phaser.GameObjects.Container{
    box;
    plaque;
    chakrasList=[];
    chakrasGroup;
    constructor(scene,x,y){
        super(scene,x,y);

        this.box = scene.add.image(0,0,'anden');
        this.plaque = scene.add.image(0,-260,'placaAnden');
        this.add([this.box,this.plaque]).setSize(this.box.width,this.box.height);

        this.addChakrasGrid(scene);
    }

    addChakrasGrid(scene){
        this.chakrasGroup = scene.add.group();
        for (var i=0;i<10;i++){
            var chakra = new Chakra(scene,0,0);
            this.add(chakra);
            this.chakrasGroup.add(chakra);
        }

        Phaser.Actions.GridAlign(this.chakrasGroup.getChildren(),{
            width:5,
            height:2,
            cellWidth:149,
            cellHeight:260,
            x:-294,
            y:-140
        });
    }

    selectAChakra(){
        let info = JSON.parse(localStorage.getItem('selectedTool'));
        let aux = toolsInfo.find((tool)=>{
            return tool.name === 'PALA'
        });
        this.chakrasGroup.getChildren().forEach((chakra)=>{
            chakra.setGrassBehavior();
            if(info.key===aux.key){
                chakra.unblockContent();
            }else{
                chakra.blockContent();
            }
        })
    }
}

export default Platform;