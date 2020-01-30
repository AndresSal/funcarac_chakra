export default class DialogPLugin extends Phaser.Plugins.BasePlugin{    
    opts={};
    width;
    height;

    borderThickness;
    borderColor;
    borderAlpha;
    windowAlpha;
    windowColor;
    windowHeight;
    padding;
    closeBtnColor;
    dialogSpeed;

    eventCounter;
    constructor(pluginManager){
        super(pluginManager),

        pluginManager.registerGameObject('modalPlugin',this.createModal);
    }

    createModal(width,height,opts){
        this.width = width;
        this.height=height;
        if(!this.opts){
            this.opts={};
        }else{
            this.opts = opts;
        }
    }

    init(){
        this.borderThickness = this.opts.borderThickness || 3;
        this.borderColor = this.opts.borderColor || 0x907748;
        this.borderAlpha = this.opts.borderAlpha || 1;
        this.windowAlpha = this.opts.windowAlpha || 0.8;
        this.windowColor = this.opts.windowColor || 0x303030;
        this.windowHeight = this.opts.windowHeight || 150;
        this.padding = this.opts.padding || 32;
        this.closeBtnColor = this.opts.closeBtnColor || 'darkgoldenrod';
        this.dialogSpeed = this.opts.dialogSpeed || 3;
        this.eventCounter = 0;
        this.visible = true;
        this.createWindow();
    }

    createWindow(){
        this.createModal();
        var dimensions = this.calculateWindowDimensions(this.width, this.height);
        // this.graphics = this.scene.add.graphics();
 
        // this.createOuterWindow(dimensions.x, dimensions.y, dimensions.rectWidth, dimensions.rectHeight);
        // this.createInnerWindow(dimensions.x, dimensions.y, dimensions.rectWidth, dimensions.rectHeight);

        console.log('Medidas: w:',this.width,'h: ',this.height,'opt: ',this.opts);
    }

    calculateWindowDimensions(width,height){
        var x = this.padding;
        var y = height - this.windowHeight - this.padding;
        var rectWidth = width - (this.padding * 2);
        var rectHeight = this.windowHeight;
        return {
        x,
        y,
        rectWidth,
        rectHeight
        };
    }

    createInnerWindow(x,y,rectWidth,rectHeight){
        this.graphics.fillStyle(this.windowColor, this.windowAlpha);
        this.graphics.fillRect(x + 1, y + 1, rectWidth - 1, rectHeight - 1);
    }

    createOuterWindow(x,y,rectWidth,rectHeight){
        this.graphics.lineStyle(this.borderThickness, this.borderColor, this.borderAlpha);
        this.graphics.strokeRect(x, y, rectWidth, rectHeight);
    }








    

    // getGameWidth(scene){
    //     return scene.game.config.width;
    // }

    // getGameHeight(scene){
    //     return scene.game.config.height;
    // }

    // calculateWindowDimentions(width,height){
    //     var x = this.padding;
    //     var y = this.height - this.windowHeight - this.padding;
    //     var rectWidth = width - (this.padding*2);
    //     var rectHeight = this.windowHeight;
    //     return{x,y,rectWidth,rectHeight};
    // }

    // createInnerWindow(x,y,rectWidth,rectHeight){
    //     this.graphics.fillStyle(this.windowColor, this.windowAlpha);
    //     this.graphics.fillRect(x + 1, y + 1, rectWidth - 1, rectHeight - 1);
    // }

    // createOuterWindow(x, y, rectWidth, rectHeight) {
    //     this.graphics.lineStyle(this.borderThickness, this.borderColor, this.borderAlpha);
    //     this.graphics.strokeRect(x, y, rectWidth, rectHeight);
    // }

    // createWindow(){
    //     var gameHeight = this.getGameHeight();
    //     var gameWidth = this.getGameWidth();
    //     var dimensions = this.calculateWindowDimensions(gameWidth, gameHeight);
    //     this.graphics = this.scene.add.graphics();
 
    //     this.createOuterWindow(dimensions.x, dimensions.y, dimensions.rectWidth, dimensions.rectHeight);
    //     this.createInnerWindow(dimensions.x, dimensions.y, dimensions.rectWidth, dimensions.rectHeight);
    // }

}