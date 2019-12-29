import SeedButton from "./seedButton.js";

class SeedsBox extends Phaser.GameObjects.Container{
    box;
    plaque;
    innerBox;

    seedList=[];

    constructor(scene,x,y){
        super(scene,x,y);
        this.box = scene.add.image(0,0,'cajaSemillas');
        this.plaque = scene.add.image(-395,0,'placaSemillas');
        this.innerBox = scene.add.image(160,0,'cajaIntSemillas');
        this.add([this.box, this.plaque,this.innerBox]).setSize(this.box.width,this.box.height);

        this.addSeedButtons(scene);
        this.selectButton();
        this.unlockingSeeds();
    }

    addSeedButtons(scene){
        var xPosition = -145;
        var yPosition = -50;

        while(xPosition<this.innerBox.width-200){
            var seedOption = new SeedButton(scene,xPosition,yPosition);
            scene.add.existing(seedOption);
            this.add(seedOption);
            this.seedList.push(seedOption);
            xPosition+=seedOption.board.width+5;
        }

        xPosition = -145;
        yPosition = 55;

        while(xPosition<this.innerBox.width-200){
            var seedOption = new SeedButton(scene,xPosition,yPosition);
            scene.add.existing(seedOption);
            this.add(seedOption);
            this.seedList.push(seedOption);
            xPosition+=seedOption.board.width+5;
        }
    }

    selectButton(){
        this.seedList.forEach(element => {
            element.on('pointerdown',()=>{
                element.body.setTint(0x2d2d2d);
            });

            element.on('pointerup',()=>{
                element.body.clearTint();
            })
        });
    }

    unlockingSeeds(){
        this.seedList.forEach((option)=>{
            option.unlockSeed();
        })
    }


}
export default SeedsBox;