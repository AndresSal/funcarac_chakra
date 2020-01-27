import ModuleBtn from "../gameObjects/mainUI/moduleBtn.js";
import AssistantBtn from "../gameObjects/mainUI/assistantBtn.js";
import { DEFAULT_WIDTH, DEFAULT_HEIGHT, MAIN_UI_ATLAS } from "../consts/mainuiLib.js";
import FpsText from "../gameObjects/fpsText.js";

class MainUIScene extends Phaser.Scene{
    contentGroup;
    btnGroup;
    menuBtnGroup;

    moduleBox;
    btnBox;
    assistantBox;

    uiSceneManager;
    scenesList;

    selectedModuleBtn;
    currentScene;
    moduleTitle;

    fps;
    
    constructor(key){
        super({key:'MainUIScene'});
    }

    init(){
        this.input.setDefaultCursor('url(assets/cursores/manita.cur),pointer');
        localStorage.setItem('currentCursor','url(assets/cursores/manita.cur),pointer');
    }

    create(){
        this.fps = new FpsText(this);
        this.fps.setDepth(1000); 
        this.addAsistantContent();
        this.addModuleBttn();
        this.addModuleContent();
        this.alignUIElements();
        
        this.setInitialScene();

        this.setModuleBtnBehavior();

        // this.scene.sleep('LibraryScene');
    }

    update(){
        this.fps.update();
    }

    setInitialScene(){
        this.scene.launch('ChakraScene');
        this.scene.launch('LibraryScene');
        this.scene.launch('CaracScene');
        this.scene.sleep('ChakraScene');
        this.scene.sleep('CaracScene');
        this.scene.sleep('LibraryScene');

        console.log(this.game.scene.scenes);

        this.selectedModuleBtn= this.btnGroup.getChildren()[0];
        this.selectedModuleBtn.selectButton();
        this.scene.wake(this.selectedModuleBtn.data.scene);
    }


    addModuleBttn(){
        let btnWindow = this.add.image(0,0,MAIN_UI_ATLAS,'window_options');
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
        let moduleWindow = this.add.image(0,0, MAIN_UI_ATLAS,'window_module');
        let moduleRibbon = this.add.image(0,0,MAIN_UI_ATLAS,'ribbon_module');
        
        //TODO migrar a un archivo json el estilo
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
        let window = this.add.image(0,0,MAIN_UI_ATLAS,'window_assistant');
        let ribbon = this.add.image(0,0,MAIN_UI_ATLAS,'ribbon_assistant');
        
        //TODO migrar el estilo a archivo JSON
        let asistantName = this.add.text(-ribbon.width/4+ribbon.width/40,-ribbon.height/4,'MAMA DULU',
            {fontFamily:'Helvetica',
            fontSize:'40px',
            color:'#000',
            stroke:'#000',
            strokeThickness:1,
            align:'center'
            });

        let btnPanel = this.add.image(0,0,MAIN_UI_ATLAS,'btn_box');
        
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
                this.input.setDefaultCursor('url(assets/cursores/manita.cur),pointer');
                
                let aux = [];
                this.scene.manager.getScenes(true).forEach((s)=>{
                    aux.push(s.scene.key);
                });

                if(btn.data.id===1){
                    console.log('drop it: ',aux);
                    this.scene.sleep('ChakraScene');
                    this.scene.sleep('LibraryScene');
                    this.scene.wake('CaracScene');
                }
                if(btn.data.id===2){
                    
                    
                    console.log('drop it: ',aux);
                    this.scene.sleep('CaracScene');
                    this.scene.sleep('ChakraScene');
                    this.scene.wake('LibraryScene');
                }
                if(btn.data.id===3){
                    console.log('drop it: ',aux);
                    this.scene.sleep('CaracScene');
                    this.scene.sleep('LibraryScene');
                    this.scene.wake('ChakraScene');
                }
                btn.selectButton();

            });
            btn.on('pointerup',()=>{
                this.btnGroup.getChildren().forEach((b)=>{
                    if(b!=this.selectedModuleBtn){
                        b.deselectButton();
                    }
                })
            })
        })
    }

}

export default MainUIScene;