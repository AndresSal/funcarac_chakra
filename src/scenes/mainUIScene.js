import ModuleBtn from "../gameObjects/mainUI/moduleBtn.js";
import AssistantBtn from "../gameObjects/mainUI/assistantBtn.js";
import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from "../consts/mainuiLib.js";

const SCALE_RATIO = window.devicePixelRatio/2;
class MainUIScene extends Phaser.Scene{
    contentGroup;
    btnGroup;
    menuBtnGroup;


    moduleBox;
    btnBox;
    assistantBox;

    selectedModuleBtn;
    moduleTitle;
    
    constructor(key){
        super({key:'MainUIScene'});
    }

    init(){
        this.input.setDefaultCursor('url(assets/cursores/manita.cur),pointer');
        localStorage.setItem('currentCursor','url(assets/cursores/manita.cur),pointer');
    }

    create(){
        this.addAsistantContent();
        this.addModuleBttn();
        this.addModuleContent();
        this.alignUIElements();
        this.scene.launch('ChakraScene');
        this.scene.sleep('ChakraScene');
        this.scene.launch('LibraryScene');
        this.scene.sleep('LibraryScene');
        this.scene.launch('CaracScene');
    }

    update(){
        this.setModuleBtnBehavior();
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
        let moduleRibbon = this.add.image(0,0,'listonModulo');
        this.moduleTitle = this.add.text(-moduleRibbon.width/4+moduleRibbon.width/10,-moduleRibbon.height/3-moduleRibbon.height/20,'Bienvenido',
        {fontFamily:'Helvetica',
         fontSize:'60px',
         color:'#000',
         stroke:'#000',
         strokeThickness:1,
         align:'center'
        });

        let titleContent = this.add.container(0,-DEFAULT_HEIGHT/2+DEFAULT_HEIGHT/10,[moduleRibbon,this.moduleTitle]);
        titleContent.setSize(moduleRibbon.width, moduleRibbon.height);

        this.moduleBox = this.add.container(0,0);
        this.moduleBox.add([moduleWindow,titleContent]).setSize(moduleWindow.width,moduleWindow.height);
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
            x:DEFAULT_WIDTH/6+DEFAULT_WIDTH/100,
            y:DEFAULT_HEIGHT/4+DEFAULT_HEIGHT/20,
        })
    }

    addAsistantContent(){
        this.assistantBox = this.add.container(0,0);
        let content = this.add.group();
        this.menuBtnGroup = this.add.group();
        let window = this.add.image(0,0,'ventanaAsistente');
        let ribbon = this.add.image(0,0,'listonAsistente');
        let asistantName = this.add.text(-ribbon.width/4+ribbon.width/40,-ribbon.height/4,'MAMA DULU',
            {fontFamily:'Helvetica',
            fontSize:'40px',
            color:'#000',
            stroke:'#000',
            strokeThickness:1,
            align:'center'
            });

        let btnPanel = this.add.image(0,0,'cajaBotones');
        
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

    setModuleBtnBehavior(){
        this.btnGroup.getChildren().forEach((btn)=>{
            btn.on('pointerdown',()=>{
                this.selectedModuleBtn = btn;
                this.moduleTitle.setText(this.selectedModuleBtn.data.title).setFontSize(40);
                if(btn.data.id===1){
                    this.scene.sleep('ChakraScene');
                    this.scene.sleep('LibraryScene');
                    this.scene.wake('CaracScene');
                    // this.scene.launch('CaracScene');
                }
                if(btn.data.id===2){
                    this.scene.sleep('CaracScene');
                    this.scene.sleep('ChakraScene');
                    this.scene.wake('LibraryScene');
                    // this.scene.launch('CaracScene');
                }
                if(btn.data.id===3){
                    this.scene.sleep('CaracScene');
                    this.scene.sleep('LibraryScene');
                    this.scene.wake('ChakraScene');
                    // this.scene.launch('ChakraScene');
                }
                btn.body.setTint(0xae091a);
                // btn.selectButton();

            });
            btn.on('pointerup',()=>{
                this.btnGroup.getChildren().forEach((b)=>{
                    if(b!=this.selectedModuleBtn){
                        b.body.clearTint();
                        // b.text.setColor('#000000');
                        // b.text.setStroke('#000000',1);
                    }
                })
            })
        })
    }

}

export default MainUIScene;