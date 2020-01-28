export default class BaseChapter {
    picturesData;
    knowledgeData;
    picturePagesList=[];
    infoPagesList=[];

    scene;

    constructor(scene,dataInformation){
        this.scene= scene;
        this.picturesData = dataInformation.picturesData;
        this.knowledgeData =dataInformation.informationData;
    }
}