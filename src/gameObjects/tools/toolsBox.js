import ToolButton from "./toolButton.js";

class ToolsBox extends Phaser.GameObjects.Container{
    box;
    plaque;
    title;
    
    constructor(scene,x,y){
        super(scene,x,y);

        this.box = scene.add.image(0,0,'cajaHtas');
        this.plaque = scene.add.image(0,-250,'placaHtas');
        var xposition = 0;
        var yposition = 0;

        this.add([this.box,this.plaque]).setSize(this.box.width,this.box.height);
        for(var i=0;i<5;i++){
            var button = new ToolButton(scene,xposition,yposition);
            scene.add.existing(button);
            console.log('boton: ',i);
            this.add(button);
        }
    }


}
export default ToolsBox;