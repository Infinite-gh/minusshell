module.exports = {
    name: "ver",
    desc: "get the version of a program",
    version: "beta 0.0.1",
    usage: "ver [program]",
    run: (args, line, user, programs) =>{

        const NZTK = require("../other/NZTK")

        const ver = programs.get(args[1])

        if(!ver){

            console.log(`can't find a program named ${args[1]}`)
        }else{

            if(!ver.version){

                console.log(`can't find the version of ${args[1]}`)
            }else{

                NZTK.log(`\n\nversion of ${args[1]}\n${ver.version}\n\n`, `version`, `version`)
            }
        }
    }
}