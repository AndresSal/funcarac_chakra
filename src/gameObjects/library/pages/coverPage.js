import BasePage from "./base-page/basePage.js";


class CoverPage extends BasePage{
    
    label;
    price_box;
    price;
    taleTitle;
    
    constructor(scene,x,y,titlePage){
        super(scene,x,y,'PORTADA\nDEL RELATO VIVENCIAL');
        this.buildPage(scene);
        this.leftCorner.visible=false;
        this.rightCorner.visible=false;
        this.taleTitle = titlePage;


        this.addContent(scene);
    }

    addContent(scene){
        this.label = scene.add.image(0,0,'tituloPortada');
        this.price_box = scene.add.image(0,0,'recompensa');
        this.price = scene.add.image(0,0,'liston');
        this.price.setScale(2.5);
        this.price.setTint(0x000);
        let titleText = scene.add.text(-this.label.width/2+this.label.width/30,-this.height/40,this.taleTitle,
            {fontFamily:'Helvetica',
             fontSize:'40px',
             color:'#000'});

        let titleContent = scene.add.container(0,0,[this.label,titleText]);
        titleContent.setSize(this.label.width,this.label.height);

        let priceContent = scene.add.container(0,0,[this.price_box,this.price]);
        priceContent.setSize(this.price_box.width,this.price_box.height);


        this.contentGroup.add(titleContent);
        this.contentGroup.add(priceContent);

        Phaser.Actions.GridAlign(this.contentGroup.getChildren(),{
            width:1,
            height:2,
            cellWidth:100,
            cellHeight:350,
            position: Phaser.Display.Align.CENTER,
            x:0,
            y:-160
        })

        this.addGroupContent(scene);
    }

}

export default CoverPage;
