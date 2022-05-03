module.exports = (toLog, app, loudness, uName, file) =>{

    const config = require('../../../configs/logConf.json')
    const logSetup = require('./logSetup')

    const tomLoggery = logSetup(toLog, uName, "i", app, config.body)

    const logObject = {

        "message": tomLoggery,
        "loudness": loudness,
        "file": file,
        "dir": app,
        "type": "normal"
    }

    return logObject
}