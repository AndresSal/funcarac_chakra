// import Phaser from 'phaser'
export default class FpsText extends Phaser.GameObjects.Text {
    constructor(scene) {
        super(scene, 200, 130, '', { color: 'black', fontSize: '28px' });
        scene.add.existing(this)
        this.setOrigin(0)
    }

    update() {
        this.setText(`fps: ${Math.floor(this.scene.game.loop.actualFps)}`);
    }
}
