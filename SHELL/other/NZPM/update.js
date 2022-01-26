module.exports = async () =>{

    const shell = require('shelljs')

    const NZTK = require('../NZTK')
    
    shell.exec(`git clone https://github.com/Infinite-gh/ICMD-repo ./SHELL/temp/NZPM`)
    await shell.exec(`rm ./SHELL/configs/NZPM/packages.json`)
    await shell.exec(`rm ./SHELL/configs/NZPM/packagelist.txt`)
    await shell.exec(`mv ./SHELL/temp/NZPM/packages.json ./SHELL/configs/NZPM/.`)
    await shell.exec(`mv ./SHELL/temp/NZPM/packagelist.txt ./SHELL/configs/NZPM/.`)
    await shell.exec(`rm -rf ./SHELL/temp/NZPM`)

    await NZTK.log(`updated the repository`, `NZPM`, `refresh`)
}