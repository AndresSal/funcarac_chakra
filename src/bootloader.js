class BootLoader extends Phaser.Scene{
    constructor(){
        super({key:'BootLoader'});
    }

    preload(){
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222,0.8);
        progressBox.fillRect(400,400,320,50);
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

        this.load.on('progress',(value)=>{
            progressBar.clear();
            progressBar.fillStyle(0xffffff,1);
            progressBar.fillRect(410,410,300*value,30);
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
        this.scene.start('ChakraScene');
    }
}

export default BootLoader;