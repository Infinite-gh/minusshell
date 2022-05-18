module.exports = {
    name: "ver",
    desc: "check the version of an app",
    version: "beta 0.0.3",
    usage: "ver [app]",
    run: (NZSHHStuff, cb) =>{

        const NZTKc = require("../other/NZTK")
        const NZTK = new NZTKc("version", NZSHHStuff.users.current)

        let args = NZSHHStuff.input.args

        // any configs you might need

        // ur code here lol
        // also put everything here. it keeps the code tidy

        const ver = NZSHHStuff.appStuff.apps.get(`${args[1]}`)

        if(!ver){

            cb({

                name: "ver",
                exitCode: 1,
                value: `can't find the program named ${args[1]}`
            })
        }else{

            if(!ver.version){

                cb({

                    name: "ver",
                    exitCode: 1,
                    value: "this program doesn't have the version number. please contact the developer of the app."
                })
            }else{

                NZTK.log.normal(`version of ${args[1]}: ${ver.version}\n`, 2, "nope")

                return {

                    name: "version",
                    exitCode: 0,
                    value: `version of ${args[1]}: ${ver.version}`
                }
            }
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
