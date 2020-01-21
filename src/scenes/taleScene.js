import BasePage from "../gameObjects/library/pages/base-page/basePage.js";
import CoverPage from "../gameObjects/library/pages/coverPage.js";
import PiecesPage from "../gameObjects/library/pages/piecesPage.js";
import PicturePage from "../gameObjects/library/pages/picturePage.js";
import TaleTitlePage from "../gameObjects/library/pages/taleTitlePage.js";
import TaleStoryBox from "../gameObjects/library/components/taleStoryBox.js";
import TextLabel from "../gameObjects/library/components/textLabel.js";
import TaleStoryPage from "../gameObjects/library/pages/taleStoryPage.js";
import ModalWindow from "../gameObjects/mainUI/window/modalWindow.js";
import PhotoBox from "../gameObjects/library/components/id-card-components/photo-box.js";
import MapBox from "../gameObjects/library/components/id-card-components/map-box.js";
import DataBox from "../gameObjects/library/components/id-card-components/data-box.js";
import IdCard from "../gameObjects/library/components/id-card-components/id-card.js";

class TaleScene extends Phaser.Scene{
    constructor(){
        super({key:'TaleScene'});
    }

    create(){
        // let coverPage = new CoverPage(this,800,700,'TUKTU PALLAY PACHA');
        // let knowledgePage = new TaleTitlePage(this,1350,700,'COMIDAS');

        // let piecesPage = new PiecesPage(this,1400,700);
        //let picturePage = new PicturePage(this,800,700);

        //let textLabelA = new TextLabel(this,700,700,'Lorem ipsum dolor sit amet,\n consectetur adipiscing elit.\n Nulla aliquet quam lacus,\n imperdiet hendrerit arcu porta vel.');
        //let taleStoryPage = new TaleStoryPage(this,1400,700);

        //let modalWindow = new ModalWindow(this,1400,700);

        let idcard = new IdCard(this,1000,800);
    }
}

export default TaleScene;