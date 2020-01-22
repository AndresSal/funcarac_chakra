import PhotoBox from "../id-card-components/photo-box.js";

export default class InfoCardSmall extends Phaser.GameObjects.Container{
    data;
    picture;
    constructor(scene,x,y,data,picture){
        super(scene,x,y);
        this.data = data;
        this.picture = picture;

        this.createInfoCard(scene);
    }

    createInfoCard(scene){
        let box = scene.add.image(0,0,'cajaCartillaChica');
        this.add(box).setSize(box.width,box.height);
        
        let photoBox = new PhotoBox(scene,0,0,2);
        photoBox.setScale(0.6);
        let field = this.createDataField(scene);

        let group = scene.add.group([photoBox,field]);
        Phaser.Actions.GridAlign(group.getChildren(),{
            width:2,
            height:1,
            cellWidth:photoBox.width+10,
            cellHeight:photoBox.height,
            position:6,
            x:-145
        });

        group.getChildren().forEach((el)=>{
            this.add(el);
        })
        scene.add.existing(this);
    }

    createDataField(scene){
        let fieldBody = scene.add.image(0,0,'cuerpoCartillaChica');
        let label = scene.add.image(0,0,'etiquetaCartilla');
        let title = scene.add.text(0,0,this.data.title,{fontFamily:'Helvetica',fontSize:'18px',color:'#000'});
        title.setOrigin(0.5);
        let titleContainer = scene.add.container(-38,-40,[label,title]);
        titleContainer.setSize(label.width,label.height);

        titleContainer.setScale(0.82);
        let text = scene.add.text(0,0,this.data.info,{fontFamily:'Helvetica',fontSize:'18px',color:'#000'});
        text.setOrigin(0.5,0.28);
        let container = scene.add.container(0,0,[fieldBody,text,titleContainer]);
        container.setSize(fieldBody.width,fieldBody.height);

        return container;
    }



}