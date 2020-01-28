import BaseChapter from "./base-chapter.js";
import { taleExample } from "../../data/tales/talesInformation.js";
import PicturePage from "../../gameObjects/library/pages/picturePage.js";
import TaleStoryPage from "../../gameObjects/library/pages/taleStoryPage.js";


export default class TaleStoryChapter extends BaseChapter{
    constructor(scene){
        super(scene,taleExample);

        //this.createPicPage();
        this.createInfoPage();
    }

    createPicPage(){
        this.picturesData.forEach((pic)=>{
            let picPage = new PicturePage(this.scene,0,0,pic.key,pic.id,this.picturesData.length);
            this.picturePagesList.push(picPage);
        });
    }

    createInfoPage(){
        let regularExpression = '.';
        //let sentencesList = this.knowledgeData.description.split(regularExpression);
        let taleStoryPage = new TaleStoryPage(this.scene,0,0,this.knowledgeData.intro,this.knowledgeData.middle,this.knowledgeData.end);
        let taleStoryPageA = new TaleStoryPage(this.scene,0,0,this.knowledgeData.intro,this.knowledgeData.middle,this.knowledgeData.end);
        this.infoPagesList.push(taleStoryPage);
        this.infoPagesList.push(taleStoryPageA);


        // let i=0;
        // while(i<sentencesList.length-1){
        //     let taleStoryPage = new TaleStoryPage(this.scene,0,0,sentencesList[i],sentencesList[i+1],sentencesList[i+2]);
        //     this.infoPagesList.push(taleStoryPage);
        //     i+=3;
        // }
    }
}