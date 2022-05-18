module.exports = {
    name: "echo",
    desc: "pretty much a useless command",
    version: "beta 0.0.3",
    usage: "echo [something]",
    run: (NZSHHStuff, cb) =>{

        const NZTKc = require("../other/NZTK")
        const NZTK = new NZTKc("echo", NZSHHStuff.users.current)

        let args = NZSHHStuff.input.args

        // any configs you might need

        // ur code here lol
        // also put everything here. it keeps the code tidy

        if(!args[1]){
            
            cb({

                name: "echo",
                exitCode: 1,
                value: "please input what i'm supposed to echo"
            })
        }else{
            
            NZTK.log.normal(args[1], 2, "echo")

            cb({

                name: "echo",
                exitCode: 0,
                value: args[1]
            })
        }

        // end end the program

        cb({

            name: "app",
            exitCode: 0,
            value: {

                something: "bruh"
            }
        })
    }
}
