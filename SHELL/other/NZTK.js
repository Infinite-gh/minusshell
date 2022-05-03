const log = require("./NZTKModules/log.js")
const setupps1 = require("./NZTKModules/setupps1.js")
const findinjson = require("./NZTKModules/findinjson")
const removedir = require("./NZTKModules/removedir")
const countfileindex = require("./NZTKModules/countfilelinex")
const readFile = require('./NZTKModules/read')
const removeFile = require('./NZTKModules/remove')
const moveFile = require('./NZTKModules/move')

module.exports = class NZTK{

    constructor(app, user){

        this.user = user
        this.app = app
    }

    log ={  

        test: () => {console.log("ok")}, 
        warn: (toLog, loudness, file) =>{log.warnLog(toLog, this.app, loudness, file, this.user.name)},
        error: (toLog, loudness, file) =>{log.errorLog(toLog, this.app, loudness, file, this.user.name)},
        success: (toLog, loudness, file) =>{log.successLog(toLog, this.app, loudness, file, this.user.name)},
        normal: (toLog, loudness, file) =>{log.normalLog(toLog, this.app, loudness, file, this.user.name)},
        critError: (toLog, loudness, file) =>{log.critErrorLog(toLog, this.app, loudness, file, this.user.name)}
    }
    
    setupps1(tosetup, callback){setupps1(tosetup, this.user.name, callback)}
    findInJson(json, value, callback){findinjson(json, value, callback, this.app, this.user)}
    removeDir(dir){removedir(dir, this.app, this.user)}
    countFileIndex(file){countfileindex(file)}
    readFile(file, customErrorOutput, CEOEnabled){readFile(file, customErrorOutput, CEOEnabled, this.app, this.user)}
    removeFile(file, customErrorOutput, CEOEnabled){removeFile(file, customErrorOutput, CEOEnabled, this.app, this.user)}
    moveFile(file, destination, customErrorOutput, CEOEnabled){moveFile(file, destination, customErrorOutput, CEOEnabled, this.app, this.user)}
}