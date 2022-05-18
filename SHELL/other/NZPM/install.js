module.exports = (package, rl, user) =>{

    // simple yet effective

    let repo = require('../../configs/NZPM/packages.json') 

    const shell = require('shelljs')
    const NZTKc = require('../NZTK')
    const NZTK = new NZTKc("NZPM", user)

    let end 

    NZTK.findInJson(repo, package, (theRepo) =>{

        if(theRepo === "ERROR//404") return
        
        shell.exec(`git clone ${theRepo} ./SHELL/temp/NZPM/${package}`)
        const installer = require(`../../temp/NZPM/${package}/install.js`)
        NZTK.log.normal(`starting installer for ${package}`)
        installer(rl, user, (data) =>{

            NZTK.log.success(`finished installing ${data}`, 1, "install")
            end = true
        })
        
        if(end) return
    })
}