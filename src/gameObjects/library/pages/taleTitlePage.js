import BasePage from "./base-page/basePage.js";
import MainTitle from "../components/mainTitle.js";

export default class TaleTitlePage extends BasePage{
    picture;
    mainTitle;
    knowledgeTitle;

    constructor(scene,x,y,knowledge){
        super(scene,x,y,4);
        this.titlePage = this.titlePage + `\n ${knowledge}`;
        this.knowledgeTitle = knowledge;
        this.picture = scene.add.image(0,0,'ejemplo');   
        this.buildPage(scene);
        this.mainTitle = new MainTitle(scene,0,0,'FANESCA',2);

        this.displayContent(scene);
    }

    displayContent(scene){
        this.contentGroup.add(this.picture);
        this.contentGroup.add(this.mainTitle);

        Phaser.Actions.GridAlign(this.contentGroup.getChildren(),{
            width:1,
            height:2,
            cellWidth:0,
            cellHeight:330,
            x:-235,
            y:0
        });

        this.addGroupContent(scene);

    }
}