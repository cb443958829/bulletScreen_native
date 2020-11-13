function isObject(value) {
  var toString = Object.prototype.toString.call(value)
  return toString === '[object Object]'
}
function isArray(value) {
  return Array.isArray(value)
}
// 获取文本宽度
function getContentWidth(content, fontSize) {
  const _span = document.createElement('span')
  _span.innerText = content
  _span.style.fontSize = 20 + 'px'
  _span.style.position = 'absolute'
  document.body.appendChild(_span)
  var _spanWidth = _span.offsetWidth
  document.body.removeChild(_span)
  return _spanWidth
}
// 设置弹幕的初始位置
function getContentPosition(canvas, fontSize, ctx) {
  const X = canvas.width
  const Y = Math.ceil(((canvas.height - fontSize) / fontSize) * Math.random()) * fontSize
  ctx.X = X
  ctx.Y = Y
}
// 倒计时
function countdown(oTime, oBtn) {
  var time = parseFloat(oTime.innerText)
  let timer = setInterval(() => {
    time -= 0.1
    oTime.innerText = time.toFixed(1)
    if (time <= 0) {
      oBtn.disabled = false
      oTime.innerText = 5
      clearInterval(timer)
    }
  }, 100)
}
// 弹幕总数统计
function countTotal(oCount) {
  let count = parseInt(oCount.innerText)
  console.log(count)
  oCount.innerText = count + 1
  
}
export { isArray, isObject, getContentWidth, getContentPosition, countdown, countTotal }
