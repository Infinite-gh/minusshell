module.exports = (file, customErrOut, CEOEnabled) =>{

    const fs = require('fs')
    const NZTK = require('../NZTK')
    fs.readFile(file, "utf-8", (err, data) =>{

        if(err){

            if(CEOEnabled){

                NZTK.log(customErrOut, "NZTK", "read")
            }else{
    
                NZTK.log(err, "NZTK", "read")
            }
        }else{

            NZTK.silentlog(`read ${data} from ${file}`)
            return data
        }
    })
}