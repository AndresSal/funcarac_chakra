export default class BaseChapter {
    picturesJSON;
    knowledgeJSON;
    
    picturePagesList=[];
    infoPagesList=[];
    constructor(picturesData,knowledgeData){
        this.picturesJSON = picturesData;
        this.knowledgeJSON = knowledgeData;
    }
}