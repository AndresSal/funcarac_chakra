import { talesTitleConfig } from "../../../consts/talesLib.js";

export default class TextLabel extends Phaser.GameObjects.Container{
    label;
    text;
    constructor(scene,x,y,textFragment){
        super(scene,x,y);

        let config = talesTitleConfig.find((el)=>{
            return el.id===4;
        })

        this.text = scene.add.text(config.x,config.y,textFragment,config.style);
        this.label = scene.add.image(0,0,'etiquetaParrafo');
        this.add([this.label,this.text]).setSize(this.label.width,this.label.height);
        scene.add.existing(this);
    }
}