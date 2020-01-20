import BasePage from "./base-page/basePage.js";
import MainTitle from "../components/mainTitle.js";
import PriceBox from "../components/price_box.js";


class CoverPage extends BasePage{
    label;
    price_box;
    price;
    taleTitle;
    
    constructor(scene,x,y,titlePage){
        super(scene,x,y,1);
        this.buildPage(scene);
        this.leftCorner.visible=false;
        this.rightCorner.visible=false;
        this.taleTitle = titlePage;


        this.addContent(scene);
    }

    addContent(scene){
        let mainTitle = new MainTitle(scene,0,0,this.taleTitle,1);
        let priceBox = new PriceBox(scene,0,0);
        this.contentGroup.add(mainTitle);
        this.contentGroup.add(priceBox);

        Phaser.Actions.GridAlign(this.contentGroup.getChildren(),{
            width:1,
            height:2,
            cellWidth:100,
            cellHeight:280,
            position: Phaser.Display.Align.CENTER,
            x:0,
            y:-this.page.height/6+this.page.height/30
        })

        this.addGroupContent(scene);
    }

}

export default CoverPage;
