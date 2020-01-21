import Chakra from "./chakra.js";
import { toolsInfo, ANDEN_ATLAS } from "../../consts/chakraLib.js";

class Platform extends Phaser.GameObjects.Container{
    box;
    plaque;
    chakrasList=[];
    chakrasGroup;
    constructor(scene,x,y){
        super(scene,x,y);

        this.box = scene.add.image(0,0,'anden');
        this.plaque = scene.add.image(0,0,'placaAnden');
        
        //TODO MIGRAR EL ESTILO A ARCHIVO JSON
        let title = scene.add.text(-this.plaque.width/4-this.plaque.width/30,-this.plaque.height/5,'ANDÉN TRADICIONAL',
        {fontFamily:'Helvetica',
        fontSize:'40px',
        color:'#000',
        stroke:'#000',
        strokeThickness:1,
        align:'center'});
        let container = scene.add.container(0,-this.box.height/3-this.box.height/14,[this.plaque,title]);
        container.setSize(this.plaque.width,this.plaque.height);

        this.add([this.box,container]).setSize(this.box.width,this.box.height);
        scene.add.existing(this);

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
            return tool.name === 'TIJERAS'
        });
        this.chakrasGroup.getChildren().forEach((chakra)=>{
            chakra.setGrassBehavior();
            //chakra.checkStatus();
            if(info.key===aux.key){
                chakra.unblockContent();
            }else{
                chakra.blockContent();
            }
        })
    }
}

export default Platform;