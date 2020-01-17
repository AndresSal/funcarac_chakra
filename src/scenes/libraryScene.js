import Tale from "../gameObjects/library/tale.js";
import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from "../consts/mainuiLib.js";

class LibraryScene extends Phaser.Scene{
    talesGroup;
    constructor(){
        super({key:'LibraryScene'});
    }

    create(){
        this.displayContent();
        this.selectATale();
    }

    displayContent(){
        this.talesGroup = this.add.group();
        let library = this.add.image(DEFAULT_WIDTH/2+DEFAULT_WIDTH/6,DEFAULT_HEIGHT/2+DEFAULT_HEIGHT/10,'libreria');
        let statesList=['new','complete','blocked'];
        for(let i=1;i<=12;i++){
            let randomItem = statesList[Math.floor(Math.random()*3)];
            let tale = new Tale(this,0,0,randomItem);
            this.talesGroup.add(tale);
        }

        Phaser.Actions.GridAlign(this.talesGroup.getChildren(),{
            width:4,
            height:3,
            cellWidth: 190,
            cellHeight:271,
            x:DEFAULT_WIDTH/2+DEFAULT_WIDTH/40,
            y:DEFAULT_HEIGHT/2-DEFAULT_HEIGHT/10+5
        });
    }



    selectATale(){
        this.talesGroup.getChildren().forEach((t)=>{
            if(t.data.key==='new'){
                t.on('pointerdown',()=>{
                    this.scene.sleep('LibraryScene');
                    this.scene.launch('TaleScene');
                })
            }
        });
    }
}
export default LibraryScene;