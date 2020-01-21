import ToolButton from "./toolButton.js";
import { TOOLS_ATLAS } from "../../consts/chakraLib.js";

class ToolsBox extends Phaser.GameObjects.Container{
    box;
    plaque;
    title;
    toolsGroup;

    selectedButton;

    constructor(scene,x,y){
        super(scene,x,y);

        this.box = scene.add.image(0,0,TOOLS_ATLAS,'tools_box');
        this.plaque = scene.add.image(0,0,TOOLS_ATLAS,'plaque');
        let title = scene.add.text(-this.plaque.width/2+this.plaque.width/40,-this.plaque.height/10,'CAJA DE HERRAMIENTAS',
            {fontFamily:'Helvetica',
             fontSize:'24px',
             color:'#000',
             stroke:'#000',
             strokeThickness:1,
             align:'center'});

        let titleContent = scene.add.container(0,-this.box.height/3-this.box.height/14,[this.plaque,title]);
        titleContent.setSize(this.plaque.width,this.plaque.height);
        this.add([this.box,titleContent]).setSize(this.box.width,this.box.height);
        scene.add.existing(this);
        this.addToolsGrid(scene);
        this.selectButton(scene);
    }

    addToolsGrid(scene){
        this.toolsGroup = scene.add.group();
        for(var i=1;i<7;i++){
            var toolBtn = new ToolButton(scene,0,0,i);
            this.scene.add.existing(toolBtn);
            this.add(toolBtn);
            this.toolsGroup.add(toolBtn);
        }

        Phaser.Actions.GridAlign(this.toolsGroup.getChildren(),{
            width:2,
            height:3,
            cellWidth:156,
            cellHeight:177,
            x:-75,
            y:-127
        })
    }

    selectButton(scene){
        this.toolsGroup.getChildren().forEach((option)=>{            
            option.on('pointerdown',()=>{
                this.selectedButton = option;
                let toolInfo = this.selectedButton.toolData;
                localStorage.setItem('selectedTool',JSON.stringify(toolInfo));
                scene.input.setDefaultCursor(toolInfo.cur);
                option.body.setTint(0xae091a);
            });
            option.on('pointerup',()=>{
                this.toolsGroup.getChildren().forEach((t)=>{
                    if(t!=this.selectedButton){
                        t.body.clearTint();
                    }
                })
            });
        });        
    }
}
export default ToolsBox;