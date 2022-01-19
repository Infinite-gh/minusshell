module.exports = {
    name: "clear",
    desc: "clear the terminal screen",
    version: "beta 0.0.1",
    usage: "clear",
    run: function exit(){

        const NZTK = require('../other/NZTK')

        console.clear()
        NZTK.silentlog("cleared the screen", "clear", "history")
    }
}