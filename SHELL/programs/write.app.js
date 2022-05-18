module.exports = {
    name: "write",
    desc: "log something into the logs if you for some reason want to do it",
    version: "beta 0.0.1",
    usage: "write [filename] [something]",
    run: (args, line, user, apps, rl, programs, users) =>{

        // useless but cool gadget

        const NZTKc = require("../other/NZTK")
        const NZTK = new NZTKc("write", user)

        if(!args[1]){

            return {

                name: "write",
                exitCode: 1,
                value: "please input where to write the file"
            }
        }
        if(!args[2]){

            return {

                name: "write",
                exitCode: 1,
                value: "what to write"
            }
        }
        
        NZTK.log.normal(args[1], 1, args[2])

        return {

            name: "write",
            exitCode: 0,
            value: `${args[2]} in ${args[1]}`
        }
    }
}

module.exports = {
    name: "write",
    desc: "log something into the logs if you for some reason want to do it",
    version: "beta 0.0.1",
    usage: "write [filename] [something]",
    run: (NZSHHStuff, cb) =>{

        const NZTKc = require("../other/NZTK")
        const NZTK = new NZTKc("write", NZSHHStuff.users.current)

        let args = NZSHHStuff.input.args

        // any configs you might need

        // ur code here lol
        // also put everything here. it keeps the code tidy

        if(!args[1]){

            cb({

                name: "write",
                exitCode: 1,
                value: `no file specified`
            })
        }
        if(!args[2]){

            cb({

                name: "write",
                exitCode: 1,
                value: `nothing to write`
            })
        }
        
        NZTK.log.normal(args[1], 1, args[2])

        // end end the program

        cb({

            name: "write",
            exitCode: 0,
            value: `${args[2]} in ${args[1]}`
        })
    }
}
