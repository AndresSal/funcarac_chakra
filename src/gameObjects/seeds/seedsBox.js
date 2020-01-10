import SeedButton from "./seedButton.js";

class SeedsBox extends Phaser.GameObjects.Container{
    box;
    plaque;
    innerBox;

    seedList=[];

    seedsGroup;

    constructor(scene,x,y){
        super(scene,x,y);
        this.box = scene.add.image(0,0,'cajaSemillas');
        this.plaque = scene.add.image(-395,0,'placaSemillas');
        this.innerBox = scene.add.image(160,0,'cajaIntSemillas');
        this.add([this.box, this.plaque,this.innerBox]).setSize(this.box.width,this.box.height);
        scene.add.existing(this);
        this.buildSeedsGrid(scene);
        this.selectButton();
        this.unlockingSeeds();
    }

    buildSeedsGrid(scene){
        this.seedsGroup = scene.add.group();
        for(var i=0;i<10;i++){
            var seedButton = new SeedButton(scene,0,0);
            this.add(seedButton);
            this.seedsGroup.add(seedButton);
        }

        Phaser.Actions.GridAlign(this.seedsGroup.getChildren(),{
            width:5,
            height:2,
            cellWidth:150,
            cellHeight:105,
            x:-140,
            y:-50
        });
    }

    selectButton(){
        this.seedsGroup.getChildren().forEach((element)=>{
            element.on('pointerdown',()=>{
                element.body.setTint(0x2d2d2d);
            });
            element.on('pointerup',()=>{
                element.body.clearTint();
            });
        });
    }

    unlockingSeeds(){
        this.seedsGroup.getChildren().forEach((seed)=>{
            seed.unlockSeed();
        });
    }
}
export default SeedsBox;