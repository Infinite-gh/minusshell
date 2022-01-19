module.exports = (file, customErrOut, CEOEnabled) =>{

    const fs = require('fs')
    const NZTK = require('../NZTK')

    fs.readFile(file, (err, data) =>{

        if(err){

            if(CEOEnabled){

                NZTK.log(customErrOut)
            }else{
    
                NZTK.log(err)
            }
        }else{

            return data
        }
    })
}