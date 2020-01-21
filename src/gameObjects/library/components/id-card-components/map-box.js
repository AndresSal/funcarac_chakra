export default class MapBox extends Phaser.GameObjects.Container{
    body;
    innerBody;
    mapPhoto;
    label;

    communityName;
    constructor(scene,x,y,communityName){
        super(scene,x,y);

        this.communityName = communityName;
        this.body = scene.add.image(0,0,'cuerpoMapa');
        this.innerBody = scene.add.image(0,0,'cajaInternaMapa');
        this.mapPhoto = scene.add.image(0,0,'mapa');
        this.label = scene.add.image(0,0,'etiquetaMapa');
        this.add(this.body).setSize(this.body.width,this.body.height);

        this.buildMapBox(scene);
        scene.add.existing(this);
    }

    buildInnerBox(scene){
        let container = scene.add.container(0,0,[this.innerBody,this.mapPhoto]);
        container.setSize(this.innerBody.width,this.innerBody.height);
        this.mapPhoto.setOrigin(0.5);
        return container;
    }

    buildTitleContent(scene){
        let title = scene.add.text(0,0,this.communityName,{fontFamily:'Helvetica',fontSize:'20px',color:'#000'});
        let container = scene.add.container(0,0,[this.label,title]);
        container.setSize(this.label.width,this.label.width);
        title.setOrigin(0.5);
        return container;
    }

    buildMapBox(scene){
        let titleContent = this.buildTitleContent(scene);
        let innerBoxContent = this.buildInnerBox(scene);
        let group = scene.add.group();
        group.add(titleContent);
        group.add(innerBoxContent);
        
        Phaser.Actions.GridAlign(group.getChildren(),{
            width:1,
            height:2,
            cellWidth:titleContent.width,
            cellHeight:innerBoxContent.height-20,
            x:-12,
            y:-112
        });

        group.getChildren().forEach((el)=>{
            this.add(el);
        });
    }
}