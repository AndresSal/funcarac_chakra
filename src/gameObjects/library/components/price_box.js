export default class PriceBox extends Phaser.GameObjects.Container{
    box;
    price;
    constructor(scene,x,y){
        super(scene,x,y);
        this.box = scene.add.image(0,0,'recompensa');
        this.price = scene.add.image(0,0,'liston');

        this.displayContent(scene);
    }

    displayContent(scene){
        this.price.setScale(2.5);
        this.price.setTint(0x000);

        this.add([this.box,this.price])
        .setSize(this.box.width,this.box.height);
        scene.add.existing(this);
    }
}