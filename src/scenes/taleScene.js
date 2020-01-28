import CoverPage from "../gameObjects/library/pages/coverPage.js";
import PiecesPage from "../gameObjects/library/pages/piecesPage.js";
import PicturePage from "../gameObjects/library/pages/picturePage.js";
import TaleTitlePage from "../gameObjects/library/pages/taleTitlePage.js";
import TaleStoryPage from "../gameObjects/library/pages/taleStoryPage.js";
import IdCardPage from "../gameObjects/library/pages/idCardPage.js";
import InfoCardPage from "../gameObjects/library/pages/infoCardPage.js";
import QuizPage from "../gameObjects/library/pages/quizPage.js";
import { DEFAULT_WIDTH, DEFAULT_HEIGHT,separatorsInfo } from "../consts/mainuiLib.js";

export default class TaleScene extends Phaser.Scene{
    taleContainer;
    pagesList=[];

    separatorsGroup;

    pageLeft;
    pageRight;
    
    constructor(){
        super({key:'TaleScene'});
    }

    create(){
        let bookPaste = this.add.image(0,0,'pastaLibro');
        bookPaste.setOrigin(0.5);

        this.taleContainer = this.add.container(DEFAULT_WIDTH/2+DEFAULT_WIDTH/6,DEFAULT_HEIGHT/2+DEFAULT_HEIGHT/10,[bookPaste]);
        this.taleContainer.setSize(bookPaste.width,bookPaste.height);
        


        this.addPages();
        this.passThePage();

        this.addChapterSeparators();
    }

    setCurrentPages(){
        this.pageLeft.visible=true;
        this.pageRight.visible=true;

        if(this.pageLeft===this.pagesList[0]){            
            this.pageLeft.leftCorner.visible=false;
            this.pageLeft.rightCorner.visible=false;
        }
        
        if(this.pageRight===this.pagesList[this.pagesList.length-1]){
            this.pageRight.leftCorner.visible=false;
            this.pageRight.rightCorner.visible=false;
        }
        
        this.pageLeft.rightCorner.visible = false;
        this.pageRight.leftCorner.visible = false;

        let pagesShownGroup = this.add.group([this.pageLeft,this.pageRight]);

        Phaser.Actions.GridAlign(pagesShownGroup.getChildren(),{
            width:2,
            height:1,
            cellWidth:this.pageLeft.width,
            x:-this.taleContainer.width/4+15,
            y:-this.taleContainer.height/7+10
        });

        pagesShownGroup.getChildren().forEach((el)=>{
            this.taleContainer.add(el);
        })

        this.add.existing(this.taleContainer);
    }

    addPages(){
        let coverPage = new CoverPage(this,0,0,'TUKTU PALLAY PACHA');
        let knowledgePage = new TaleTitlePage(this,0,0,'COMIDAS');
        let piecesPage = new PiecesPage(this,1400,700);
        let picturePage = new PicturePage(this,800,700);
        let taleStoryPage = new TaleStoryPage(this,1400,700);
        let idCardPage = new IdCardPage(this,1000,800,1);
        
        let JSONdata = {
            title:'PERRO ALEGRE',
            info:'Lorem ipsum dolor sit amet,\n consectetur adipiscing elit.\n Nulla aliquet quam lacus,\n imperdiet hendrerit arcu porta vel.'
        };

        let infoPageA = new InfoCardPage(this,800,800,1,JSONdata);
        let infoPageB = new InfoCardPage(this,1200,800,2,JSONdata);
        let infoPageC = new InfoCardPage(this,1200,800,2,JSONdata);
        let quizPage = new QuizPage(this,800,600,'TUKTU PALLAY PACHA');
        this.pagesList = [coverPage,piecesPage,picturePage,taleStoryPage,knowledgePage,idCardPage,infoPageA,infoPageB,infoPageC,quizPage];
        this.pagesList.forEach((el)=>{
            el.visible=false;
        })
        this.pageLeft = this.pagesList[0];
        this.pageRight = this.pagesList[1];

        this.setCurrentPages();
    }

    passThePage(){
        this.pagesList.forEach((page)=>{
            page.rightCorner.on('pointerdown',()=>{
                let leftIndex = this.pagesList.indexOf(this.pageLeft);
                let rightIndex = this.pagesList.indexOf(this.pageRight);

            if(rightIndex<this.pagesList.length&&leftIndex>=0){
                this.pagesList[leftIndex].visible=false;
                this.pagesList[rightIndex].visible=false;
                this.pageLeft=this.pagesList[leftIndex+2];
                this.pageRight=this.pagesList[rightIndex+2];
                this.setCurrentPages();
            }
            });

            page.leftCorner.on('pointerdown',()=>{
                let leftIndex = this.pagesList.indexOf(this.pageLeft);
                let rightIndex = this.pagesList.indexOf(this.pageRight);

            if(rightIndex<this.pagesList.length&&leftIndex>1){
                this.pagesList[leftIndex].visible=false;
                this.pagesList[rightIndex].visible=false;
                this.pageLeft=this.pagesList[leftIndex-2];
                this.pageRight=this.pagesList[rightIndex-2];
                this.setCurrentPages();
            };
            });        
        });
    }

    addChapterSeparators(){
        this.separatorsGroup = this.add.group();
        for(let i=1;i<=4;i++){
            let separatorInfo = separatorsInfo.find((aux)=>{
                return aux.id===i;
            });
            let chapterSeparator = this.add.image(0,0,separatorInfo.key);
            chapterSeparator.setInteractive();
            this.separatorsGroup.add(chapterSeparator);
        }
        Phaser.Actions.GridAlign(this.separatorsGroup.getChildren(),{
            width:1,
            height:4,
            cellWidth:this.separatorsGroup.getChildren()[0].width,
            cellHeight: this.separatorsGroup.getChildren()[0].height+80,
            x:this.taleContainer.width/2,
            y:-this.taleContainer.height/4
        });

        this.separatorsGroup.angle(90).getChildren().forEach((separator)=>{
            this.taleContainer.add(separator);
        });

    }

}
