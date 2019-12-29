class BootLoader extends Phaser.Scene{
    constructor(){
        super({key:'BootLoader'});
    }

    preload(){
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

        
    }

    create(){
        this.scene.launch('ChakraScene');
    }
}

export default BootLoader;