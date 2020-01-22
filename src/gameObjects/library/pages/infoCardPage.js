import BasePage from "./base-page/basePage.js";
import InfoCardBig from "../components/info-card-components/info-card-big.js";
import InfoCardSmall from "../components/info-card-components/info-card-small.js";

export default class InfoCardPage extends BasePage{
    pageType;
    data;
    
    constructor(scene,x,y,typeID,data){
        super(scene,x,y,7);
        this.buildPage(scene);

        this.pageType= typeID;
        this.data = data;
        this.addContent(scene);
    }

    addContent(scene){
        switch (this.pageType){
            case 1:
                let infoCard = new InfoCardBig(scene,20,60,this.data);
                this.contentGroup.add(infoCard);
                break;
            case 2:
                let cellW, cellH;
                for(let i=0;i<3;i++){
                    let infoCard = new InfoCardSmall(scene,0,0,this.data);
                    cellW = infoCard.width;
                    cellH = infoCard.height; 
                    this.contentGroup.add(infoCard);
                }

                Phaser.Actions.GridAlign(this.contentGroup.getChildren(),{
                    width:1,
                    height:3,
                    cellWidth:cellW,
                    cellHeight:cellH+10,
                    position:6,
                    x:0,
                    y:-90
                })
                break;
        }

        this.addGroupContent(scene);

    }
}