import { moduleOptionsInfo, MAIN_UI_ATLAS } from "../../consts/mainuiLib.js";

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

        this.body = scene.add.image(0,0,MAIN_UI_ATLAS,'opt_body');
        this.window = scene.add.image(0,0,MAIN_UI_ATLAS,'opt_window');
        this.icon = scene.add.image(0,0,MAIN_UI_ATLAS,this.data.icon);
        this.label = scene.add.image(0,0,MAIN_UI_ATLAS,'opt_label');
        this.text = scene.add.text(0,0,this.data.title,this.data.style);

        this.buildButton(scene);

    }

    buildButton(scene){
        let windowContainer = scene.add.container(0,0,[this.window,this.icon]);
        windowContainer.setSize(this.window.width,this.window.height);
        this.icon.setOrigin(0.5);


        let titleContent = scene.add.container(0,0,[this.label,this.text]);
        titleContent.setSize(this.label.width, this.label.height);
        this.text.setOrigin(0.5);
       
        let group = scene.add.group([windowContainer,titleContent]);

        Phaser.Actions.GridAlign(group.getChildren(),{
            width:1,
            height:2,
            cellWidth:titleContent.width,
            cellHeight:windowContainer.height+20,
            x:0,
            y:-50
        });

        this.add(this.body).setSize(this.body.width,this.body.height);

        group.getChildren().forEach((el)=>{
            this.add(el);
        })
        this.setInteractive();
        scene.add.existing(this);
    }

    selectButton(){
        this.body.setTint(0xae091a);
        this.text.setColor('#ffffff');
        this.text.setStroke('#ffffff',1);
    }

    deselectButton(){
        this.body.clearTint();
        this.text.setColor('#000000');
        this.text.setStroke('#000000',1);
    }

}

export default ModuleBtn;