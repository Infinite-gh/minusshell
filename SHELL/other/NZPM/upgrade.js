
module.exports = (NZSHHStuff) =>{
    
    const install = require('./install')

    let toUpdate = require('../../configs/NZPM/toupdate.json')
    let amount = toUpdate.packages.length

    console.log(amount)

    for(let i = amount; i--; i = 0){

        var package = toUpdate.packages[i]

        console.log(package)

        install(package, NZSHHStuff.appStuff.rl, NZSHHStuff.users.current)
    }
}