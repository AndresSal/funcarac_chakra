import BasePage from "./base-page/basePage.js";
import IdCard from "../components/id-card-components/id-card.js";

export default class IdCardPage extends BasePage{
    constructor(scene,x,y){
        super(scene,x,y,6);
        this.buildPage(scene);
        
        let idcard = new IdCard(scene,0,58,1);
        this.contentGroup.add(idcard);
        this.addGroupContent(scene);
    }
}