import TextLabel from "./textLabel.js";
import UiButton from "./buttons/ui-button/ui-button.js";

export default class QuizCard extends Phaser.GameObjects.Container{
    titleQuiz;
    constructor(scene,x,y,title){
        super(scene,x,y);
        
        this.titleQuiz = title;

        this.createCard(scene);
    }

    createCard(scene){
        let cardBox = scene.add.image(0,0,'cuerpoCartilla');
        this.add(cardBox).setSize(cardBox.width,cardBox.height);

        let label = new TextLabel(scene,0,0,this.titleQuiz);
        label.setScale(0.6);
        label.list[1].setScale(1.3);


        let button = new UiButton(scene,0,0,'COMENZAR LA\nTRIVIA ANCESTRAL');
        button.setScale(0.6).setPosition(0.5);
        button.list[1].setScale(0.5);


        let scoreText = scene.add.text(0,0,'CALIFICACION',{fontFamily:'Arial Rounded MT',fontSize:'40px',color:'#E92929'});


        let scoreLabel = scene.add.image(0,0,'etiquetaGrande');
        scoreLabel.setScale(1.4,0.6);
        let scoreContainer = scene.add.container(0,0,[scoreLabel]);
        scoreContainer.setSize(scoreLabel.width,scoreLabel.height);

        let starGroup=scene.add.group();
        for(let i=0;i<3;i++){
            let star = scene.add.image(0,0,'estrella');
            starGroup.add(star);
        }

        Phaser.Actions.GridAlign(starGroup.getChildren(),{
            width:3,
            height:1,
            cellWidth:100,
            x:-85,
            y:15
        });

        starGroup.getChildren().forEach((el)=>{
            scoreContainer.add(el);
        });

        let group = scene.add.group([label,scoreText,scoreContainer,button]);

        Phaser.Actions.GridAlign(group.getChildren(),{
            width:1,
            height:4,
            cellWidth:label.width,
            cellHeight:label.height-15,
            position:6,
            y:-175
        });

        group.getChildren().forEach((el)=>{
            this.add(el);
        });

        scene.add.existing(this);
    }


}        