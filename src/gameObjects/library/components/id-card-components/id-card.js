import DataBox from "./data-box.js";
import PhotoBox from "./photo-box.js";
import MapBox from "./map-box.js";

export default class IdCard extends Phaser.GameObjects.Container{
    photoBox;
    dataBox;
    mapBox;

    idPhoto;
    constructor(scene,x,y,idPhoto){        
        super(scene,x,y);
        this.idPhoto = idPhoto;

        this.photoBox = new PhotoBox(scene,0,0,this.idPhoto);
        this.mapBox = new MapBox(scene,0,0,'SALACHE');
        this.dataBox = new DataBox(scene,0,0,'ROSA MARIA GUADALUPE ROSAS','SALACHE','COTOPAXI');

        this.createIDCard(scene);
    }

    createIDCard(scene){
        let group = scene.add.group([this.photoBox,this.mapBox,this.dataBox]);

        Phaser.Actions.GridAlign(group.getChildren(),{
            width:2,
            height:2,
            cellWidth:this.photoBox.width+5,
            cellHeight:this.dataBox.height-25,
            x:-120,
            y:-120
        });

        let body = scene.add.image(0,0,'cuerpoIDCard');
        this.add(body).setSize(body.width,body.height);

        group.getChildren().forEach((el)=>{
            this.add(el);
        });

        scene.add.existing(this);
    }
}