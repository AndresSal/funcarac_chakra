import { moduleOptionsInfo } from "../../consts/mainuiLib.js";

class ModuleBtn extends Phaser.GameObjects.Container{
    body;
    label;
    window;
    icon;
    text;

    titleContent;

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
        this.text = scene.add.text(-55,125,this.data.title,
                                   {
                                    fontFamily:'Helvetica',
                                    fontSize: '16px',
                                    color:'#000',
                                    stroke:'#000',
                                    strokeThickness:1,
                                    align:'center'
                                });
        // this.titleContent = scene.add.container(0,0,[this.label,this.text]);
        // this.titleContent.setSize(this.label.width, this.label.height);
       
        this.add([this.body,this.window,this.icon,this.label,this.text]).setSize(this.body.width,this.body.height).setInteractive();
        scene.add.existing(this);
    }

    selectButton(){
        this.text.setColor('#ffffff');
        this.text.setStroke('#ffffff',1);
    }

    deselectButton(){
        this.text.setColor('#000000');
        this.text.setStroke('#000000',1);
    }

}

export default ModuleBtn;