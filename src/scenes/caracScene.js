import PuzzlePiece from "../gameObjects/carac/puzzlePiece.js";
import PieceSlot from "../gameObjects/carac/pieceSlot.js";
import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from "../consts/mainuiLib.js";
import { STEP_VALUE, valuesInfo, ROTATION_VALUE } from "../consts/caracLib.js";


class CaracScene extends Phaser.Scene{
    piecesList=[];
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
        })
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
        let ringShape = new Phaser.Geom.Circle(DEFAULT_WIDTH/2+DEFAULT_WIDTH/6+DEFAULT_WIDTH/9-10,DEFAULT_HEIGHT/2+DEFAULT_HEIGHT/8,radius);
        Phaser.Actions.PlaceOnCircle(slotsGroup.getChildren(),ringShape);
    }

    addPieces(){
        let piezaA = new PuzzlePiece(this,DEFAULT_WIDTH/2-DEFAULT_WIDTH/40,500,1,'INTI RAYMI');
        let piezaB = new PuzzlePiece(this,DEFAULT_WIDTH/2-DEFAULT_WIDTH/40,620,2,'FANESCA');
        let piezaC = new PuzzlePiece(this,DEFAULT_WIDTH/2-DEFAULT_WIDTH/40,740,3,'KATZOS');
        let piezaD = new PuzzlePiece(this,DEFAULT_WIDTH/2-DEFAULT_WIDTH/40,860,4,'RUNA API');
        
        this.piecesList.push(piezaA,piezaB,piezaC,piezaD);

        this.add.existing(piezaA);
        this.add.existing(piezaB);
        this.add.existing(piezaC);
        this.add.existing(piezaD);

        this.piecesList.forEach((piece)=>{
            piece.setInteractive();
            this.input.setDraggable(piece);

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
}

export default CaracScene;