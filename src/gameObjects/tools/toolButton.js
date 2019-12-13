class ToolButton extends Phaser.GameObjects.Container{
    board;
    body;
    label;
    
    constructor(scene,x,y){
        super(scene,x,y);

        this.board = scene.add.image(0,0,'bordeHta');
        this.body = scene.add.image(0,0,'cuerpoHta');
        this.label = scene.add.image(0,50,'etiquetaHta');

        this.add([this.board,this.body,this.label])
        .setSize(this.board.width,this.board.height)
        .setInteractive();
    }
}

export default ToolButton;