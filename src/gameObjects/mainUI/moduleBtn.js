import { moduleOptionsInfo } from "../../consts/mainuiLib.js";

class ModuleBtn extends Phaser.GameObjects.Container{
    body;
    label;
    window;
    icon;
    text;

    data;
    constructor(scene,x,y,id){
        super(scene,x,y);

        this.data = moduleOptionsInfo.find((option)=>{
            return option.id === id;
        })

        this.body = scene.add.image(0,0,'cuerpoOpcion');
        this.window = scene.add.image(0,-55,'ventanaOpcion');
        this.icon = scene.add.image(0,-60,this.data.icon);
        this.label = scene.add.image(0,140,'etiquetaOpcion');
        this.text = scene.add.text(-50,125,this.data.title);
       
        this.add([this.body,this.window,this.icon,this.label,this.text]).setSize(this.body.width,this.body.height).setInteractive();
        scene.add.existing(this);
    }
}

export default ModuleBtn;