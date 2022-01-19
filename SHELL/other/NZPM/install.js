module.exports = async (args) =>{

    let repo = require('../../var/NZPM/packages.json') 

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
            shell.exec(`git clone ${NZTK.findinjson(this.repo, this.packageToInstall)} ./SHELL/temp/NZPM`)

            await nztk.log(`downloaded the package ${this.packageToInstall}.`, `NZPM`, `install`)
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

            await fs.readFile('./SHELL/temp/MINUSSHELLdependencies.txt', 'utf8', (err, data) =>{

                if(err){

                    console.log(`an error occured while loading dependencies for this package.`)
                }else{

                    require('../NZPMTools').install(data.split("\n"))
                }
            })

            // copy the package

            fse.copySync(`./SHELL/temp/NZPM/.`, `./SHELL/.`, {overwrite: true}, (err) =>{
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

            await nztk.log(`installed package ${this.packageToInstall}`, `NZPM`, `install`)
        }
    }

    const installSequence = async (args) =>{

        const daclass = new installPackage(args[2], repo)

        daclass.download()
        daclass.setup()

        nztk.log(`installing finished`, `NZPM`, `install`)
    }


    switch(theRepo){

        case "404":
            nztk.log(`can't find ${args[2]} in the repshellitory.`, 'NZPM', 'install')
        break;

        default:
            fs.readFile('./SHELL/var/NZPM/installed.txt', 'utf8', (err, data) =>{
                if(err){
                    console.log(`there was an error reading list of installed packages. maybe create /var/NZPM/installed.txt?`)
                }
                if(data.includes(args[2])){
                    console.log(`package "${args[2]}" is already installed.`)
                }else{
                    installSequence(args)
                }
            })
        break;

    }
}