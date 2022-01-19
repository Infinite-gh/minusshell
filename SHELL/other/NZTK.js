const log = require("./NZTKModules/log.js")
const setupps1 = require("./NZTKModules/setupps1.js")
const silentlog = require("./NZTKModules/silentlog")
const findinjson = require("./NZTKModules/findinjson")
const removedir = require("./NZTKModules/removedir")
const countfileindex = require("./NZTKModules/countfilelinex")
const readFile = require('./NZTKModules/read')
const removeFile = require('./NZTKModules/remove')
const moveFile = require('./NZTKModules/move')

module.exports = {

    log: (loggedMsg, dir, file) => log(loggedMsg, dir, file),
    silentlog: (loggedMsg, dir, file) => silentlog(loggedMsg, dir, file),
    setupps1: (tosetup, username) => setupps1(tosetup, username),
    findinjson: (json, value) => findinjson(json, value),
    removedir: (dir) => removedir(dir),
    countfileindex: (file) => countfileindex(file),
    readFile: (file, customErrorOutput, CEOEnabled) => readFile(file, customErrorOutput, CEOEnabled),
    removeFile: (file, customErrorOutput, CEOEnabled) => removeFile(file, customErrorOutput, CEOEnabled),
    moveFile: (file, destination, customErrorOutput, CEOEnabled) => moveFile(file, destination, customErrorOutput, CEOEnabled)
}