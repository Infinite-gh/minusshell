module.exports = async (args) =>{

    let repo = require('../../configs/NZPM/packages.json') 

    const shell = require('shelljs')
    const fs = require('fs')
    const fse = require('fs-extra')
    const NZTK = require('../NZTK')

    const theRepo = NZTK.findinjson(repo, args[2])
    
    // base class

    class Install{

        constructor(package, url){

            this.package = package
            this.url = url
        }
        
        install = () =>{

            NZTK.log(`using git to download ${this.package}.`, "NZPM", "install")
            
            shell.exec(`git clone ${this.url} ./SHELL/temp/NZPM/${this.package}`)

            NZTK.log(`checking dependencies of ${this.package}.`)

            const NPMDependencies = NZTK.readFile(`./SHELL/temp/NZPM/${this.package}/dependencies.txt`, ".", false)
            const MSHDependencies = NZTK.readFile(`./SHELL/temp/NZPM/${this.package}/MINUSSHELLdependencies.txt`, ".", false)
            const MSHDependenciesInstallable = MSHDependencies.split("\n")

            NZTK.log(`finished checking dependencies. installing them.`, "NZPM", "install")

            shell.exec(`npm i ${NPMDependencies}`)

            const MSHDepends = MSHDependenciesInstallable.length
            for(var i = 0; i < MSHDepends; i++){

                this.install(MSHDependenciesInstallable[i])
            }

            NZTK.log(`installed all dependencies for ${this.package}. removing the temporary files.`, "NZPM", "install")

            NZTK.removeFile(`./SHELL/temp/NZPM/${this.package}/dependencies.txt`)
            NZTK.removeFile(`./SHELL/temp/NZPM/${this.package}/MINUSSHELLdependencies.txt`)

            NZTK.log(`removed temporary files. beginning merging`, 'NZPM', "install")

            NZTK.moveFile(`./SHELL/temp/NZPM/${this.package}/.`, `./SHELL`, ",", false)
        }
    }

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

                    installSequence(args)
                }
            })
        break;

    }

    installSequence(args)
}