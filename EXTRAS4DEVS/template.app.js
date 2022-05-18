const name = "name"
const desc = "description of the app"
const version = "0.0.0"
const usage = "how to use the app"
module.exports = {
    name: name,
    desc: desc,
    version: version,
    usage: usage,
    run: (NZSHHStuff, cb) =>{

        const NZTKc = require("../other/NZTK")
        const NZTK = new NZTKc(name, NZSHHStuff.users.current)

        // any configs you might need

        // ur code here lol
        // also put everything here. it keeps the code tidy

        // end end the program

        cb({

            name: name,
            exitCode: 0,
            value: {

                something: "bruh"
            }
        })
    }
}
