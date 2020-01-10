import Tale from "../gameObjects/library/tale.js";

class LibraryScene extends Phaser.Scene{
    talesGroup;
    constructor(){
        super({key:'LibraryScene'});
    }

    create(){
        this.displayContent();
    }

    displayContent(){
        this.talesGroup = this.add.group();
        let library = this.add.image(1800,700,'libreria');
        for(let i=1;i<=12;i++){
            let tale = new Tale(this,0,0);
            this.talesGroup.add(tale);
        }

        Phaser.Actions.GridAlign(this.talesGroup.getChildren(),{
            width:4,
            height:3,
            cellWidth: 180,
            cellHeight:260,
            x:1540,
            y:450
        });
    }


}
export default LibraryScene;