import { talesTitleConfig } from "../../../consts/talesLib.js";

export default class TextLabel extends Phaser.GameObjects.Container{
    label;
    text;
    constructor(scene,x,y,textFragment){
        super(scene,x,y);

        let config = talesTitleConfig.find((el)=>{
            return el.id===4;
        })

        // this.text = scene.add.text(0,0,textFragment,config.style);

        this.text = scene.make.text({
            x:0,
            y:0,
            padding:{
                left:30,
                right:20,
                top:20,
                bottom:40
            },
            text:textFragment,
            style:{
                fontFamily:'Helvetica',
                fontSize:'20px',
                color:'#000',
                align:'justify'
            }
        })
        this.label = scene.add.image(0,0,'etiquetaParrafo');
        this.text.setOrigin(0.5);
        this.add([this.label,this.text]).setSize(this.label.width,this.label.height);
        scene.add.existing(this);
    }
}