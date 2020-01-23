import BasePage from "./base-page/basePage.js";
import QuizCard from "../components/quiz-card.js";

export default class QuizPage extends BasePage{
    titleQuiz;

    constructor(scene,x,y, titleQuiz){
        super(scene,x,y,8);
        this.titleQuiz = titleQuiz;
        this.buildPage(scene);
        this.leftCorner.visible = false;
        this.rightCorner.visible = false;
        this.addQuizCard(scene);
    }

    addQuizCard(scene){
        let quizCard = new QuizCard(scene,0,0,this.titleQuiz);
        this.contentGroup.add(quizCard);
        Phaser.Actions.IncY(this.contentGroup.getChildren(),60);

        this.addGroupContent(scene);
    }


}