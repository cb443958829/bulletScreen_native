const fs = require('fs')
const path = require('path')
const Mock = require('mockjs')
const JSON5 = require('json5')

var readData = fs.readFileSync(path.join(__dirname,'./bulletData.json5'), 'utf-8')
var objReadData = JSON5.parse(readData)

var bulletDataArr = []
for(let i = 0; i< 1000; i++) {
    bulletDataArr.push(Mock.mock({
        objReadData
    }).objReadData)
}
console.log(bulletDataArr)
exports.bulletData = bulletDataArr
