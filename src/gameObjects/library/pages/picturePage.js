import BasePage from "./base-page/basePage.js";
import TaleStoryBox from "../components/taleStoryBox.js";

export default class PicturePage extends BasePage{
    indexPage;
    picture;
    totalPage;
    picKey;
    
    constructor(scene,x,y,picKey,indexNum,totalNum){
        super(scene,x,y,3);
        this.buildPage(scene);
        this.indexPage = indexNum;
        this.totalPage = totalNum;
        this.picKey= picKey;
        this.setContent(scene);
        
    }

    setContent(scene){
        this.picture = scene.add.image(0,0,this.picKey);
        let taleStoryBox = new TaleStoryBox(scene,0,0,this.indexPage,this.totalPage);
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
}