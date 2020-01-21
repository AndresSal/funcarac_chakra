export default class PhotoBox extends Phaser.GameObjects.Container{
    box;
    photo;
    constructor(scene,x,y){
        super(scene,x,y);

        this.box = scene.add.image(0,0,'cajaRetrato');
        this.photo = scene.add.image(0,0,'retrato');

        this.photo.setOrigin(0.5);
        this.add([this.box,this.photo]).setSize(this.box.width,this.box.height);
        scene.add.existing(this);
    }
}