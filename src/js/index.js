import { bulletData } from '../assets/bulletData/bulletData'
import BulletScreen from './bulletScreen/BulletScreen'
console.log(bulletData)
// console.log(bulletData)
;((doc) => {
  // 获取弹幕数据

  // 获取doc元素
  const oVideoBullet = doc.getElementById('video'),
  // canvas
    oCanvasBullet = doc.getElementById('canvas'),
    // 弹幕输入框
    oInput = doc.getElementsByTagName('input')[0],
    // 添加按钮
    oBtn = doc.getElementsByClassName('button')[0],
    // 颜色按钮
    oColor = doc.getElementsByTagName('input')[1],
    // 倒计时文本
    oTime = doc.querySelector('.time'),
    // 弹幕总数文本
    oCount = doc.querySelector('.bulletCount')
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
    bulletScreen.addBulletData(oInput, oColor, oBtn, oTime, oCount)
    setTimeout(() => {
      bulletScreen.isOk = true
    }, 5000)
  }
  init()
})(document)
