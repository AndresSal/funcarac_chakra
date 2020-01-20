import BasePage from "./base-page/basePage.js";
import TaleStoryBox from "../components/taleStoryBox.js";

export default class PicturePage extends BasePage{
    indexPage;
    picture;
    totalPage;
    
    constructor(scene,x,y){
        super(scene,x,y,3);
        this.buildPage(scene);
        this.indexPage = 1;
        this.totalPage = 10;
        this.setContent(scene);

        
    }

    setContent(scene){
        this.picture = scene.add.image(0,0,'ejemploCuento');
        let taleStoryBox = new TaleStoryBox(scene,0,0,1,10);
        this.contentGroup.add(this.picture);
        this.contentGroup.add(taleStoryBox);

        Phaser.Actions.GridAlign(this.contentGroup.getChildren(),{
            width:1,
            height:2,
            cellWidth:0,
            cellHeight:405,
            x:this.page.width/24-this.page.width/2,
            y:this.page.height/6-this.page.height/7
        });
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