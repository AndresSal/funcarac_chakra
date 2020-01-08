import ModuleBtn from "../gameObjects/mainUI/moduleBtn.js";
import AssistantBtn from "../gameObjects/mainUI/assistantBtn.js";

class MainUIScene extends Phaser.Scene{
    contentGroup;
    btnGroup;
    menuBtnGroup;


    moduleBox;
    btnBox;
    assistantBox;
    
    constructor(){
        super({key:'MainUIScene'});
    }

    create(){
        this.addAsistantContent();
        this.addModuleBttn();
        this.addModuleContent();
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
        this.contentGroup.add(this.assistantBox);
        this.contentGroup.add(this.moduleBox);
        this.contentGroup.add(this.btnBox);
        
        
        Phaser.Actions.GridAlign(this.contentGroup.getChildren(),{
            width:2,
            height:2,
            cellWidth:635,
            cellHeight:711,
            x:840,
            y:360
        })
    }

    addAsistantContent(){
        this.assistantBox = this.add.container(1000,800);
        let content = this.add.group();
        this.menuBtnGroup = this.add.group();
        let window = this.add.image(0,0,'ventanaAsistente');
        let ribbon = this.add.image(0,0,'listonAsistente');
        let btnPanel = this.add.image(0,0,'cajaBotones');
        let asistantName = this.add.text(0,0,'MAMA DULU');
        let ribbonBox = this.add.container(0,0);
        let btnBox = this.add.container(0,0);

        this.assistantBox.add(window).setSize(window.width,window.height);

        ribbonBox.add([ribbon,asistantName]).setSize(ribbon.width,ribbon.height);
        
        for (let i=1;i<=5;i++){
            let btn = new AssistantBtn(this,0,0,i);
            this.menuBtnGroup.add(btn);
        }
        Phaser.Actions.GridAlign(this.menuBtnGroup.getChildren(),{
            width:5,
            height:1,
            cellWidth:100,
            cellHeight:20,
            x:-180,
            y:-55
        })
        
        btnBox.add(btnPanel).setSize(btnPanel.width,btnPanel.height);
        this.menuBtnGroup.getChildren().forEach((item)=>{
            btnBox.add(item);
        });

        content.add(ribbonBox);
        content.add(btnBox);

        Phaser.Actions.GridAlign(content.getChildren(),{
            width:1,
            height:2,
            cellwidth:200,
            cellHeight:470,
            x:-280,
            y:-80
        });

        content.getChildren().forEach((item)=>{
            this.assistantBox.add(item);
        });
    }

}

export default MainUIScene;