module.exports = {
    name: "echo",
    desc: "pretty much a useless command",
    version: "beta 0.0.1",
    usage: "echo [something]",
    run: (args, line, user, apps, rl, programs, users) =>{

        // another cool gadget i guess

        const NZTKc = require('../other/NZTK')
        const NZTK = new NZTKc("echo", user)

        if(!args[1]){

            NZTK.log.error("please input what i'm supposed to echo", "echo", 2, "echo", user.name)
        }else{
            
            NZTK.log.normal(args[1], 2, "echo")
        }
    }
}