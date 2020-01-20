import BasePage from "../gameObjects/library/pages/base-page/basePage.js";
import CoverPage from "../gameObjects/library/pages/coverPage.js";
import PiecesPage from "../gameObjects/library/pages/piecesPage.js";
import PicturePage from "../gameObjects/library/pages/picturePage.js";
import TaleTitlePage from "../gameObjects/library/pages/taleTitlePage.js";
import TaleStoryBox from "../gameObjects/library/components/taleStoryBox.js";

class TaleScene extends Phaser.Scene{
    constructor(){
        super({key:'TaleScene'});
    }

    create(){
        // let coverPage = new CoverPage(this,800,700,'TUKTU PALLAY PACHA');
        // let knowledgePage = new TaleTitlePage(this,1350,700,'COMIDAS');

        // let piecesPage = new PiecesPage(this,1400,700);
        let picturePage = new PicturePage(this,1450,700);
    }
}

export default TaleScene;