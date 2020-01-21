import { DEFAULT_WIDTH, DEFAULT_HEIGHT, AtlasInfo } from "./consts/mainuiLib.js";

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

        //game-logo
        this.load.image('logo','./assets/logo/phaser-logo.png');

        //main-ui
        this.load.image('ventanaModulo','./assets/mainUI/window_module.png');
        this.load.image('ventanaOpciones','./assets/mainUI/window_options.png');
        this.load.image('ventanaAsistente','./assets/mainUI/window_assistant.png');
        this.load.image('listonModulo','./assets/mainUI/ribbon_module.png');
        this.load.image('listonAsistente','./assets/mainUI/ribbon_assistant.png');
        this.load.image('cajaBotones','./assets/mainUI/btn_box.png');
        this.load.image('etiquetaBoton','./assets/mainUI/btn_label.png');
        this.load.image('flecha','./assets/mainUI/btn_arrow.png');
        this.load.image('guia','./assets/mainUI/btn_guide.png');
        this.load.image('ayuda','./assets/mainUI/btn_hint.png');
        this.load.image('silencio','./assets/mainUI/btn_mute.png');
        this.load.image('sonido','./assets/mainUI/btn_sound.png');
        this.load.image('saltar','./assets/mainUI/btn_omit.png');
        this.load.image('cuerpoOpcion','./assets/mainUI/opt_body.png');
        this.load.image('etiquetaOpcion','./assets/mainUI/opt_label.png');
        this.load.image('ventanaOpcion','./assets/mainUI/opt_window.png');
        this.load.image('iconoCarac','./assets/mainUI/carac.png');
        this.load.image('iconoRelatos','./assets/mainUI/tales.png');
        this.load.image('iconoChakra','./assets/mainUI/chakra.png');



        //tools
        this.load.image('cajaHtas','./assets/herramientas/tools_box.png');
        this.load.image('placaHtas','./assets/herramientas/plaque.png');
        this.load.image('bordeHta','./assets/herramientas/tool_board.png');
        this.load.image('cuerpoHta','./assets/herramientas/tool_body.png');
        this.load.image('etiquetaHta','./assets/herramientas/tool_title.png');
        this.load.image('abono','./assets/herramientas/abono.png');
        this.load.image('agua','./assets/herramientas/agua.png');
        this.load.image('azadon','./assets/herramientas/azadon.png');
        this.load.image('chisguete','./assets/herramientas/chisguete.png');
        this.load.image('pala','./assets/herramientas/pala.png');
        this.load.image('tijeras','./assets/herramientas/tijeras.png');

        //seeds
        this.load.image('cajaSemillas','./assets/semillas/seeds_box.png');
        this.load.image('placaSemillas','./assets/semillas/box_plaque.png');
        this.load.image('cajaIntSemillas','./assets/semillas/inner_box.png');
        this.load.image('bordeSemilla','./assets/semillas/seed_board.png');
        this.load.image('cuerpoSemilla','./assets/semillas/seed_body.png');
        this.load.image('canasta','./assets/semillas/seed_basket.png');
        this.load.image('canastaBloqueada','./assets/semillas/unlocked_seed.png');
        this.load.image('etiquetaSemilla','./assets/semillas/seed_label.png');

        //anden
        this.load.image('anden','./assets/anden/platform.png');
        this.load.image('placaAnden','./assets/anden/platform_plaque.png');
        this.load.image('bordeChakra','./assets/anden/chakra_board.png');
        
        
        //chakras
        this.load.image('chakraNatural','./assets/chakras/grassed_chakra.png');
        this.load.image('chakraLimpiada','./assets/chakras/cleaned_chakra.png');
        this.load.image('chakraAbonada','./assets/chakras/fertilized_chakra.png');
        this.load.image('chakraSurcada','./assets/chakras/lined_chakra.png');

        //maleza
        this.load.image('maleza','./assets/malezas/maleza.png');

        //panel control
        this.load.image('chakraPanel','./assets/anden/chakra_panel.png');
        this.load.image('planta','./assets/anden/chakra.png');
        this.load.image('icono_reloj','./assets/anden/clock.png');
        this.load.image('icono_abono','./assets/anden/compost.png');
        this.load.image('icono_agua','./assets/anden/water.png');
        this.load.image('contenedor_barra','./assets/anden/status_bar_body.png');
        this.load.image('barra_estado','./assets/anden/status_bar.png');

        //carac
        this.load.image('cajaPiezas','./assets/carac/piecesBox.png');
        this.load.image('placaPiezas','./assets/carac/piecesPlaque.png');
        this.load.image('cajaTablero','./assets/carac/boardBox.png');
        this.load.image('placaTablero','./assets/carac/boardPlaque.png');
        this.load.image('flechaPiezas','./assets/carac/arrow.png');
        this.load.image('piezaRoja','./assets/carac/pieceRed.png');
        this.load.image('piezaAmarilla','./assets/carac/pieceYellow.png');
        this.load.image('piezaVerde','./assets/carac/pieceGreen.png');
        this.load.image('piezaAzul','./assets/carac/pieceBlue.png');
        this.load.image('fondoRojo','./assets/carac/backgroundRed.png');
        this.load.image('fondoAmarillo','./assets/carac/backgroundYellow.png');
        this.load.image('fondoVerde','./assets/carac/backgroundGreen.png');
        this.load.image('fondoAzul','./assets/carac/backgroundBlue.png');
        this.load.image('ranura','./assets/carac/slotBody.png');
        this.load.image('etiqueta_pieza','./assets/carac/pieceLabel.png');

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


        //loading atlas files
        AtlasInfo.forEach((el)=>{
            this.load.path = el.path;
            this.load.atlas(el.key,el.texture,el.atlas);
            console.log('cargado atlas',el.key);
        });        
        
        //contenido principal
        this.load.image('ejemplo','./assets/contenido_principal/saberes/ejemplo.png');

        this.load.image('ejemploCuento','./assets/contenido_principal/cuentos/ejemplo_cuento.png');


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
            console.log('complete');
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            //this.scene.launch('ChakraScene');
        })
        
    }

    create(){
        var logo = this.add.image(400,300,'logo');
        // this.scene.start('ChakraScene');
        //this.scene.start('CaracScene');
        this.scene.start('MainUIScene');
    }
}

export default BootLoader;