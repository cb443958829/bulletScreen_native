const path = require('path')
const fs = require('fs')
const JSON5 = require('json5')
const Mock = require('mockjs')

var json = fs.readFileSync(path.join(__dirname, './test.json5'), 'utf-8')
var jsonObj = JSON5.parse(json)