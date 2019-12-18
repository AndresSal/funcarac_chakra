class Chakra extends Phaser.GameObjects.Container{
    board;
    status;

    constructor(scene,x,y){
        super(scene,x,y);

        this.board = scene.add.image(0,0,'bordeChakra');
        this.status = scene.add.image(0,-10,'chakraNatural');

        this.add([this.board,this.status]).setSize(this.board.width,this.board.height);
    }
}

export default Chakra;