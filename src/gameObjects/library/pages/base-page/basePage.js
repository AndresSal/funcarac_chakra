import { pagesInfo } from "../../../../consts/talesLib.js";

class BasePage extends Phaser.GameObjects.Container{
    ribbon;
    page;
    rightCorner;
    leftCorner;
    name;

    titlePage;
    pageInfo;


    contentGroup;

    constructor(scene,x,y,titleID){
        super(scene,x,y);
        this.pageInfo = pagesInfo.find((obj)=>{
            return obj.id===titleID;
        });

        this.titlePage = this.pageInfo.name;
        this.contentGroup = scene.add.group();
    }

    buildPage(scene){
        this.page = scene.add.image(0,0,'pagBase');
        this.ribbon = scene.add.image(0,0,'lazoPag');
        this.name = scene.add.text(-this.ribbon.width/2+this.ribbon.width/8,-this.ribbon.height/2+this.ribbon.height/10,this.titlePage,{fontFamily:'Helvetica',
        fontSize:'30px',
        color:'#000',
        align:'center'});
        let titlePageContainer = scene.add.container(0,-this.page.height/3,[this.ribbon,this.name]);
        titlePageContainer.setSize(this.ribbon.width,this.ribbon.height);
        scene.add.existing(titlePageContainer);

        
        let cornersGroup= scene.add.group();
        this.rightCorner = scene.add.image(0,0,'esquinaPag');
        this.leftCorner = scene.add.image(0,0,'esquinaPag');
        this.leftCorner.flipX=true;
        cornersGroup.add(this.leftCorner);
        cornersGroup.add(this.rightCorner);
        Phaser.Actions.GridAlign(cornersGroup.getChildren(),{
            width:2,
            height:1,
            cellWidth:this.page.width-43,
            cellHeight:30,
            x:-22,
            y:this.page.height/2-48
        }),

        this.add([this.page,titlePageContainer,this.rightCorner,this.leftCorner])
        .setSize(this.page.width,this.page.height);
        scene.add.existing(this);

        this.leftCorner.setInteractive();
        this.rightCorner.setInteractive();
    }

    addGroupContent(scene){
        this.contentGroup.getChildren().forEach((el)=>{
            this.add(el);
        })
    }

    nextPage(){
        this.rightCorner.setInteractive();
        this.rightCorner.on('pointerdown',()=>{
            console.log('siguiente página');
        });
    }

    prevPage(){
        this.leftCorner.setInteractive();
        this.leftCorner.on('pointerdown',()=>{
            console.log('página anterior');
        });
    }
}

export default BasePage;