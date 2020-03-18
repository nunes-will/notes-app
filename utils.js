console.log('utils.js')

const name = "Mike"

// module.exports  = 'Used to export things from other packages. Everything add to it is going
// to be returned/available to the other package'

const add = function (a, b) {
    return a + b
}

module.exports = add