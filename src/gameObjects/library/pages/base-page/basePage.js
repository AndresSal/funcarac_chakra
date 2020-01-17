class BasePage extends Phaser.GameObjects.Container{
    ribbon;
    page;
    rightCorner;
    leftCorner;
    name;

    contentGroup;

    constructor(scene,x,y,name){
        super(scene,x,y);
    }

    buildPage(scene){
        this.page = scene.add.image(0,0,'pagBase');
        this.ribbon = scene.add.image(0,-this.page.height/2+70,'lazoPag');
        this.name = scene.add.text(0,0,name);

        
        let cornersGroup= scene.add.group();
        this.rightCorner = scene.add.image(0,0,'esquinaPag');
        this.leftCorner = scene.add.image(0,0,'esquinaPag');
        this.leftCorner.flipX=true;
        cornersGroup.add(this.leftCorner);
        cornersGroup.add(this.rightCorner);
        Phaser.Actions.GridAlign(cornersGroup.getChildren(),{
            width:2,
            height:1,
            cellWidth:this.page.width-45,
            cellHeight:30,
            x:-20,
            y:this.page.height/2-45
        }),

        this.add([this.page,this.ribbon,this.name,this.rightCorner,this.leftCorner])
        .setSize(this.page.width,this.page.height);
        scene.add.existing(this);
    }

    addGroupContent(scene){
        this.contentGroup.getChildren().forEach((el)=>{
            this.add(el);
            scene.add.existing(el);

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