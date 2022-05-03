module.exports = (toLog, app, loudness, uName, file) =>{

    const clc = require('cli-color')

    const config = require('../../../configs/logConf.json')
    const logSetup = require('./logSetup')

    const tomLogger = logSetup(toLog, uName, "✕", app, config.body)
    const tomLoggerator = clc.red(tomLogger)
    const tomLoggeration = clc.bgBlack(tomLoggerator)
    const tomLoggery = clc.blink(tomLoggeration)
    
    const logObject = {

        "message": tomLoggery,
        "loudness": loudness,
        "file": file,
        "dir": app,
        "type": "error"
    }

    return logObject
}