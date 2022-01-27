module.exports = () =>{

    const shell = require('shelljs')

    const NZTK = require('../NZTK')
    
    shell.exec(`git clone https://github.com/Infinite-gh/ICMD-repo ./SHELL/temp/NZPM`)
    NZTK.moveFile('./SHELL/temp/NZPM/packages.json', "./SHELL/configs/NZPM/packages.json", " ", true)
    NZTK.moveFile('./SHELL/temp/NZPM/packagelist.txt', "./SHELL/configs/NZPM/packagelist.txt", " ", true)

    NZTK.log(`updated the repository`, `NZPM`, `refresh`)
}