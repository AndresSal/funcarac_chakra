import { photoTypes } from "../../../../consts/talesLib.js";

export default class PhotoBox extends Phaser.GameObjects.Container{
    box;
    photo;
    constructor(scene,x,y,photoID){
        super(scene,x,y);

        let photoType = photoTypes.find((el)=>{
            return el.id===photoID;
        })

        this.box = scene.add.image(0,0,'cajaRetrato');
        this.photo = scene.add.image(0,0,photoType.key);
        this.photo.setScale(photoType.scale);

        this.photo.setOrigin(0.5);
        this.add([this.box,this.photo]).setSize(this.box.width,this.box.height);
        scene.add.existing(this);
    }
}