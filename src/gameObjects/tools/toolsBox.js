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

    toolsList=[];

    selectedButton;

    constructor(scene,x,y){
        super(scene,x,y);

        this.box = scene.add.image(0,0,'cajaHtas');
        this.plaque = scene.add.image(0,-265,'placaHtas');
        var xposition = 0;
        var yposition = 0;

        this.add([this.box,this.plaque]).setSize(this.box.width,this.box.height);
        this.fertilizerBttn = new ToolButton(scene,-80,-125,1);
        this.waterBttn = new ToolButton(scene,80,-125,2);
        this.shovelBttn = new ToolButton(scene,-80,50,4);
        this.antipestBttn = new ToolButton(scene,80,50,5);
        this.hoeBttn = new ToolButton(scene,-80,225,3);

        this.addButton(this.fertilizerBttn);
        this.addButton(this.waterBttn);
        this.addButton(this.shovelBttn);
        this.addButton(this.antipestBttn);
        this.addButton(this.hoeBttn);

        this.selectButton();
    }

    addButton(toolButton){
        this.scene.add.existing(toolButton);
        this.add(toolButton);
        this.toolsList.push(toolButton);
    }

    selectButton(){
        this.toolsList.forEach((tool)=>{            
            tool.on('pointerdown',()=>{
                this.selectedButton = tool;
                tool.body.setTint(0xae091a);
            });
            tool.on('pointerup',()=>{
                console.log('herramienta escogida: ',this.selectedButton);
                this.toolsList.forEach((t)=>{
                    if(t!=this.selectedButton){
                        t.body.clearTint();
                    }
                })
            });
        });        
    }




}
export default ToolsBox;