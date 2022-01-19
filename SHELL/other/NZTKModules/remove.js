module.exports = (file, customErrorOutput, CEOEnabled) =>{

    const fs = require('fs')
    const NZTK = require('../NZTK')

    fs.unlink(file, (err) =>{

        if(err){

            if(CEOEnabled){

                NZTK.log(customErrorOutput)
            }else{

                NZTK.log(err)
            }
        }
    })
}