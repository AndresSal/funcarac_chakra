import ToolButton from "./toolButton.js";

class ToolsBox extends Phaser.GameObjects.Container{
    box;
    plaque;
    title;
    toolsGroup;

    selectedButton;

    constructor(scene,x,y){
        super(scene,x,y);

        this.box = scene.add.image(0,0,'cajaHtas');
        this.plaque = scene.add.image(0,-265,'placaHtas');
        this.add([this.box,this.plaque]).setSize(this.box.width,this.box.height);
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