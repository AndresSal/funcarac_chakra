import { DEFAULT_WIDTH, DEFAULT_HEIGHT, AtlasInfo } from "./consts/mainuiLib.js";
import { talePictures } from "./data/tales/talesInformation.js";
import { andenResources, chakrasResources,chakrasControlPanelResources, totalResources } from "./data/loaderData.js";

class BootLoader extends Phaser.Scene{
    constructor(){
        super({key:'BootLoader'});
    }

    preload(){
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222,0.8);
        progressBox.fillRect(DEFAULT_WIDTH/2-DEFAULT_WIDTH/11,DEFAULT_HEIGHT/2-DEFAULT_HEIGHT/10,320,50);
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width/2,
            y:height / 2 - 50,
            text:'loading...',
            style:{
                font:'20px monospace',
                fill:'#ffffff'
            } 
        });
        loadingText.setOrigin(0.5,0.5);

        var percentText = this.make.text({
            x: width/2,
            y:height / 2 - 5,
            text:'0%',
            style:{
                font:'18px monospace',
                fill:'#ffffff'
            } 
        });
        percentText.setOrigin(0.5,0.5);

        var assetText = this.make.text({
            x: width/2,
            y:height / 2 + 50,
            text:'',
            style:{
                font:'18px monospace',
                fill:'#ffffff'
            } 
        });
        assetText.setOrigin(0.5,0.5);

        totalResources.forEach((resourcePack)=>{
            resourcePack.forEach((resource)=>{
                this.load.image(resource.key,resource.path);
            })
        })


        //loading example-tale pics
        talePictures.forEach((pic)=>{
            this.load.image(pic.key,pic.path);
        })


        //loading atlas files
        AtlasInfo.forEach((el)=>{
            this.load.path = el.path;
            this.load.atlas(el.key,el.texture,el.atlas);
        });
        

        

        this.load.on('progress',(value)=>{
            progressBar.clear();
            progressBar.fillStyle(0xffffff,1);
            progressBar.fillRect(DEFAULT_WIDTH/2-DEFAULT_WIDTH/11+10,DEFAULT_HEIGHT/2-DEFAULT_HEIGHT/10+10,300*value,30);
            percentText.setText(parseInt(value*100)+'%');
        });

        this.load.on('fileprogress',(file)=>{
            assetText.setText('Loading asset: '+file.key);
            // console.log('Loading asset: '+file.key);
        });

        this.load.on('complete',()=>{
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        })
        
    }

    create(){
        var logo = this.add.image(400,300,'logo');
        this.scene.start('MainUIScene');
    }
}

export default BootLoader;