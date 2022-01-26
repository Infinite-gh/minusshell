module.exports = async (args, rl) =>{

    let repo = require('../../configs/NZPM/packages.json') 

    const shell = require('shelljs')
    const fs = require('fs')
    const NZTK = require('../NZTK')

    const theRepo = NZTK.findinjson(repo, args[2])

    switch(theRepo){

        case "404":
            
            NZTK.log(`can't find ${args[2]} in the repshellitory.`, 'NZPM', 'install')
        break;

        default:

            fs.readFile('./SHELL/configs/NZPM/installed.txt', 'utf8', (err, data) =>{

                if(err){

                    console.log(`there was an error reading list of installed packages. maybe create /configs/NZPM/installed.txt?`)
                }
                if(data.includes(args[2])){

                    console.log(`package "${args[2]}" is already installed.`)
                }else{

                    shell.exec(`git clone ${theRepo} ./SHELL/temp/NZPM/${args[2]}`)
                    const installer = require(`../../temp/NZPM/${args[2]}/install.js`)
                    installer(rl)
                }
            })
        break;
    }  
}