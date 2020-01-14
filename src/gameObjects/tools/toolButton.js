import { toolsInfo } from "../../consts/chakraLib.js";

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

        this.board = scene.add.image(0,0,'bordeHta');
        this.body = scene.add.image(0,0,'cuerpoHta');
        
        this.photo = scene.add.image(0,-30,this.toolData.key);
        
        this.label = scene.add.image(0,0,'etiquetaHta');
        this.title = scene.add.text(this.toolData.position.x,this.toolData.position.y,this.toolData.name,this.toolData.style);
        let titleContainer = scene.add.container(0,45,[this.label,this.title]);
        titleContainer.setSize(this.label.width,this.label.height);
        scene.add.existing(titleContainer);

        this.add([this.board,this.body,this.photo,titleContainer])
        .setSize(this.board.width,this.board.height)
        .setInteractive();
    }
}

export default ToolButton;