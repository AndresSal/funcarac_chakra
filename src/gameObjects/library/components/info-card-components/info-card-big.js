export default class InfoCardBig extends Phaser.GameObjects.Container{
    constructor(scene,x,y){
        super(scene,x,y);

        this.createInfoCard(scene,'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVivamus elementum tincidunt tristique.\nDonec cursus elit et massa sollicitudin dapibus.');
    }

    createDataField(scene,data){
        let field = scene.add.image(0,0,'campoInformativo');
        let text = scene.add.text(0,0,data,{fontFamily:'Helvetica',fontSize:'14px',color:'#000'});

        let fieldContainer = scene.add.container(0,0,[field,text]);
        fieldContainer.setSize(field.width,field.height);
        text.setOrigin(0.5);

        let brain = scene.add.image(0,0,'iconoCerebro');

        let group = scene.add.group([brain,fieldContainer]);

        Phaser.Actions.GridAlign(group.getChildren(),{
            width:2,
            height:1,
            cellWidth:brain.width+5,
            cellHeight:brain.height+10
        });

        let container = scene.add.container(0,0);

        group.getChildren().forEach((el)=>{
            container.add(el);
        });
        return container;
    }

    createInfoCard(scene,data){
        let body = scene.add.image(0,0,'cuerpoCartilla');
        let label = scene.add.image(0,0,'etiquetaCartilla');
        label.setOrigin(0.9,6);
        this.add([body,label]).setSize(body.width,body.height);
        let group = scene.add.group();
        let cellW;
        let cellH;

        for(let i=0;i<4;i++){
            let infoField = this.createDataField(scene,data);
            cellW = infoField.width;
            cellH = infoField.height;
            group.add(infoField);
        }

        Phaser.Actions.GridAlign(group.getChildren(),{
            width:1,
            height:4,
            cellWidth:cellW,
            cellHeight:cellH+80,
            x:-body.width/2+35,
            y:-body.height/6
        });

        group.getChildren().forEach((el)=>{
            this.add(el);
        });

        scene.add.existing(this);
    }
}