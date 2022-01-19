module.exports = async (args) =>{

    let repo = require('../../configs/NZPM/packages.json') 

    const shell = require('shelljs')
    const fs = require('fs')
    const fse = require('fs-extra')
    const NZTK = require('../NZTK')

    const theRepo = NZTK.findinjson(repo, args[2])
    
    // base class

    class install{

        constructor(pkg, repo){
            this.packageToInstall = pkg 
            this.repo = repo
        }

        async download(){
            shell.exec(`git clone ${NZTK.findinjson(this.repo, this.packageToInstall)} ./SHELL/temp/NZPM/package`)

            await NZTK.log(`downloaded the package ${this.packageToInstall}.`, `NZPM`, `install`)
        }
    }

    // the one for installing packages

    class installPackage extends install{
        async setup(){

            // install the dependencies

            await fs.readFile('./SHELL/temp/NZPM/package/dependencies.txt', 'utf8', (err, data) =>{

                if(err){

                    console.log(`an error occured while loading dependencies for this package.`)
                }else{

                    shell.exec(`npm i ${data}`)
                }
            })

            // remove the dependencies file

            await fs.unlink("./SHELL/temp/NZPM/package/dependencies.txt", (err) =>{ console.log("there was an error.")})

            // install minus shell dependencies

            await fs.readFile('./SHELL/temp/NZPM/package/MINUSSHELLdependencies.txt', 'utf8', (err, data) =>{

                if(err){

                    console.log(`the dependencies file is missing or empty  `)
                }else{

                    require('../NZPMTools').install(data.split("\n"))
                }
            })

            // remove dependencies.txt

            await fs.unlink('./SHELL/temp/NZPM/package/MINUSSHELLdependencies.txt', (err) =>{
                if(err) console.log(`there was an error while removing temporary package files`);
                console.log('successfully deleted the dependencies file');
            });

            // copy the package

            await fse.copy(`./SHELL/temp/NZPM/package/.`, `./SHELL/.`, {overwrite: true}, (err) =>{

                if(err){                 

                    console.log(`there was an error while installing this package`)      
                }else{

                    console.log("successfully copied the package files");
                }
            });
        }
    }

    const installSequence = async (args) =>{

        const daclass = new installPackage(args[2], repo)

        daclass.download()
        await daclass.setup()
        await NZTK.removedir("./SHELL/temp/NZPM/package")

        NZTK.log(`installing finished`, `NZPM`, `install`)
    }


    // switch(theRepo){

    //     case "404":
    //         NZTK.log(`can't find ${args[2]} in the repshellitory.`, 'NZPM', 'install')
    //     break;

    //     default:
    //         fs.readFile('./SHELL/configs/NZPM/installed.txt', 'utf8', (err, data) =>{

    //             if(err){

    //                 console.log(`there was an error reading list of installed packages. maybe create /configs/NZPM/installed.txt?`)
    //             }
    //             if(data.includes(args[2])){

    //                 console.log(`package "${args[2]}" is already installed.`)
    //             }else{

    //                 installSequence(args)
    //             }
    //         })
    //     break;

    // }

    installSequence(args)
}