import { talesTitleConfig } from "../../../consts/talesLib.js";

export default class TaleStoryBox extends Phaser.GameObjects.Container{
    label;
    indexPage;
    totalPage;
    
    constructor(scene,x,y, indexPage, totalPage){
        super(scene,x,y);
        this.indexPage = indexPage;
        this.totalPage = totalPage;
        this.label = scene.add.image(0,0,'etiquetaIndice');

        this.buildBox(scene);

    }

    buildBox(scene){
        let indexPageText = this.setLabelText(scene,'PAGINA',this.indexPage,150,10);
        let totalPageText = this.setLabelText(scene,'DE',this.totalPage,60,10);
        
        let labelGroup = scene.add.group();
        labelGroup.add(indexPageText);
        labelGroup.add(totalPageText);

        Phaser.Actions.GridAlign(labelGroup.getChildren(),{
            width:2,
            height:1,
            cellWidth:250,
            cellHeight:0,
            x:-120,
            y:-40
        });

        this.add(this.label).setSize(this.label.width,this.label.height);
        labelGroup.getChildren().forEach((el)=>{
            this.add(el);
        });

        scene.add.existing(this);
    }

    setLabelText(scene,phrase, innerText,cellW,cellH){
        let data = talesTitleConfig.find((obj)=>{
            return obj.type==='index-info'
        });
        let indexInfo = data.index_props;
        let textInfo = data.info_elements.find((obj)=>{
            return obj.key=== phrase
        });
 
        let mainText = scene.add.text(textInfo.x,textInfo.y,textInfo.key,textInfo.style);
        let window = scene.add.image(0,0,'ventanaIndice');
        let indexText = scene.add.text(indexInfo.x,indexInfo.y,innerText,indexInfo.style);
      
        let indexContainer = scene.add.container(0,0,[window,indexText]);
        indexContainer.setSize(window.width,window.height);
    
        let elementsGroup = scene.add.group();
        elementsGroup.add(mainText);
        elementsGroup.add(indexContainer);
    
        Phaser.Actions.GridAlign(elementsGroup.getChildren(),{
            width:2,
            height:1,
            cellWidth:cellW,
            cellHeight:cellH,
            x:0,
            y:0
        });

        let container = scene.add.container(0,0);
        elementsGroup.getChildren().forEach((el)=>{
            container.add(el);
        });

        container.setSize(mainText.width+indexContainer.width,indexContainer.height);
        scene.add.existing(container);

        return container;
    }
}