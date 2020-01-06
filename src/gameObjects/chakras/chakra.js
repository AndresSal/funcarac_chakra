import ChakraPanel from "../chakra_panel/chakraPanel.js";
import { toolsInfo } from "../../consts/chakraLib.js";

class Chakra extends Phaser.GameObjects.Container{
    board;
    field;
    chakraPanel;
    blocked;
    grassList=[];

    constructor(scene,x,y){
        super(scene,x,y);
        this.blocked = true;

        this.board = scene.add.image(0,0,'bordeChakra');
        this.field = scene.add.image(0,0,'chakraNatural');

        this.add([this.board,this.field]);

        this.chakraPanel = new ChakraPanel(scene,0,125);
        scene.add.existing(this.chakraPanel);
        this.add(this.chakraPanel);
        this.setSize(this.board.width,this.board.height+this.chakraPanel.box.width);
        this.setGrass(scene);
    }

    setGrass(scene){
        let minX = -35;
        let maxX = 30;
        let minY = -90;
        let maxY = 55;
        for(var i=0;i<16;i++){
            // let xPosition = Math.floor(Math.random()* (maxX-minX))+minX;
            // let yPosition = Math.floor(Math.random()* (maxY-minY))+minY;
            // let grass = scene.add.image(xPosition,yPosition,'maleza');
            let grass = scene.add.image(0,0,'maleza');
            grass.setInteractive();
            this.add(grass);
            this.grassList.push(grass);
        }

        Phaser.Actions.GridAlign(this.grassList,{
            width:4,
            height:4,
            cellWidth:22,
            cellHeight:45,
            x:-55,
            y:-90
        })
    }

    unblockContent(){
        this.blocked = false;
    }

    blockContent(){
        this.blocked = true;
    }


    setGrassBehavior(){
        this.grassList.forEach((g)=>{
            if(this.blocked===false){
                g.on('pointerdown',()=>{
                    g.setTint(0x000000);
                });
                g.on('pointerup',()=>{
                    this.remove(g);
                    var index = this.grassList.indexOf(g);
                    if(index>-1){
                        this.grassList.splice(index,1);
                    }
                });
            }else{
                g.off('pointerdown');
                g.off('pointerup');
            }
        })
    }

    checkStatus(){
       if(this.grassList.length===0){
           console.log('Mi chakra esta limpia');
       }
    }
}

export default Chakra;