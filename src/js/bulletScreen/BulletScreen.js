import { isArray, isObject, countdown } from '../../utils/index'
import Bullet from '../bullet/Bullet'
export default class BulletScreen {
  constructor(oVideoBullet, oCanvasBullet, options) {
    if (!oVideoBullet || !oCanvasBullet || !isObject(options)) return
    if (!options.bulletData || !isArray(options.bulletData)) return
    this.video = oVideoBullet
    this.canvas = oCanvasBullet
    this.canvasCtx = canvas.getContext('2d')
    this.canvas.width = oVideoBullet.offsetWidth
    this.canvas.height = oVideoBullet.offsetHeight
    this.bulletScreenPaused = true

    Object.assign(this, options, {
      speed: 2,
      color: '#ccc',
      runTime: 0,
    })
    // console.log(this)
    this.bulletScreenPool = this.createBulletScreenPool()
    // console.log(this.bulletScreenPool)
  }
  createBulletScreenPool() {
    return this.bulletData.map((item) => new Bullet(item, this)
    )
  }
  // 渲染函数
  render() {
    this.clearRect()
    this.drawBullet()
    !this.bulletPaused && requestAnimationFrame(this.render.bind(this))
  }
  clearRect() {
    this.canvasCtx.clearRect(0,0, this.canvas.width, this.canvas.height)
  }
  // 重置弹幕
  reset() {
    this.clearRect()
    let currentTime = this.video.currentTime
    this.bulletScreenPool.map((bullet) => {
      bullet.stopDraw = false
      if(currentTime <= bullet.runTime) {
        bullet.isInitialized = false
      } else {
        bullet.stopDraw = true
      }
    })
  }
  // 添加弹幕
  addBulletData(oInput, oColor, oBtn, oTime) {
    if(!oInput.value) return
    oBtn.disabled = true
    countdown(oTime, oBtn)
    let inputValue = oInput.value.trim(),
    colorValue = oColor.value,
    currentTime = this.video.currentTime
    const _bulletData = {
      content: inputValue,
      runTime: currentTime,
      color: colorValue
    }
    this.bulletScreenPool.push(new Bullet(_bulletData, this))
    oInput.value = ''
    console.log(this.bulletScreenPool)
  }
  drawBullet() {
    let currentTime = this.video.currentTime
    this.bulletScreenPool.map((bullet) => {
      if(!bullet.stopDraw && (bullet.runTime <= currentTime)) {
        if(!bullet.isInitialized) {
          bullet.initialize();
          bullet.isInitialized = true
        }
        bullet.X -= bullet.speed
        bullet.draw()
        if(bullet.X <= bullet.width * -1) {
          bullet.stopDraw = true
        }
      }
    })
  }
}
