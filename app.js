const add = require('./utils.js')
const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file was created by node.js')
fs.appendFileSync('notes.txt', '\nI live in Brazil')

console.log("require started first")
console.log(add(1,3))