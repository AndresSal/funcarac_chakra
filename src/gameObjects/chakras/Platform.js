import Chakra from "./chakra.js";

class Platform extends Phaser.GameObjects.Container{
    box;
    plaque;
    constructor(scene,x,y){
        super(scene,x,y);

        this.box = scene.add.image(0,0,'anden');
        this.plaque = scene.add.image(0,-260,'placaAnden');
        this.add([this.box,this.plaque]).setSize(this.box.width,this.box.height);

        this.addChakras(scene);
    }

    addChakras(scene){
        let xPosition = -300;
        let yPosition = -110;

        let items = 0;

        while(items<5){
            let chakra = new Chakra(scene,xPosition,yPosition);
            scene.add.existing(chakra);
            this.add(chakra);
            xPosition+=149;
            items++;
        }

        xPosition = -300;
        yPosition+=265;
        items = 0;

        while(items<5){
            console.log(xPosition);
            let chakra = new Chakra(scene,xPosition,yPosition);
            scene.add.existing(chakra);
            this.add(chakra);
            xPosition+=149;
            items++;
        }


    }


}

export default Platform;