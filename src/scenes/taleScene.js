import BasePage from "../gameObjects/library/pages/base-page/basePage.js";
import CoverPage from "../gameObjects/library/pages/coverPage.js";
import PiecesPage from "../gameObjects/library/pages/piecesPage.js";
import PicturePage from "../gameObjects/library/pages/picturePage.js";
import TaleTitlePage from "../gameObjects/library/pages/taleTitlePage.js";
import TaleStoryBox from "../gameObjects/library/components/taleStoryBox.js";
import TextLabel from "../gameObjects/library/components/textLabel.js";
import TaleStoryPage from "../gameObjects/library/pages/taleStoryPage.js";
import ModalWindow from "../gameObjects/mainUI/window/modalWindow.js";
import PhotoBox from "../gameObjects/library/components/id-card-components/photo-box.js";
import MapBox from "../gameObjects/library/components/id-card-components/map-box.js";
import DataBox from "../gameObjects/library/components/id-card-components/data-box.js";
import IdCard from "../gameObjects/library/components/id-card-components/id-card.js";
import IdCardPage from "../gameObjects/library/pages/idCardPage.js";
import InfoCardBig from "../gameObjects/library/components/info-card-components/info-card-big.js";
import InfoCardSmall from "../gameObjects/library/components/info-card-components/info-card-small.js";
import InfoCardPage from "../gameObjects/library/pages/infoCardPage.js";
import UiButton from "../gameObjects/library/components/buttons/ui-button/ui-button.js";
import QuizCard from "../gameObjects/library/components/quiz-card.js";
import QuizPage from "../gameObjects/library/pages/quizPage.js";
import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from "../consts/mainuiLib.js";

class TaleScene extends Phaser.Scene{
    taleContainer;
    pagesList=[];

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

        //add two pages
        this.setCurrentPages();

    }

    setCurrentPages(){
        this.pageLeft.visible=true;
        this.pageRight.visible=true;

        console.log('primer elemento: ',this.pagesList[0]);
        console.log('pagina left: ',this.pageLeft);

        if(this.pageLeft===this.pagesList[0] || this.pageRight===this.pagesList[this.pagesList.length-1]){
            console.log('abuuu');
            
            // this.pageLeft.leftCorner.visible=false;
            // this.pageLeft.rightCorner.visible=false;

            // this.pageRight.leftCorner.visible=false;
            // this.pageRight.rightCorner.visible=false;
        }else{
            this.pageLeft.rightCorner.visible = false;
            this.pageRight.leftCorner.visible = false;
        }

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
        let quizPage = new QuizPage(this,800,600,'TUKTU PALLAY PACHA');
        this.pagesList = [coverPage,knowledgePage,piecesPage,picturePage,taleStoryPage,idCardPage,infoPageA,infoPageB,quizPage];
        this.pagesList.forEach((el)=>{
            el.visible=false;
        })

        this.pageRight = this.pagesList[0];
        this.pageLeft = this.pagesList[1];
    }
}

export default TaleScene;