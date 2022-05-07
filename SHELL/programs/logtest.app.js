module.exports = {
    name: "logtest",
    desc: "check out all the fancy logging thingies æææææææ",
    version: "yes",
    usage: "logtest",
    run: (args, line, user, apps, rl, programs, users) =>{

        // i used this to *you guessed it* test logging in NZTK

        const NZTKc = require('../other/NZTK')
        const NZTK = new NZTKc("logtest", user)

        NZTK.log.normal("normal log", 2, "yes")
        NZTK.log.success("success log", 2, "yes")
        NZTK.log.warn("warn log", 2, "yes")
        NZTK.log.error("error log", 2, "yes")
        NZTK.log.critError("critical error log", 2, "yes")

        return {

            name: "logtest",
            exitCode: 0,
            value: "complete"
        }
    }
}