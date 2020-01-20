import { talesTitleConfig } from "../../../consts/talesLib.js";

export default class MainTitle extends Phaser.GameObjects.Container{
    label;
    titleText;
    info;

    constructor(scene,x,y,title,typeID){
        super(scene,x,y);
        this.titleText = title;        
        this.info = talesTitleConfig.find((obj)=>{
            return obj.id === typeID;
        })

        this.displayContent(scene);


    }

    displayContent(scene){
        this.label = scene.add.image(0,0,'tituloPortada');
        let title = scene.add.text(this.info.x,this.info.y,this.titleText,this.info.style);
        this.add([this.label,title]).setSize(this.label.width,this.label.height);                                    
        scene.add.existing(this);
    }
}