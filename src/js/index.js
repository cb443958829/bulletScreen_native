import { bulletData } from '../assets/bulletData/bulletData'
import BulletScreen from './bulletScreen/BulletScreen'
// console.log(bulletData)
;((doc) => {
  // 获取doc元素
  const oVideoBullet = doc.getElementById('video'),
    oCanvasBullet = doc.getElementById('canvas'),
    oInput = doc.getElementsByTagName('input')[0],
    oBtn = doc.getElementsByClassName('button')[0],
    oColor = doc.getElementsByTagName('input')[1],
    oTime = doc.querySelector('.time')
  // 模化初始化函数
  const init = () => {
    // 实例化弹幕插件
    window.bulletScreen = new BulletScreen(oVideoBullet, oCanvasBullet, {
      bulletData,
    })
    bindEvent()
    bulletScreen.isOk = true
    bulletScreen.bulletPaused = true
  }
  // 绑定事件处理函数
  const bindEvent = () => {
    oBtn.addEventListener('click', handleAddBullet, false)
    oVideoBullet.addEventListener('play', handlePlay, false)
    oVideoBullet.addEventListener('pause', handlePause, false)
    oVideoBullet.addEventListener('seeked', handleSeeked, false)
  }
  function handlePlay() {
    bulletScreen.bulletPaused = false
    bulletScreen.render()
  }
  function handlePause() {
    bulletScreen.bulletPaused = true
  }
  function handleSeeked() {
    bulletScreen.reset()
  }
  const handleAddBullet = () => {
    if (bulletScreen.bulletPaused) return
    if (!bulletScreen.isOk) return
    bulletScreen.isOk = false
    bulletScreen.addBulletData(oInput, oColor, oBtn, oTime)
    setTimeout(() => {
      bulletScreen.isOk = true
    }, 5000)
  }
  init()

})(document)
