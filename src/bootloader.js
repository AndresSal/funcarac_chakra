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

        //carac
        // this.load.image('cajaPiezas','./assets/carac/piecesBox.png');
        // this.load.image('placaPiezas','./assets/carac/piecesPlaque.png');
        // this.load.image('cajaTablero','./assets/carac/boardBox.png');
        // this.load.image('placaTablero','./assets/carac/boardPlaque.png');
        // this.load.image('flechaPiezas','./assets/carac/arrow.png');
        // this.load.image('piezaRoja','./assets/carac/pieceRed.png');
        // this.load.image('piezaAmarilla','./assets/carac/pieceYellow.png');
        // this.load.image('piezaVerde','./assets/carac/pieceGreen.png');
        // this.load.image('piezaAzul','./assets/carac/pieceBlue.png');
        // this.load.image('fondoRojo','./assets/carac/backgroundRed.png');
        // this.load.image('fondoAmarillo','./assets/carac/backgroundYellow.png');
        // this.load.image('fondoVerde','./assets/carac/backgroundGreen.png');
        // this.load.image('fondoAzul','./assets/carac/backgroundBlue.png');
        // this.load.image('ranura','./assets/carac/slotBody.png');
        // this.load.image('etiqueta_pieza','./assets/carac/pieceLabel.png');

        //library
        this.load.image('libreria','./assets/library/library.png');
        this.load.image('placaLibreria','./assets/library/library_plaque.png');
        this.load.image('libro','./assets/library/book.png');
        this.load.image('cuerpoRelato','./assets/library/tale_body.png');
        this.load.image('ventanaRelato','./assets/library/tale_window.png');
        this.load.image('etiquetaRelato','./assets/library/tale_label.png');
        this.load.image('cuerpoRelato','./assets/library/tale_body.png');
        this.load.image('productoRelato','./assets/library/tale_food_view.png');
        this.load.image('nuevo','./assets/library/icon_new.png');
        this.load.image('liston','./assets/library/icon_complete.png');
        this.load.image('candado','./assets/library/icon_blocked.png');

        //base-page
        this.load.image('pagBase','./assets/relatos/base_page/blank_page.png');
        this.load.image('lazoPag','./assets/relatos/base_page/page_ribbon.png');
        this.load.image('esquinaPag','./assets/relatos/base_page/corner.png');
        this.load.image('pastaLibro','./assets/relatos/base_page/book-paste.png');
        this.load.image('separadorCuentos','./assets/relatos/base_page/separator_ch01.png');
        this.load.image('separadorFestividades','./assets/relatos/base_page/separator_ch02.png');
        this.load.image('separadorComidas','./assets/relatos/base_page/separator_ch03.png');
        this.load.image('separadorSeñas','./assets/relatos/base_page/separator_ch04.png');


        //cover-page
        this.load.image('tituloPortada','./assets/relatos/cover_page/label.png');
        this.load.image('recompensa','./assets/relatos/cover_page/priceBox.png');

        //pieces-page
        this.load.image('etiquetaGrande','./assets/relatos/pieces_page/big_label.png');
        this.load.image('caja_para_piezas','./assets/relatos/pieces_page/piece_box.png');

        //picture-page
        this.load.image('etiquetaIndice','./assets/relatos/picture_page/index_label.png');
        this.load.image('ventanaIndice','./assets/relatos/picture_page/index_window.png');
        this.load.image('etiquetaParrafo','./assets/relatos/picture_page/paragraph_label.png');


        //carnet
        //id-card
        this.load.image('cuerpoIDCard','./assets/carnet/id-card/id-card-body.png');

        //photo-box
        this.load.image('cajaRetrato','./assets/carnet/photo-box/photo_box.png');
        this.load.image('retrato','./assets/carnet/photo-box/portrait.png');

        //map-box
        this.load.image('cuerpoMapa','./assets/carnet/map-box/map-body.png');
        this.load.image('mapa','./assets/carnet/map-box/map-example.png');
        this.load.image('cajaInternaMapa','./assets/carnet/map-box/map-inner-body.png');
        this.load.image('etiquetaMapa','./assets/carnet/map-box/map-label.png');

        //data-box
        this.load.image('cajaDatos','./assets/carnet/data-box/data-box.png');
        this.load.image('campoDatos','./assets/carnet/data-box/field-data.png');


       //contenido principal
        this.load.image('ejemplo','./assets/contenido_principal/saberes/ejemplo.png');
        this.load.image('ejemploCuento','./assets/contenido_principal/cuentos/ejemplo_cuento.png');

        //info-cards
        this.load.image('cuerpoCartilla','./assets/cartillas/modelo1/info-card-body.png');
        this.load.image('etiquetaCartilla','./assets/cartillas/modelo1/info-card-label.png');
        this.load.image('campoInformativo','./assets/cartillas/modelo1/info-card-field.png');
        this.load.image('iconoCerebro','./assets/cartillas/modelo1/brain-icon.png');
        this.load.image('cuerpoCartillaChica','./assets/cartillas/modelo2/info-card-body_smll.png');
        this.load.image('cajaCartillaChica','./assets/cartillas/modelo2/info-card-box_smll.png');
        this.load.image('ejemploIlustracion','./assets/cartillas/modelo2/pic-example.png');

        this.load.image('estrella','./assets/iconos/estrella.png');

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