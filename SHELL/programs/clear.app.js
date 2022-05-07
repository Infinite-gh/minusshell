module.exports = {
    name: "clear",
    desc: "clear the terminal screen",
    version: "beta 0.0.2",
    usage: "clear",
    run: (args, line, user, apps, rl, programs, users) =>{

        // does the stuff

        const NZTKc = require('../other/NZTK')
        const NZTK = new NZTKc("clear", user)

        console.clear()

        return {

            name: "clear",
            exitCode: 0,
            value: "complete"
        }
    }
}