const normalLogO = require('./log/normallog')
const errorLogO = require('./log/errorlog')
const warnLogO = require('./log/warnlog')
const successLogO = require('./log/successlog')
const critErrorLogO = require('./log/criticalerrorlog')

module.exports = {

    "normalLog": (toLog, app, loudness, file, uName) => normalLog(toLog, app, loudness, file, uName),
    "errorLog": (toLog, app, loudness, file, uName) => errorLog(toLog, app, loudness, file, uName),
    "warnLog": (toLog, app, loudness, file, uName) => warnLog(toLog, app, loudness, file, uName),
    "successLog": (toLog, app, loudness, file, uName) => successLog(toLog, app, loudness, file, uName),
    "critErrorLog": (toLog, app, loudness, file, uName) => critErrorLog(toLog, app, loudness, file, uName)
}

const logAnything = (logObject) =>{

    const fs = require('fs')
    
    fs.mkdir(`./SHELL/logs/${logObject.dir}`, (err) =>{
        
        // i don't care about the errors here
    })
    
    // check if the loudness is 1 or 3, where 1 is only save to hard drive, 2 is log and save and 3 is only show on the screen. no more console.log()!

    if(logObject.loudness == 0 || logObject.loudness == 1){

        fs.appendFile(`./SHELL/logs/${logObject.dir}/${logObject.file}.txt`, logObject.message, (err) => {

            if(err) console.log("an error occured by logging. this may be caused by the target folder not being there, this will fix itself")
        });
    }

    // i like nesting, if you don't then don't look at my code lmao

    if(logObject.loudness == 1 || logObject.loudness == 2){

        console.log(logObject.message)
    }
}

// boilerplate bois and gorls 

const normalLog = (toLog, app, loudness, file, uName) =>{

    const logObj = normalLogO(toLog, app, loudness, uName, file)
    logAnything(logObj)
}

const errorLog = (toLog, app, loudness, file, uName) =>{

    const logObj = errorLogO(toLog, app, loudness, uName, file)
    logAnything(logObj)
}

const warnLog = (toLog, app, loudness, file, uName) =>{

    const logObj = warnLogO(toLog, app, loudness, uName, file)
    logAnything(logObj)
}

const successLog = (toLog, app, loudness, file, uName) =>{

    const logObj = successLogO(toLog, app, loudness, uName, file)
    logAnything(logObj)
}

const critErrorLog = (toLog, app, loudness, file, uName) =>{

    const logObj = critErrorLogO(toLog, app, loudness, uName, file)
    logAnything(logObj)
}
