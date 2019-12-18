import { toolsInfo } from "../../consts/chakraLib.js";

class ToolButton extends Phaser.GameObjects.Container{
    board;
    body;
    photo;
    title;
    label;
    
    constructor(scene,x,y,id){
        super(scene,x,y);

        this.board = scene.add.image(0,0,'bordeHta');
        this.body = scene.add.image(0,0,'cuerpoHta');
        let tool = toolsInfo.find((tool)=>{return tool.id===id});
        this.photo = scene.add.image(0,-25,tool.key);
        this.title = scene.add.text(-25,45,tool.name);
        this.label = scene.add.image(0,50,'etiquetaHta');

        this.add([this.board,this.body,this.photo,this.label,this.title])
        .setSize(this.board.width,this.board.height)
        .setInteractive();
    }
}

export default ToolButton;