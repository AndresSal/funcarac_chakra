import BasePage from "./base-page/basePage.js";
import TextLabel from "../components/textLabel.js";

export default class TaleStoryPage extends BasePage{
    constructor(scene,x,y){
        super(scene,x,y,5);
        this.buildPage(scene);
        let textLabelA = new TextLabel(scene,0,0,'Lorem ipsum dolor sit amet,\n consectetur adipiscing elit.\n Nulla aliquet quam lacus,\n imperdiet hendrerit arcu porta vel.');
        let textLabelB = new TextLabel(scene,0,0,'Lorem ipsum dolor sit amet,\n consectetur adipiscing elit.\n Nulla aliquet quam lacus,\n imperdiet hendrerit arcu porta vel.');
        let textLabelC = new TextLabel(scene,0,0,'Lorem ipsum dolor sit amet,\n consectetur adipiscing elit.\n Nulla aliquet quam lacus,\n imperdiet hendrerit arcu porta vel.');

        this.contentGroup.add(textLabelA);
        this.contentGroup.add(textLabelB);
        this.contentGroup.add(textLabelC);


        Phaser.Actions.GridAlign(this.contentGroup.getChildren(),
        {width:1,
        height:3,
        cellWidth:100,
        cellHeight:150,
        x:this.page.width/7-this.page.width/2,
        y:-70})
        this.addGroupContent(scene);
    }

}