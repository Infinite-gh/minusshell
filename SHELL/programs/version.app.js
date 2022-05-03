module.exports = {
    name: "ver",
    desc: "get the version of a program",
    version: "beta 0.0.2",
    usage: "ver [program]",
    run: (args, line, user, apps, rl, programs, users) =>{

        // there might possibly be a use for this

        const NZTKc = require("../other/NZTK")
        const NZTK = new NZTKc("version", user)

        const ver = programs.get(args[1])

        if(!ver){

            NZTK.log.error(`could not find a program named ${args[1]}`, 2, "nope")
        }else{

            if(!ver.version){

                NZTK.log.error(`${args[1]} has an incorrect application format and it's version can't be found`, 2, "nope")
            }else{

                NZTK.log.normal(`\n\nversion of ${args[1]}\n${ver.version}\n\n`, 2, "nope")
            }
        }
    }
}