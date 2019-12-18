class SeedButton extends Phaser.GameObjects.Container{
    board;
    body;
    basket;
    unlocked;
    label;
    constructor(scene,x,y){
        super(scene,x,y);
        this.board = scene.add.image(0,0,'bordeSemilla');
        this.body = scene.add.image(0,0,'cuerpoSemilla');
        this.basket = scene.add.image(0,-10,'canasta');
        this.basket.setTint(0x000000);
        this.label = scene.add.image(0,30,'etiquetaSemilla');
        this.add([this.board,this.body,this.basket,this.label]).setSize(this.board.width,this.board.height);
    }
}

export default SeedButton;