import AssistantBtn from "../assistantBtn.js";
import { MAIN_UI_ATLAS } from "../../../consts/mainuiLib.js";

const ribbon_style={
    x:0,
    y:0,
    padding:{
        left:0,
        right:0,
        top:0,
        bottom:0
    },
    text:'MAMA DULU',
    style:{
        fontSize:'64px',
        fontFamily:'Helvetica',
        color:'#000',
        align:'center',
        stroke:'#000',
        strokeThickness:1
    }
}

export default class AssistantWindow extends Phaser.GameObjects.Container{
    box;
    ribbon;
    btnPanel;

    assistantCharacter;

    menuList=[];
    constructor(scene,x,y){
        super(scene,x,y);
        this.window = scene.add.image(0,0,MAIN_UI_ATLAS,'window_assistant');
        this.btnPanel = scene.add.image(0,0,MAIN_UI_ATLAS,'btn_box');
        this.ribbon = scene.add.image(0,0,MAIN_UI_ATLAS,'ribbon_assistant');
        this.add(this.window).setSize(this.window.width,this.window.height);
        this.assistantCharacter = scene.add.image(0,0,'mamaDulu');
        this.assistantCharacter.setScale(0.3);

        this.createWindow(scene);
        this.setBtnBehavior(scene);
    }


    createRibbon(scene){
        let assistantName = scene.make.text(ribbon_style);
        assistantName.setOrigin(0.5);
        let ribbonContainer = scene.add.container(0,0,[this.ribbon,assistantName]);
        ribbonContainer.setSize(this.ribbon.width,this.ribbon.height);
        return ribbonContainer;
    }

    createAssistantMenu(scene){
        let btnGroup = scene.add.group();
        let groupConfig = {
            width:5,
            height:1,
            cellWidth:100,
            cellHeight:20,
            x:-180,
            y:-55
        };
        let menuContainer = scene.add.container(0,0,[this.btnPanel]);
        menuContainer.setSize(this.btnPanel.width,this.btnPanel.height);
        for(let i=1;i<=5;i++){
            let btn = new AssistantBtn(scene,0,0,i);
            btnGroup.add(btn);
            this.menuList.push(btn);
        }
        Phaser.Actions.GridAlign(btnGroup.getChildren(),groupConfig);

        btnGroup.getChildren().forEach((el)=>{menuContainer.add(el);});

        return menuContainer;
    }

    createWindow(scene){
        let ribbonContent = this.createRibbon(scene);
        let menuContent = this.createAssistantMenu(scene);
        let contentGroup = scene.add.group([ribbonContent,menuContent]);
        let groupConfig = {
            width:1,
            height:2,
            cellwidth:200,
            cellHeight:470,
            x:-280,
            y:-80
        };

        Phaser.Actions.GridAlign(contentGroup.getChildren(),groupConfig);
        contentGroup.getChildren().forEach((el)=>{this.add(el)});
        
        this.add(this.assistantCharacter);
        this.assistantCharacter.setOrigin(0.5,0.6);
        scene.add.existing(this);
    }

    setBtnBehavior(scene){
        this.menuList.forEach((btn)=>{
            btn.setInteractive();
            btn.on('pointerdown',()=>{
                this.moveCharacter(scene)
            });
            btn.on('pointerup',()=>{
                this.returnCharacter(scene)
            })
        })
    }



    moveCharacter(scene){
        let xPosition = this.assistantCharacter.x;
        var assistantXMovement = {
            targets:this.assistantCharacter,
            props:{
                x:{from:xPosition, to:xPosition-200},
                ease:'Linear'
            },
            repeat:0
        }

        scene.tweens.add(assistantXMovement)
    }

    returnCharacter(scene){
        let xPosition = this.assistantCharacter.x;
        var assistantXMovement = {
            targets:this.assistantCharacter,
            props:{
                x:{from:xPosition, to:0},
            },
            repeat:0
        }

        scene.tweens.add(assistantXMovement)
    }







    
}