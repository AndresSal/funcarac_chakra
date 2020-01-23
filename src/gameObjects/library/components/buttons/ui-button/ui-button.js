export default class UiButton extends Phaser.GameObjects.Container{
    body;
    title;
    buttonName;
    
    constructor(scene,x,y,btnName){
        super(scene,x,y);
        this.buttonName = btnName;
        this.body = scene.add.image(0,0,'recompensa');
        this.body.angle=90;
        this.title = scene.add.text(0,0,this.buttonName,{fontFamily:'Helvetica',fontSize:'50px',stroke:'#E92929',
        strokeThickness:2,color:'#E92929',align:'center'});
        this.title.setOrigin(0.5);

        this.add([this.body,this.title]).setSize(this.body.width,this.body.height).setInteractive();
        scene.add.existing(this);

        this.selectButton();
    }

    selectButton(){
        this.on('pointerdown',()=>{
            this.body.setTint(0xA45ED2);
            this.title.setColor('#78D25E');
            this.title.setStroke('#78D25E',2);
        });

        this.on('pointerup',()=>{
            this.body.clearTint();
            this.title.setColor('#E92929');
            this.title.setStroke('#E92929',2);
        });
    }

}