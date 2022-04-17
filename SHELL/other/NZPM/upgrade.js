
module.exports = async (rl, user) =>{
    
    const install = require('./install')

    let toUpdate = require('../../configs/NZPM/toupdate.json')
    let amount = toUpdate.packages.length

    console.log(amount)

    for(let i = amount; i--; i = 0){

        console.log(`doin your mom (pkg ${i}/${amount})`)

        var package = toUpdate.packages[i]

        console.log(package)

        install(package, rl, user)
    }
}