import ToolButton from "./toolButton.js";

class ToolsBox extends Phaser.GameObjects.Container{
    box;
    plaque;
    title;
    
    fertilizerBttn;
    waterBttn;
    shovelBttn;
    antipestBttn;
    hoeBttn;

    constructor(scene,x,y){
        super(scene,x,y);

        this.box = scene.add.image(0,0,'cajaHtas');
        this.plaque = scene.add.image(0,-265,'placaHtas');
        var xposition = 0;
        var yposition = 0;

        this.add([this.box,this.plaque]).setSize(this.box.width,this.box.height);
        this.fertilizerBttn = new ToolButton(scene,-80,-125);
        this.waterBttn = new ToolButton(scene,80,-125);
        this.shovelBttn = new ToolButton(scene,-80,50);
        this.antipestBttn = new ToolButton(scene,80,50);
        this.hoeBttn = new ToolButton(scene,-80,225);

        this.addButton(this.fertilizerBttn);
        this.addButton(this.waterBttn);
        this.addButton(this.shovelBttn);
        this.addButton(this.antipestBttn);
        this.addButton(this.hoeBttn);
    }

    addButton(toolButton){
        this.scene.add.existing(toolButton);
        this.add(toolButton);
    }


}
export default ToolsBox;