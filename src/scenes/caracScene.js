import PuzzlePiece from "../gameObjects/carac/puzzlePiece.js";
import PieceSlot from "../gameObjects/carac/pieceSlot.js";
import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from "../consts/mainuiLib.js";
import { STEP_VALUE, valuesInfo, ROTATION_VALUE } from "../consts/caracLib.js";

const YTOP = 0;
const YPRIME = 0;
const YDOWN = 0;

class CaracScene extends Phaser.Scene{
    piecesList=[];
    piecesGroup;
    gameContainer;
    constructor(){
        super({key:'CaracScene'});
    }

    create(){
        this.addContent();
        this.addSlotsRing(1);
        this.addSlotsRing(2);
        this.addSlotsRing(3);
        this.addSlotsRing(4);

        this.addPieces();
        this.setPiecesBehavior();
        this.addAnimation(1);
    }

    addContent(){
        let boxesGroup = this.add.group();
        let piecesContent = this.add.container(0,0);
        let piecesBox = this.add.image(0,0,'cajaPiezas');
        
        
        let piecesPlaque = this.add.image(0,0,'placaPiezas');
        let pbTitle = this.add.text(-piecesPlaque.width/3-piecesPlaque.width/15,-piecesPlaque.height/4+piecesPlaque.height/8,'PIEZAS DE ROMPECABEZAS\nDISPONIBLES',
                                    {fontFamily:'Helvetica',
                                     fontSize: '18px',
                                     color:'#000',
                                     align:'center'
                                    });
        let pbTextContent = this.add.container(0,-345,[piecesPlaque,pbTitle]);
        pbTextContent.setSize(piecesPlaque.width,piecesPlaque.height);

        piecesContent.add([piecesBox,pbTextContent]).setSize(piecesBox.width,piecesBox.height);

        let boardContent = this.add.container(0,0);
        let boardBox = this.add.image(0,0,'cajaTablero');
        

        let boardPlaque = this.add.image(0,0,'placaTablero');
        let bbTitle = this.add.text(-boardPlaque.width/2+boardPlaque.width/60,-boardPlaque.height/2+boardPlaque.height/3,'TABLERO PRINCIPAL DEL CALENDARIO AGROFESTIVO',
                                    {fontFamily:'Helvetica',
                                     fontSize: '22px',
                                     color:'#000',
                                     align:'center'
                                    });

        let bbTextContent = this.add.container(0,-345,[boardPlaque,bbTitle]);
        bbTextContent.setSize(boardPlaque.width, boardPlaque.height);                            

        boardContent.add([boardBox,bbTextContent]).setSize(boardBox.width,boardBox.height);

        boxesGroup.add(piecesContent);
        boxesGroup.add(boardContent);

        Phaser.Actions.GridAlign(boxesGroup.getChildren(),{
            width:2,
            height:1,
            cellWidth:390,
            x:DEFAULT_WIDTH/2-50,
            y:450
        });

        this.gameContainer = this.add.container(DEFAULT_WIDTH/2+DEFAULT_WIDTH/4+DEFAULT_WIDTH/40,DEFAULT_HEIGHT/2+DEFAULT_HEIGHT/8);
        this.gameContainer.setSize(10,10);

        console.log(this.gameContainer.p)
    }

    addSlotsRing(id){
        let slotsGroup=this.add.group();
        let radius;
        for (let i=0;i<12;i++){
            let slot = new PieceSlot(this,0,0,id);
            this.add.existing(slot);
            radius = slot.slotData.radius;
            slotsGroup.add(slot);
        }
        Phaser.Actions.SetRotation(slotsGroup.getChildren(),ROTATION_VALUE,STEP_VALUE);
        // let ringShape = new Phaser.Geom.Circle(DEFAULT_WIDTH/2+DEFAULT_WIDTH/6+DEFAULT_WIDTH/9-10,DEFAULT_HEIGHT/2+DEFAULT_HEIGHT/8,radius);
        let ringShape = new Phaser.Geom.Circle(0,0,radius);
        Phaser.Actions.PlaceOnCircle(slotsGroup.getChildren(),ringShape);

        slotsGroup.getChildren().forEach((el)=>{
            this.gameContainer.add(el);
        });
    }

    addPieces(){
        this.piecesGroup = this.add.group();
        for(let i=1;i<=4;i++){
            let piece = new PuzzlePiece(this,   -DEFAULT_WIDTH/3+DEFAULT_WIDTH/35,-DEFAULT_HEIGHT/2,i,'TITULO');
            this.piecesGroup.add(piece);
            this.piecesList.push(piece);
        }

        // Phaser.Actions.GridAlign(this.piecesGroup.getChildren(),{
        //     width:1,
        //     height:4,
        //     cellWidth:100,
        //     cellHeight:120,
        //     x:-610,
        //     y:-150
        // });

        this.piecesGroup.getChildren().forEach((el)=>{
            this.gameContainer.add(el);
        })
    }

    setPiecesBehavior(){
        this.piecesGroup.getChildren().forEach((piece)=>{

            piece.on('drag',(pointer,dragX,dragY)=>{
                piece.x = dragX;
                piece.y = dragY;
            });

            piece.on('dragenter',(pointer,pieceSlot)=>{
                let background = pieceSlot.list[1];
                background.setTint(0x2d2d2d);
            });

            piece.on('dragleave',(pointer,pieceSlot)=>{
                let background = pieceSlot.list[1];
                background.clearTint();
            })

            piece.on('drop',(pointer,pieceSlot)=>{
                if(pieceSlot.input.dropZone===true){
                    if(valuesInfo.find((element)=>{
                        return element.key === pieceSlot.key && element.value === piece.value;
                    })!=null){
                        piece.x = pieceSlot.x;
                        piece.y = pieceSlot.y;
                        piece.setScale(pieceSlot._scaleX-0.05,pieceSlot._scaleY-0.02)
                        piece.rotation = pieceSlot.rotation;
                        piece.input.enabled = false;
                        pieceSlot.input.dropZone = false;
                        piece.setPlaced();
                    }else{
                        pieceSlot.background.clearTint();
                        piece.x = piece.input.dragStartX;
                        piece.y = piece.input.dragStartY;
                        
                    }
                }
            });

            piece.on('dragend',(pointer,piece,dropped)=>{
                if(!dropped){
                    piece.x = piece.input.dragStartX;
                    piece.y = piece.input.dragStartY;
                }
            })
        })
    }

    addAnimation(item){
        let totalItems = this.piecesList.length;
        let prime = 0;
        let speed=200;

        this.piecesList[item].y = 0;

        if(item<(totalItems-1)){
            this.piecesList[item + 1].y = 150; 
        }

        if(item>0){
            this.piecesList[item - 1].y = -150;
        }

    }
}

export default CaracScene;