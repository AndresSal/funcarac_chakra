import SeedButton from "./seedButton.js";

class SeedsBox extends Phaser.GameObjects.Container{
    box;
    plaque;
    innerBox;
    constructor(scene,x,y){
        super(scene,x,y);
        this.box = scene.add.image(0,0,'cajaSemillas');
        this.plaque = scene.add.image(-395,0,'placaSemillas');
        this.innerBox = scene.add.image(160,0,'cajaIntSemillas');
        this.add([this.box, this.plaque,this.innerBox]).setSize(this.box.width,this.box.height);

        this.addSeedButtons(scene);
    }

    addSeedButtons(scene){
        var xPosition = -145;
        var yPosition = -50;

        while(xPosition<this.innerBox.width-200){
            var seedOption = new SeedButton(scene,xPosition,yPosition);
            scene.add.existing(seedOption);
            this.add(seedOption);
            xPosition+=seedOption.board.width+5;
        }

        xPosition = -145;
        yPosition = 55;

        while(xPosition<this.innerBox.width-200){
            console.log(xPosition);
            var seedOption = new SeedButton(scene,xPosition,yPosition);
            scene.add.existing(seedOption);
            this.add(seedOption);
            xPosition+=seedOption.board.width+5;
        }
    }


}
export default SeedsBox;