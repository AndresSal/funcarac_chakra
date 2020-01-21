export default class ModalWindow extends Phaser.GameObjects.Container{
    body;
    ribbon;
    questionBody;
    
    constructor(scene,x,y){
        super(scene,x,y);

        this.body = scene.add.image(0,0,'quiz','quiz_window');
        this.ribbon = scene.add.image(0,0,'quiz','quiz_ribbon');
        this.ribbon.setOrigin(0.5,3.5);
        this.questionBody = scene.add.image(0,0,'quiz','quiz_question_body');
        this.questionBody.setOrigin(0.5,2.2);
        
        this.add([this.body,this.ribbon,this.questionBody]).setSize(this.body.width,this.body.height);
        scene.add.existing(this);
    }
}