module.exports = {
    name: "exit",
    desc: "shut down the shell",
    version: "beta 0.0.4",
    usage: "exit",
    run: (NZSHHStuff, cb) =>{

        const NZTKc = require("../other/NZTK")
        const NZTK = new NZTKc("exit", NZSHHStuff.users.current)

        // any configs you might need

        // ur code here lol
        // also put everything here. it keeps the code tidy

        NZTK.log.success(`ended a session.`, 2, "nope")
        process.exit()

        // end end the program
        // this is useless in this situation since this cmd closes the process lol

        cb({

            name: "exit",
            exitCode: 0,
            value: {

                something: "bruh"
            }
        })
    }
}
