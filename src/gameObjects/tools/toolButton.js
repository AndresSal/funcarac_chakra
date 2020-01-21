import { toolsInfo, TOOLS_ATLAS } from "../../consts/chakraLib.js";

class ToolButton extends Phaser.GameObjects.Container{
    board;
    body;
    photo;
    title;
    label;

    toolData;
    
    constructor(scene,x,y,id){
        super(scene,x,y);
        this.toolData = toolsInfo.find((tool)=>{return tool.id===id});

        this.board = scene.add.image(0,0,TOOLS_ATLAS,'tool_board');
        this.body = scene.add.image(0,0,TOOLS_ATLAS,'tool_body');
        
        //TODO cambiar a setOrigin
        this.photo = scene.add.image(0,-30,TOOLS_ATLAS,this.toolData.key);
        
        this.label = scene.add.image(0,0,TOOLS_ATLAS,'tool_title');
        this.title = scene.add.text(this.toolData.position.x,this.toolData.position.y,this.toolData.name,this.toolData.style);
        
        //TODO cambiar al setOrigin
        let titleContainer = scene.add.container(0,45,[this.label,this.title]);
        titleContainer.setSize(this.label.width,this.label.height);
        scene.add.existing(titleContainer);

        this.add([this.board,this.body,this.photo,titleContainer])
        .setSize(this.board.width,this.board.height)
        .setInteractive();
    }
}

export default ToolButton;