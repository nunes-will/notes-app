const validator = require('validator')
const chalk = require('chalk')

const add = require('./utils.js')
const fs = require('fs')
const getNotes = require('./notes')

fs.writeFileSync('notes.txt', 'This file was created by node.js')
fs.appendFileSync('notes.txt', '\nI live in Brazil')

console.log("require started first")
console.log(add(1,3))

console.log(chalk.black.bold.bgGreen(validator.isURL('https://print')))