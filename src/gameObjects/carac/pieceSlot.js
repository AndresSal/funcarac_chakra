import { slotsInfo } from "../../consts/caracLib.js";

class PieceSlot extends Phaser.GameObjects.Container{
    body;
    background;
    slotData;
    constructor(scene,x,y,id){
        super(scene,x,y);
        this.slotData=slotsInfo.find((item)=>{
            return item.id===id;
        });
        this.body = scene.add.image(0,0,'ranura');
        this.background = scene.add.image(0,0,this.slotData.background);
        this.background.setScale(0.88);
        this.add([this.body,this.background]).setSize(this.body.width,this.body.height).setInteractive({dropZone:true});
        this.setScale(this.slotData.xScale,this.slotData.yScale);
    }
}
export default PieceSlot;