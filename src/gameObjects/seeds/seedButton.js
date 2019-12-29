class SeedButton extends Phaser.GameObjects.Container{
    board;
    body;
    basket;
    locked;
    label;
    constructor(scene,x,y){
        super(scene,x,y);
        this.board = scene.add.image(0,0,'bordeSemilla');
        this.body = scene.add.image(0,0,'cuerpoSemilla');
        this.basket = scene.add.image(0,-10,'canasta');
        this.label = scene.add.image(0,30,'etiquetaSemilla');
        this.locked = false;
        this.add([this.board,this.body,this.basket,this.label]).setSize(this.board.width,this.board.height);

        this.seedStatus();
    }

    unlockSeed(){
        this.locked = false;
    }

    seedStatus(){
        if(this.locked===true){
            this.basket.setTint(0x000000);
        }else{
            this.basket.clearTint();
            this.setInteractive();
        }
    }
}

export default SeedButton;