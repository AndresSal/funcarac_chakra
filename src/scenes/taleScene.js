import BasePage from "../gameObjects/library/pages/base-page/basePage.js";
import CoverPage from "../gameObjects/library/pages/base-page/coverPage.js";

class TaleScene extends Phaser.Scene{
    constructor(){
        super({key:'TaleScene'});
    }

    create(){
        let coverPage = new CoverPage(this,700,700,'TUKTU PALLAY PACHA');
    }
}

export default TaleScene;