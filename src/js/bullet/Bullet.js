import { getContentWidth, getContentPosition } from '../../utils/index'
export default class Bullet {
    constructor(bullet, sCtx) {
        this.content = bullet.content
        this.runTime = bullet.runTime
        this.bullet = bullet
        this.ctx = sCtx
        this.initialize()
    }
    initialize(){
        this.color = this.bullet.color || this.ctx.bullet.color
        this.speed = this.speed || this.ctx.speed
        this.fontSize = 20
        this.width = getContentWidth(this.content, this.fontSize)
        getContentPosition(this.ctx.canvas, this.fontSize, this)
        // console.log(this)
    }
    // 画的方法
    draw() {
        const { canvasCtx } = this.ctx
        // console.log(this.color)
        canvasCtx.font = this.fontSize + 'px Microsoft Yahei'
        canvasCtx.fillStyle = this.color
        canvasCtx.fillText(this.content, this.X, this.Y)
    }
}