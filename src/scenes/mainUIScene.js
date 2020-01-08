import ModuleBtn from "../gameObjects/mainUI/moduleBtn.js";

class MainUIScene extends Phaser.Scene{
    contentGroup;
    btnGroup;


    moduleBox;
    btnBox;
    
    constructor(){
        super({key:'MainUIScene'});
    }

    create(){
        this.addModuleContent();
        this.addModuleBttn();
        this.alignUIElements();
    }

    addModuleBttn(){
        let btnWindow = this.add.image(0,0,'ventanaOpciones');
        this.btnBox = this.add.container(0,0);
        this.btnGroup = this.add.group();
        for(let i=1;i<=3;i++){
            let btn = new ModuleBtn(this,0,0,i);
            this.btnGroup.add(btn);
        }

        Phaser.Actions.GridAlign(this.btnGroup.getChildren(),{
            width:3,
            height:1,
            cellWidth:192,
            cellHeight:413,
            x:-194,
            y:0
        });

        this.btnBox.add(btnWindow).setSize(btnWindow.width,btnWindow.height);
        this.btnGroup.getChildren().forEach((el)=>{
            this.btnBox.add(el);
        })
        this.add.existing(this.btnBox);
    }

    addModuleContent(){
        let moduleWindow = this.add.image(0,0,'ventanaModulo');
        let moduleRibbon = this.add.image(5,-460,'listonModulo');
        this.moduleBox = this.add.container(0,0);
        this.moduleBox.add([moduleWindow,moduleRibbon]).setSize(moduleWindow.width,moduleWindow.height);
        this.add.existing(this.moduleBox);
    }

    alignUIElements(){
        this.contentGroup=this.add.group();
        this.contentGroup.add(this.btnBox);
        this.contentGroup.add(this.moduleBox);
        
        Phaser.Actions.GridAlign(this.contentGroup.getChildren(),{
            width:2,
            height:2,
            cellWidth:635,
            cellHeight:483,
            x:840,
            y:250
        })
    }
}

export default MainUIScene;