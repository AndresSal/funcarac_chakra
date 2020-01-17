class BasePage extends Phaser.GameObjects.Container{
    ribbon;
    page;
    rightCorner;
    leftCorner;

    constructor(scene,x,y){
        super(scene,x,y);

        this.page = scene.add.image(0,0,'pagBase');
        this.ribbon = scene.add.image(0,0,'lazoPag');
        this.rightCorner = scene.add.image(100,0,'esquinaPag');
        this.leftCorner = scene.add.image(-100,0,'esquinaPag');
        this.leftCorner.angle=-180;

        this.add([this.page,this.ribbon,this.rightCorner,this.leftCorner])
        .setSize(this.page.width,this.page.height);
        scene.add.existing(this);
    }
}

export default BasePage;