module.exports = (file, destination, customErrorOutput, CEOEnabled) => {

    const fs = require('fs')
    const NZTK = require('../NZTK')

    fs.rename(file, destination, (err) =>{

        if(err){

            if(CEOEnabled){

                NZTK.log(customErrorOutput)
            }else{

                NZTK.log(err)
            }
        }
    })
}