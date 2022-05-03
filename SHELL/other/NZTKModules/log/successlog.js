module.exports = (toLog, app, loudness, uName, file) =>{

    const clc = require('cli-color')

    const config = require('../../../configs/logConf.json')
    const logSetup = require('./logSetup')

    const tomLogger = logSetup(toLog, uName, "✓", app, config.body)
    const tomLoggery = clc.green(tomLogger)

    const logObject = {

        "message": tomLoggery,
        "loudness": loudness,
        "file": file,
        "dir": app,
        "type": "success"
    }

    return logObject
}