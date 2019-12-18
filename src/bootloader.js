class BootLoader extends Phaser.Scene{
    constructor(){
        super({key:'BootLoader'});
    }

    preload(){
        this.load.image('cajaHtas','./assets/tools_box.png');
        this.load.image('placaHtas','./assets/plaque.png');
        this.load.image('bordeHta','./assets/tool_board.png');
        this.load.image('cuerpoHta','./assets/tool_body.png');
        this.load.image('etiquetaHta','./assets/tool_title.png');

        //seeds
        this.load.image('cajaSemillas','./assets/semillas/seeds_box.png');
        this.load.image('placaSemillas','./assets/semillas/box_plaque.png');
        this.load.image('cajaIntSemillas','./assets/semillas/inner_box.png');
        this.load.image('bordeSemilla','./assets/semillas/seed_board.png');
        this.load.image('cuerpoSemilla','./assets/semillas/seed_body.png');
        this.load.image('canasta','./assets/semillas/seed_basket.png');
        this.load.image('canastaBloqueada','./assets/semillas/unlocked_seed.png');
        this.load.image('etiquetaSemilla','./assets/semillas/seed_label.png');

        //chakras
        this.load.image('anden','./assets/anden/platform.png');
        this.load.image('placaAnden','./assets/anden/platform_plaque.png');
        this.load.image('bordeChakra','./assets/anden/chakra_board.png');
        this.load.image('chakraNatural','./assets/anden/grassed_chakra.png');
        this.load.image('chakraLimpiada','./assets/anden/cleaned_chakra.png');
        this.load.image('chakraAbonada','./assets/anden/fertilized_chakra.png');
        this.load.image('chakraSurcada','./assets/anden/lined_chakra.png');

        
    }

    create(){
        this.scene.launch('ChakraScene');
    }
}

export default BootLoader;