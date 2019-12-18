import ChakraPanel from "../chakra_panel/chakraPanel.js";

class Chakra extends Phaser.GameObjects.Container{
    board;
    status;
    chakraPanel;

    constructor(scene,x,y){
        super(scene,x,y);

        this.board = scene.add.image(0,0,'bordeChakra');
        this.status = scene.add.image(0,-10,'chakraNatural');

        this.add([this.board,this.status]);

        this.chakraPanel = new ChakraPanel(scene,0,125);
        scene.add.existing(this.chakraPanel);
        this.add(this.chakraPanel);
        this.setSize(this.board.width,this.board.height+this.chakraPanel.box.width);
    }
}

export default Chakra;