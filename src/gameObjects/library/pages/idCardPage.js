import BasePage from "./base-page/basePage.js";
import IdCard from "../components/id-card-components/id-card.js";

export default class IdCardPage extends BasePage{
    idPhoto;
    constructor(scene,x,y,idPhoto){
        super(scene,x,y,6);
        this.idPhoto = idPhoto;
        this.buildPage(scene);
        
        let idcard = new IdCard(scene,0,58,this.idPhoto);
        this.contentGroup.add(idcard);
        this.addGroupContent(scene);
    }
}