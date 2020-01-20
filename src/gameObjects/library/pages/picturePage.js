import BasePage from "./base-page/basePage.js";

export default class PicturePage extends BasePage{
    indexPage;
    totalPage;
    
    constructor(scene,x,y){
        super(scene,x,y,3);
        this.buildPage(scene);
        this.indexPage = 1;
        this.totalPage = 10;

        this.setContent(scene);
    }

    setContent(scene){
        let label = scene.add.image(0,0,'etiquetaIndice');

        let indexPagePart =this.createContainer(scene,'PÁGINA',this.indexPage,150,10);
        let totalPagePart =this.createContainer(scene,'DE',this.totalPage,60,10);

        let labelGroup = scene.add.group();
        labelGroup.add(indexPagePart);
        labelGroup.add(totalPagePart);

        Phaser.Actions.GridAlign(labelGroup.getChildren(),{
            width:2,
            height:1,
            cellWidth:270,
            cellHeight:300,
            x:-120,
            y:110
        });

        let labelContent = scene.add.container(0,250);
        labelContent.add(label).setSize(label.width,label.height);

        labelGroup.getChildren().forEach((el)=>{
            labelContent.add(el);
        });

        this.contentGroup.add(labelContent);
        this.addGroupContent(scene);

    }

    createContainer(scene,phrase,innerText,cellW,cellH){
        let mainText = scene.add.text(0,0,phrase,
        {fontFamily:'Helvetica',
         fontSize:'36px',
         color:'#f5ec2f'});
        let window = scene.add.image(0,0,'ventanaIndice');
        let indexText = scene.add.text(-15,-20,innerText,
        {fontFamily:'Helvetica',
         fontSize:'40px',
         color:'#000'}); 
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