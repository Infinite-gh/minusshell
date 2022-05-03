module.exports = async (user) =>{

    const shell = require('shelljs')

    const NZTKc = require('../NZTK')
    const NZTK = new NZTKc("NZPM", user)
    
    await shell.exec(`git clone https://github.com/Infinite-gh/ICMD-repo ./SHELL/temp/NZPM`)
    
    NZTK.moveFile('./SHELL/temp/NZPM/packages.json', "./SHELL/configs/NZPM/packages.json", " ", false)
    NZTK.moveFile('./SHELL/temp/NZPM/packagelist.txt', "./SHELL/configs/NZPM/packagelist.txt", " ", false)
    
    await NZTK.removeDir('./SHELL/temp/NZPM')

    if(require('../../configs/NZPM/packages.json')){

        NZTK.log.success(`updated the repository`, 2, `refresh`)
    }   
}