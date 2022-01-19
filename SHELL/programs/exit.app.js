module.exports = {
    name: "exit",
    desc: "shut down the shell",
    version: "beta 0.0.2",
    usage: "exit",
    run: () =>{
        
        const NZTK = require('../other/NZTK')

        NZTK.log(`ended a session.`, 'sessionmanager', 'sessions')
        process.exit()
    }
}