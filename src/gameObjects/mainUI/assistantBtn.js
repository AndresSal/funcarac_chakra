import { assistantButtonsInfo } from "../../consts/mainuiLib.js";

class AssistantBtn extends Phaser.GameObjects.Container{
    icon;
    label;
    text;
    group;

    data;
    constructor(scene,x,y,id){
        super(scene,x,y);

        this.data = assistantButtonsInfo.find((item)=>{
            return item.id === id;
        });
        console.log(this.data);

        this.group = scene.add.group();
        this.icon = scene.add.image(0,0,this.data.icon);
        if(this.data.title==='ADELANTE'){
            this.icon.angle=180;
        };
        this.label = scene.add.image(0,0,'etiquetaBoton');
        this.text = scene.add.text(-20,-5,this.data.title);
        let titleContainer = scene.add.container();
        titleContainer.add([this.label,this.text]).setSize(this.label.width,this.label.height);
        this.group.add(this.icon);
        this.group.add(titleContainer);
        Phaser.Actions.GridAlign(this.group.getChildren(),{
            width:1,
            height:2,
            cellWidth:100,
            cellHeight:85,
            x:0,
            y:0
        });
        this.group.getChildren().forEach((el)=>{
            this.add(el);
        })
        this.setSize(this.label.width,this.icon.height+this.label.height);
        scene.add.existing(this);
    }
}

export default AssistantBtn;