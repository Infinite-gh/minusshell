
module.exports = (NZSHHStuff, cb) =>{
    
    const install = require('./install')
    const NZTKc = require('../NZTK')
    const NZTK = new NZTKc('install', NZSHHStuff.users.current)

    let toUpdate = require('../../configs/NZPM/toupdate.json')
    let amount = toUpdate.packages.length

    NZTK.log.warn(`starting to update packages. ${amount} packages to update: ${toUpdate.packages}`, 1, "update")

    const installate = (pkg) =>{
        
        var package = toUpdate.packages[pkg]

        NZTK.log.warn(`updating package ${package} (${pkg}/${amount})`)

        install(package, NZSHHStuff.appStuff.rl, NZSHHStuff.users.current, () =>{

            NZTK.log.success(`updated ${package} (${pkg}/${amount})`)
            if(pkg <= amount){

                installate(pkg + 1)
            }else{

                cb()
            }
        })
    }   

    installate(0)
}