module.exports = (file, customErrorOutput, CEOEnabled, app, user) =>{

    const fs = require('fs')
    const NZTKc = require('../NZTK')
    const NZTK = new NZTKc(app, user)

    fs.unlink(file, (err) =>{

        if(err){

            if(CEOEnabled){

                NZTK.log.error(customErrorOutput, 1, "remove")
            }else{

                NZTK.log.error(err, 1, "remove")
            }
        }else{

            NZTK.log.success(`successfully deleted ${file}`, 1, "remove")
        }
    })
}