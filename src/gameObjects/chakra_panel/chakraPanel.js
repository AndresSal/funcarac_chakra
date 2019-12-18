class ChakraPanel extends Phaser.GameObjects.Container{
    box;
    plant;
    water;
    compost;
    clock;
    status_bar;
    status_bar_body;


    constructor(scene,x,y){
        super(scene,x,y);
        this.box = scene.add.image(0,0,'chakraPanel');
        this.status_bar = scene.add.image(0,10,'barra_estado');
        this.status_bar_body = scene.add.image(0,10,'contenedor_barra')
        this.plant = scene.add.image(-55,6,'planta');
        this.water = scene.add.image(31,-10,'icono_agua');
        this.clock = scene.add.image(50,-10,'icono_reloj');
        this.compost = scene.add.image(10,-10,'icono_abono');

        this.add([this.box,this.status_bar_body,this.status_bar,this.plant,this.water,this.clock,this.compost]).setSize(this.box.width,this.box.height);
    }
}

export default ChakraPanel;