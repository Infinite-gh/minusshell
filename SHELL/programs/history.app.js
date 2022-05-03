module.exports = {
    name: "history",
    desc: "history of infinite shell",
    version: "does it really matter 1.0.0?",
    usage: "history",
    run: (args, rawUserInput, user, apps, readline, programs) =>{

        // mostly used as a test for NZPM, coming to the base -SH
        // also has basically no practical use in 2022
    
        const NZTKc = require('../other/NZTK')
        const NZTK = new NZTKc(app, user)
        const fs = require('fs')

        fs.readFile('./SHELL/logs/NZSHH/cmdhandler.txt', 'utf8', (err, data) =>{

            if(err){
                
                NZTK.log.error(`an error occured while reading the history of minus shell`, 2, "nada")
            }else{

                console.log(data)
            }
        })
    }
}
