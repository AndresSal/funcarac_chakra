import { talesStates } from "../../consts/talesLib.js";

class Tale extends Phaser.GameObjects.Container{
    body;
    label;
    window;
    book;
    product_label;
    state;

    data;
    constructor(scene,x,y,stateKey){
        super(scene,x,y);
        this.data = talesStates.find((obj=>{
            return obj.key === stateKey;
        }));
        this.body = scene.add.image(0,0,'cuerpoRelato');
        this.window = scene.add.image(0,0,'ventanaRelato');
        this.book = scene.add.image(0,0,'libro');
        let windowContent = scene.add.container(0,0,[this.window,this.book]);
        windowContent.setSize(this.window.width,this.window.height);
        scene.add.existing(windowContent);

        this.label = scene.add.image(0,0,'etiquetaRelato');
        this.product_label = scene.add.image(0,0,'productoRelato');
        let labelContent = scene.add.container(0,0,[this.label,this.product_label]);
        labelContent.setSize(this.label.width,this.label.height);
        scene.add.existing(labelContent);

        this.state = scene.add.image(this.data.props.x,this.data.props.y,this.data.value);
        this.state.setScale(this.data.props.scale)

        this.checkStateValue(scene);

        let elementsGroup=scene.add.group([windowContent,labelContent]);
        Phaser.Actions.GridAlign(elementsGroup.getChildren(),{
            width:1,
            height:2,
            cellWidth:90,
            cellHeight:150,
            x:-25,
            y:-15
        }) 
        this.add([this.body,windowContent,labelContent,this.state]).setSize(this.body.width,this.body.height);
        scene.add.existing(this);
        this.setInteractive();
    }

    checkStateValue(scene){
        switch(this.data.key){
            case 'new':
                scene.tweens.add({
                    targets:this.state,
                    props:{
                        scaleX:{from:0.8, to:1},
                        scaleY:{from:0.8, to:1},
                        duration:200,
                    },
                    yoyo:true,
                    repeat:-1
                })
                break;
        }
    }
}

export default Tale;