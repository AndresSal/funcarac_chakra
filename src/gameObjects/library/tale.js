class Tale extends Phaser.GameObjects.Container{
    body;
    label;
    window;
    book;
    product_label;
    state;

    constructor(scene,x,y){
        super(scene,x,y);

        this.body = scene.add.image(0,0,'cuerpoRelato');
        this.book = scene.add.image(0,0,'libro');
        this.window = scene.add.image(0,0,'ventanaRelato');
        this.label = scene.add.image(0,0,'etiquetaLibrero');
        this.state = scene.add.image(0,0,'nuevo');
        this.product_label = scene.add.image(0,0,'productoRelato');

        let labelContent = scene.add.container(0,0);
        labelContent.add([this.label,this.product_label]).setSize(this.label.width,this.label.height);
        scene.add.existing(labelContent);
        this.add([this.body,this.window,this.book,labelContent,this.state]).setSize(this.body.width,this.body.height);
        scene.add.existing(this);
    }
}

export default Tale;