module.exports = (package, rl, user) =>{

    let repo = require('../../configs/NZPM/packages.json') 

    const shell = require('shelljs')
    const fs = require('fs')
    const NZTK = require('../NZTK')

    const theRepo = NZTK.findinjson(repo, package)

    switch(theRepo){

        case "404":
            
            NZTK.log(`can't find ${package} in the repository.`, 'NZPM', 'install')
        break;

        default:

            shell.exec(`git clone ${theRepo} ./SHELL/temp/NZPM/${package}`)
            const installer = require(`../../temp/NZPM/${package}/install.js`)
            installer(rl, user)
        break;
    }  
}