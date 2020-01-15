import PuzzlePiece from "../gameObjects/carac/puzzlePiece.js";
import PieceSlot from "../gameObjects/carac/pieceSlot.js";
import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from "../consts/mainuiLib.js";
import { STEP_VALUE, valuesInfo, ROTATION_VALUE } from "../consts/caracLib.js";

const YTOP = -150;
const YHTOP= YTOP-150;
const YPRIME = 0;
const YDOWN = 150;
const YHDOWN = YDOWN+150;

class CaracScene extends Phaser.Scene{
    piecesList=[];
    piecesGroup;
    gameContainer;

    selectedPiece;

    primePiece;
    previousPiece;
    nextPiece;

    downArrow;
    upArrow;


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
        this.setInitialPosition(0);
    }

    addContent(){
        let boxesGroup = this.add.group();
        let piecesContent = this.add.container(0,0);
        let piecesBox = this.add.image(0,0,'cajaPiezas');
        
        this.upArrow = this.add.image(0,-230,'flechaPiezas');
        this.upArrow.setInteractive();
        this.upArrow.on('pointerdown',(event,index)=>{
            this.upArrow.setTint(0x2d2d2d);
            this.getPreviousPiece(index);
        })
        this.upArrow.on('pointerup',()=>{
            this.upArrow.clearTint();
        })

        this.downArrow = this.add.image(0,330,'flechaPiezas');
        this.downArrow.angle = -180;
        this.downArrow.setInteractive();
        this.downArrow.on('pointerdown',(event, index)=>{
            this.downArrow.setTint(0x2d2d2d);
            this.getNextPiece(index);
        });
        this.downArrow.on('pointerup',()=>{
            this.downArrow.clearTint();
        })
        
        let piecesPlaque = this.add.image(0,0,'placaPiezas');
        let pbTitle = this.add.text(-piecesPlaque.width/3-piecesPlaque.width/15,-piecesPlaque.height/4+piecesPlaque.height/8,'PIEZAS DE ROMPECABEZAS\nDISPONIBLES',
                                    {fontFamily:'Helvetica',
                                     fontSize: '18px',
                                     color:'#000',
                                     align:'center'
                                    });
        let pbTextContent = this.add.container(0,-345,[piecesPlaque,pbTitle]);
        pbTextContent.setSize(piecesPlaque.width,piecesPlaque.height);

        piecesContent.add([piecesBox,pbTextContent,this.upArrow,this.downArrow]).setSize(piecesBox.width,piecesBox.height);

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
        for(let i=1;i<=12;i++){
            let id = Math.floor(Math.random()*4)+1;
            let piece = new PuzzlePiece(this,   -DEFAULT_WIDTH/3+DEFAULT_WIDTH/35,YHTOP,id,'TITULO');
            this.piecesGroup.add(piece);
            this.piecesList.push(piece);
            piece.visible=false;
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
                        this.selectAPiece(piece);

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

    setInitialPosition(item){
        let totalItems = this.piecesList.length;
        this.primePiece = this.piecesList[item];
        this.primePiece.visible=true;
        this.piecesList[item].y = YPRIME;
        if(item<(totalItems-1)){
            this.nextPiece=this.piecesList[item + 1];
            this.nextPiece.visible=true;
            this.piecesList[item + 1].y = YDOWN; 
        }
        if(item>0){
            this.previousPiece = this.piecesList[item - 1];
            this.previousPiece.visible=true;
            this.piecesList[item - 1].y = YTOP;
        }
        if(item===0){
            this.previousPiece = this.piecesList[totalItems-1];
            this.previousPiece.visible=true;
            this.piecesList[totalItems-1].y = YTOP;
        }
        if(item===totalItems-1){
            this.nextPiece = this.piecesList[0];
            this.nextPiece.visible=true;
            this.piecesList[0].y = YDOWN;
        }
    }

    getNextPiece(){
        console.log('Initial\n prev: ',this.previousPiece.value, '\n prime: ',this.primePiece.value,'\n next: ',this.nextPiece.value);
        let speed=100;

        this.tweens.add({
            targets:this.primePiece,
            y:{from:YPRIME, to:YDOWN},
            duration:speed});

        this.tweens.add({
            targets:this.previousPiece,
            y:{from:YTOP, to:YPRIME},
            duration:speed});
        
        this.nextPiece.visible=false;

        this.tweens.add({
            targets:this.nextPiece,
            y:{from:YDOWN, to:YDOWN+200},
            duration:speed});
    
        let aux = this.piecesList.indexOf(this.primePiece);
        let index = aux--;
        if(index<=0){
            this.setInitialPosition(this.piecesList.length-1);
        }else{
            this.setInitialPosition(index-1);
        }

        console.log('actual index',index);
        console.log('Final\n prev: ',this.previousPiece.value, '\n prime: ',this.primePiece.value,'\n next: ',this.nextPiece.value); 
    }

    getPreviousPiece(){
        console.log('Initial\n prev: ',this.previousPiece.value, '\n prime: ',this.primePiece.value,'\n next: ',this.nextPiece.value);
        let speed=100;

        this.tweens.add({
            targets:this.primePiece,
            y:{from:YPRIME, to:YTOP},
            duration:speed});

        this.tweens.add({
            targets:this.nextPiece,
            y:{from:YDOWN, to:YPRIME},
            duration:speed});    

        this.tweens.add({
            targets:this.previousPiece,
            y:{from:YTOP, to:YTOP-200},
            duration:speed});
        
        this.previousPiece.visible=false;

        let aux = this.piecesList.indexOf(this.primePiece);
        console.log('el aux es: ',aux);
        let index = aux+1;
        console.log('el index es: ',index);
        if(index>=this.piecesList.length){
            index = 0;
            this.setInitialPosition(index);
        }else{
            this.setInitialPosition(index++);
        }

        
        console.log('Final\n prev: ',this.previousPiece.value, '\n prime: ',this.primePiece.value,'\n next: ',this.nextPiece.value); 
    }

    selectAPiece(piece){
        let speed = 200;
        console.log('Final\n prev: ',this.previousPiece.value, '\n prime: ',this.primePiece.value,'\n next: ',this.nextPiece.value); 
        this.selectedPiece = piece;
        let index = this.piecesList.indexOf(this.selectedPiece);

        if(this.selectedPiece===this.primePiece){
            this.primePiece = this.previousPiece;
            this.tweens.add({
                targets:this.previousPiece,
                y:{from:YTOP, to:YPRIME},
                duration:speed});
        }
        
        if(this.selectedPiece===this.previousPiece){
            console.log('escogio al prev');
            this.previousPiece = this.piecesList[index-1];
            this.tweens.add({
                targets:this.previousPiece,
                y:{from:YHTOP, to:YTOP},
                duration:speed});
        }

        if(this.selectedPiece===this.nextPiece){
            console.log('escogio al next');
            this.nextPiece = this.piecesList[index+1];
            this.tweens.add({
                targets:this.nextPiece,
                y:{from:YHDOWN, to:YDOWN},
                duration:speed});
        }
        
        if(index>-1){
            this.piecesList.splice(index,1);
        }

        index = this.piecesList.indexOf(this.primePiece);
        this.setInitialPosition(index);

        console.log('Final\n prev: ',this.previousPiece.value, '\n prime: ',this.primePiece.value,'\n next: ',this.nextPiece.value); 



    }

}

export default CaracScene;