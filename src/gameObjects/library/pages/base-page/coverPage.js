import BasePage from "./basePage.js";

class CoverPage extends BasePage{
    
    label;
    price_box;
    price;
    title;
    
    constructor(scene,x,y,title){
        super(scene,x,y,'Portada');
        this.buildPage(scene);
        this.nextPage();
        this.prevPage();

        this.initialStep(title);
        console.log(this.title);
        this.addContent(scene);
    }

    initialStep(title){
        this.title = title;
    }

    addContent(scene){
        this.label = scene.add.image(0,0,'tituloPortada');
        this.price_box = scene.add.image(0,0,'recompensa');
        this.price = scene.add.image(0,0,'liston');
        this.price.setScale(2.5);
        this.price.setTint(0x000);
        let titleText = scene.add.text(-this.label.width/2+this.label.width/30,-this.height/40,this.title,
            {fontFamily:'Helvetica',
             fontSize:'40px',
             color:'#000'});

        let titleContent = scene.add.container(500,500,[this.label,titleText]);
        titleContent.setSize(this.label.width,this.label.height);

        let priceContent = scene.add.container(500,600,[this.price_box,this.price]);
        priceContent.setSize(this.price.width,this.price.height);


        this.contentGroup =  scene.add.group();
        this.contentGroup.add(titleContent);
        this.contentGroup.add(priceContent);

        Phaser.Actions.GridAlign(this.contentGroup.getChildren(),{
            width:1,
            height:2,
            cellWidth:100,
            cellHeight:350,
            position: Phaser.Display.Align.CENTER,
            x:700,
            y:530
        })

        this.addGroupContent(scene);
    }

}

export default CoverPage;
