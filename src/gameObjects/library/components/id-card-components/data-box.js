export default class DataBox extends Phaser.GameObjects.Container{
    completeName;
    community;
    state;
    constructor(scene,x,y,completeName,community,state){
        super(scene,x,y);

        this.completeName = completeName;
        this.community = community;
        this.state = state;

        this.createDataBox(scene);
    }

    createDataField(scene,data){
        let field = scene.add.image(0,0,'campoDatos');
        let text = scene.add.text(0,0,data,{fontFamily:'Helvetica',fontSize:'20px',color:'#000'});
        let container = scene.add.container(0,0,[field,text]);
        container.setSize(field.width,field.height);
        text.setOrigin(0.5);

        return container;
    }

    createDataLabel(scene,title){
        let label = scene.add.image(0,0,'etiquetaMapa');
        let text = scene.add.text(0,0,title,{fontFamily:'Helvetica',fontSize:'17px',color:'#000'});
        let container = scene.add.container(0,0,[label,text]);
        container.setSize(label.width,label.height);
        text.setOrigin(0.5);

        return container;
    }

    createField(scene,title,data){
        let labelPart = this.createDataLabel(scene,title);
        let fieldPart = this.createDataField(scene,data);

        let group = scene.add.group();
        group.add(labelPart);
        group.add(fieldPart);

        Phaser.Actions.GridAlign(group.getChildren(),{
            width:1,
            height:2,
            cellWidth:labelPart.width,
            cellHeight:fieldPart.height+7
        });

        let container = scene.add.container(0,0);
        group.getChildren().forEach((el)=>{
            container.add(el);
        });

        return container;
    }

    createDataBox(scene){
        let box = scene.add.image(0,0,'cajaDatos');
        this.add(box).setSize(box.width,box.height);

        let nameField = this.createField(scene,'NOMBRES COMPLETOS',this.completeName);
        let communityField = this.createField(scene,'COMUNIDAD',this.community);
        let stateField = this.createField(scene,'PROVINCIA',this.state);

        let group = scene.add.group([nameField,communityField,stateField]);
        Phaser.Actions.GridAlign(group.getChildren(),{
            width:1,
            height:3,
            cellWidth:nameField.width,
            cellHeight:nameField.height+72,
            x:-115,
            y:-50
        });

        group.getChildren().forEach((el)=>{
            this.add(el);
        });

        scene.add.existing(this);
    }
}