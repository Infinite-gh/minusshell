
module.exports = async () =>{

    const shell = require('shelljs')
    const fs = require('fs')
    const fse = require('fs-extra')

    let repo = require('../../configs/NZPM/packages.json')
    const mainConfig = require('../../configs/NZPM/mainConf.json')

    const NZTK = require('../NZTK')

    // base class

    class install{
        constructor(pkg, repo){
            this.packageToInstall = pkg 
            this.repo = repo
        }
        async download(){
            shell.exec(`git clone ${findInJson(this.repo, this.packageToInstall)} ./SHELL/temp/NZPM`)

            await NZTK.log(`downloaded the package ${this.packageToInstall}.`, `NZPM`, `update`)
        }
    }

    // the one for installing packages

    class installPackage extends install{
        async setup(){

            // move the dependencies file

            fs.rename(`./SHELL/temp/NZPM/dependencies.txt`, `./SHELL/temp/.`, function (err) {
                if (err) console.log(`there was an error while installing the package`)
                else console.log('successfully moved dependencies file')
            })

            // install the dependencies

            await fs.readFile('./SHELL/temp/dependencies.txt', 'utf8', (err, data) =>{
                if(err){
                    console.log(`an error occured while loading dependencies for this package.`)
                }else{
                    shell.exec(`npm i ${data}`)
                }
            })

            // copy the package

            fse.copy(`./SHELL/temp/NZPM/.`, `./SHELL/.`, {overwrite: true}, (err) =>{
                if(err){                 
                    console.log(`there was an error while installing this package`)      
                }else{
                    console.log("successfully copied the package files");
                }
            });

            // remove the garbaj

            // remove the temporary package files

            NZTK.removedir(`./SHELL/temp/NZPM`)
            
            // remove dependencies.txt

            await fs.unlink('./SHELL/temp/dependencies.txt', (err) =>{
                if(err) console.log(`there was an error while removing temporary package files`);
                console.log('successfully deleted the dependencies file');
            });

            // add the package to the installed list

            await fs.appendFile('./SHELL/configs/NZPM/installed.txt', this.packageToInstall, (err) =>{
                if(err){
                    console.log(`an error occured.`)
                }
            })

            await NZTK.log(`installed package ${this.packageToInstall}`, `NZPM`, `install`)
        }
    }

    // the one for upgrading the shell

    class upgradeSHELL extends install{
        async setup(){
            fse.copy(`./SHELL/temp/NZPM/SHELL/.`, './SHELL/.', {overwrite: true}, (err) =>{
                if(err) console.log(`there was an error while upgrading the SHELL`)
            })
            
            NZTK.removedir(`./SHELL/temp/NZPM`)

            await NZTK.log(`updated the SHELL`, `NZPM`, `update`)
        }
    }

    // check the installed packages and update them

    fs.readFile('./SHELL/configs/NZPM/installed.txt', (err, data) =>{
        if(err){
            console.log(`there was an error`)
        }else{

            const a = `${data}`
            
            const b = a.split(" ")
            
            b.forEach(package =>{
                updatepackages(package)
            })

            if(mainConfig.SHELLreinstall === true){
                updateSHELL()
            }else{
                console.log(`updating the full shell is disabled.`)
            }
        }
    })

    // install scripts

    const updateSHELL = async () =>{
        const update = new upgradeSHELL(`update`, repo)
        update.download()
        await update.setup()
    }

    const updatepackages = async (package) =>{
        const thefunctions = new installPackage(package, repo)
        thefunctions.download()
        await thefunctions.setup()
    }

    await NZTK.log(`updated all the packages`, `NZPM`, `update`)
}