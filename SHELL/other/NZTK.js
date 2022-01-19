const log = require("./NZTKModules/log.js")
const setupps1 = require("./NZTKModules/setupps1.js")
const silentlog = require("./NZTKModules/silentlog")
const findinjson = require("./NZTKModules/findinjson")
const removedir = require("./NZTKModules/removedir")
const countfileindex = require("./NZTKModules/countfilelinex")

module.exports = {

    log: (loggedMsg, dir, file) => log(loggedMsg, dir, file),
    silentlog: (loggedMsg, dir, file) => silentlog(loggedMsg, dir, file),
    setupps1: (tosetup, username) => setupps1(tosetup, username),
    findinjson: (json, value) => findinjson(json, value),
    removedir: (dir) => removedir(dir),
    countfileindex: (file) => countfileindex(file)
}