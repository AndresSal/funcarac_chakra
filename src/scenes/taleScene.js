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
import IdCardPage from "../gameObjects/library/pages/idCardPage.js";
import InfoCardBig from "../gameObjects/library/components/info-card-components/info-card-big.js";
import InfoCardSmall from "../gameObjects/library/components/info-card-components/info-card-small.js";
import InfoCardPage from "../gameObjects/library/pages/infoCardPage.js";
import UiButton from "../gameObjects/library/components/buttons/ui-button/ui-button.js";
import QuizCard from "../gameObjects/library/components/quiz-card.js";

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
        let taleStoryPage = new TaleStoryPage(this,1400,700);

        //let modalWindow = new ModalWindow(this,1400,700);

        // let idCardPage = new IdCardPage(this,1000,800);

        // let infoCard = new InfoCardBig(this,1000,800);
        let JSONdata = {
            title:'PERRO ALEGRE',
            info:'Lorem ipsum dolor sit amet,\n consectetur adipiscing elit.\n Nulla aliquet quam lacus,\n imperdiet hendrerit arcu porta vel.'
        };
        // let infoCard = new InfoCardSmall(this,1000,800,JSONdata);

        // let infoPageA = new InfoCardPage(this,800,800,1,JSONdata);
        // let infoPageB = new InfoCardPage(this,1200,800,2,JSONdata);

        // let uiButton = new UiButton(this,500,500,'PRUEBA');

        let quizCard = new QuizCard(this,800,800,'TUKTU PALLAY PACHA');

    }
}

export default TaleScene;