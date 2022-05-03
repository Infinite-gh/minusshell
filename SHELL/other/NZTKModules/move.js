module.exports = (file, destination, customErrorOutput, CEOEnabled, app, user) => {

    const fs = require('fs')
    const NZTKc = require('../NZTK')
    const NZTK = new NZTKc(app, user)

    fs.rename(file, destination, (err) =>{

        if(err){

            if(CEOEnabled){

                NZTK.log.error(customErrorOutput, 1, "move")
            }else{

                NZTK.log.error(err, 1, "move")
            }
        }
    })
}