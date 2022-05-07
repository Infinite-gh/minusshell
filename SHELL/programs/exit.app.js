module.exports = {
    name: "exit",
    desc: "shut down the shell",
    version: "beta 0.0.3",
    usage: "exit",
    run: (args, line, user, apps, rl, programs, users) =>{
        
        // one of the most fundamental cmds
        
        const NZTKc = require('../other/NZTK')
        const NZTK = new NZTKc("exit", user)

        NZTK.log.normal(`ended a session.`, 2, "nope")
        process.exit()
    }
}