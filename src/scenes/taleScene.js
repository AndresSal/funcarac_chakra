import BasePage from "../gameObjects/library/pages/base-page/basePage.js";

class TaleScene extends Phaser.Scene{
    constructor(){
        super({key:'TaleScene'});
    }

    create(){
        let basePage = new BasePage(this,700,700);
    }
}

export default TaleScene;