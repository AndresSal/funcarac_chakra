import PuzzlePiece from "../gameObjects/carac/puzzlePiece.js";
import PieceSlot from "../gameObjects/carac/pieceSlot.js";
import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from "../consts/mainuiLib.js";

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
        let piecesContent = this.add.container(100,100);
        let piecesBox = this.add.image(0,0,'cajaPiezas');
        let piecesPlaque = this.add.image(0,-345,'placaPiezas');
        piecesContent.add([piecesBox,piecesPlaque]).setSize(piecesBox.width,piecesBox.height);

        let boardContent = this.add.container(100,100);
        let boardBox = this.add.image(0,0,'cajaTablero');
        let boardPlaque = this.add.image(0,-345,'placaTablero');
        boardContent.add([boardBox,boardPlaque]).setSize(boardBox.width,boardBox.height);

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
        let rotation =26.72;
        let step =0.52;
        for (let i=0;i<12;i++){
            let slot = new PieceSlot(this,0,0,id);
            this.add.existing(slot);
            radius = slot.slotData.radius;
            slotsGroup.add(slot);
        }
        Phaser.Actions.SetRotation(slotsGroup.getChildren(),rotation,step);
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
                    piece.x = pieceSlot.x;
                    piece.y = pieceSlot.y;
                    piece.setScale(pieceSlot._scaleX-0.05,pieceSlot._scaleY-0.02)
                    piece.rotation = pieceSlot.rotation;
                    piece.input.enabled = false;
                    pieceSlot.input.dropZone = false;
                }else{
                    piece.x = piece.input.dragStartX;
                    piece.y = piece.input.dragStartY;
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