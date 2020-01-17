import BasePage from "./base-page/basePage.js";
import { piecesInfo } from "../../../consts/caracLib.js";

export default class PiecesPage extends BasePage{
    constructor(scene,x,y){
        super(scene,x,y,'PIEZAS\nCONSEGUIDAS');
        this.buildPage(scene);
        this.nextPage();
        this.prevPage();

        
        this.buildTheContent(scene);



    }

    createPieceContent(scene, pieceId,x,y){
        let pieceInfo = piecesInfo.find((p)=>{
            return p.id === pieceId;
        });
        
        let label = scene.add.image(0,0,'etiquetaGrande');
        let text = scene.add.text(-100,-20,`SABER TRADICIONAL\n ${pieceInfo.name}`,
        {fontFamily:'Helvetica',
         fontSize:'20px',
         color:'#000',
         align:'center'});
         let textContainer = scene.add.container(0,0,[label,text]);
         textContainer.setSize(label.width,label.height);


         let box = scene.add.image(0,0,'caja_para_piezas');
         let pieceFigure =scene.add.image(0,0,pieceInfo.type);
         pieceFigure.setScale(0.8);
         let pieceContainer = scene.add.container(0,0,[box,pieceFigure]);
         pieceContainer.setSize(box.width,box.height);

         let elementsGroup = scene.add.group();
         elementsGroup.add(textContainer);
         elementsGroup.add(pieceContainer);

         Phaser.Actions.GridAlign(elementsGroup.getChildren(),{
             width:2,
             height:1,
             cellWidth:textContainer.width + 20,
             cellHeight:textContainer.height,
             x:x,
             y:y
         })

         let contentContainer = scene.add.container(0,0,elementsGroup.getChildren());
         contentContainer.setSize(textContainer.width+pieceContainer.width,pieceContainer.height);

         return contentContainer;
         
        //  elementsGroup.getChildren().forEach((el) => {
        //      this.add(el);
        //  });
    }

    buildTheContent(scene){
        this.contentGroup = scene.add.group();
        for (let i=1;i<4;i++){
            let row = this.createPieceContent(scene,i,0,0);
            this.contentGroup.add(row);
        }

        Phaser.Actions.GridAlign(this.contentGroup.getChildren(),{
            width:1,
            height:3,
            cellWidth:100,
            cellHeight:150,
            x:-270,
            y:-100
        })

        this.addGroupContent(scene);
    }

}