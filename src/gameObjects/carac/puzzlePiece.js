import { piecesInfo } from "../../consts/caracLib.js";

class PuzzlePiece extends Phaser.GameObjects.Container{
    type;
    label;
    title;
    textArea;

    value;
    placed;


    constructor(scene,x,y,id,name){
        super(scene,x,y);
        let pieceInfo = piecesInfo.find((item)=>{
            return item.id===id;
        });
        this.value = pieceInfo.value;
        this.placed = false;

        this.type = scene.add.image(0,0,pieceInfo.type);
        this.label = scene.add.graphics();
        this.label.lineStyle(2,0x000000,1).fillStyle(0x1D978E,1);
        this.label.strokeRoundedRect(0,0,114,25,10)
        .fillRoundedRect(0,0,114,25,10);
        this.title = scene.add.text(15,5,name);
        this.textArea=scene.add.container(-56,15);
        this.textArea.add([this.label,this.title]).setSize(this.label.width,this.label.height);
        this.add([this.type,this.textArea]).setSize(this.type.width,this.type.height);
        // this.setScale(pieceInfo.xScale,pieceInfo.yScale);
    }

    setPlaced(){
        this.placed=true;
    }
}

export default PuzzlePiece;