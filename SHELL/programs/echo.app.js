module.exports = {
    name: "echo",
    desc: "pretty much a useless command",
    version: "beta 0.0.2",
    usage: "echo [something]",
    run: (args, line, user, apps, rl, programs, users) =>{

        // another cool gadget i guess

        const NZTKc = require('../other/NZTK')
        const NZTK = new NZTKc("echo", user)

        if(!args[1]){
            
            return {

                name: "echo",
                exitCode: 1,
                value: "please input what i'm supposed to echo"
            }
        }else{
            
            NZTK.log.normal(args[1], 2, "echo")

            return {

                name: "echo",
                exitCode: 0,
                value: args[1]
            }
        }
    }
}