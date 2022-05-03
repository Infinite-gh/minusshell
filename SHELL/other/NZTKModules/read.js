module.exports = (file, customErrOut, CEOEnabled, app, user) =>{

    const fs = require('fs')
    const NZTKc = require('../NZTK')
    const NZTK = new NZTKc(app, user)
    fs.readFile(file, "utf-8", (err, data) =>{

        if(err){

            if(CEOEnabled){

                NZTK.log.error(customErrOut, 1, "read")
            }else{
    
                NZTK.log.error(err, 1, "read")
            }
        }else{

            NZTK.log.success(`read ${data} from ${file}`, 0, "yeh")
            return data
        }
    })
}