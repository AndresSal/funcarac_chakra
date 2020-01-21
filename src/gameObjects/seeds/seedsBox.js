import SeedButton from "./seedButton.js";
import { SEEDS_ATLAS } from "../../consts/chakraLib.js";

class SeedsBox extends Phaser.GameObjects.Container{
    box;
    plaque;
    innerBox;

    seedList=[];

    seedsGroup;

    constructor(scene,x,y){
        super(scene,x,y);
        this.box = scene.add.image(0,0,SEEDS_ATLAS,'seeds_box');
        this.plaque = scene.add.image(0,0,SEEDS_ATLAS,'box_plaque');
        //TODO MIGRAR A ARCHIVO JSON EL ESTILO DEL TEXTO
        let title = scene.add.text(-this.plaque.width/2+this.plaque.width/14,-this.plaque.height/4-this.plaque.height/20,'COLECCIÓN\nDE SEMILLAS',
        {fontFamily:'Helvetica',
        fontSize:'40px',
        color:'#000',
        stroke:'#000',
        strokeThickness:1,
        align:'center'});

        let titleContent = scene.add.container(-this.box.width/3-this.box.width/80,0,[this.plaque,title]);
        titleContent.setSize(this.plaque.width,this.plaque.height);

        this.innerBox = scene.add.image(160,0,SEEDS_ATLAS,'inner_box');
        this.add([this.box, titleContent,this.innerBox]).setSize(this.box.width,this.box.height);
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