module.exports = {
    name: "help",
    desc: "help menu",
    version: "beta 0.0.3",
    usage: "help",
    run: (NZSHHStuff, cb) =>{

        const NZTKc = require("../other/NZTK")
        const NZTK = new NZTKc("help", NZSHHStuff.users.current)

        // any configs you might need

        // ur code here lol
        // also put everything here. it keeps the code tidy

        console.log(NZSHHStuff.appStuff.apps)

        // end end the program

        cb({

            name: "help",
            exitCode: 0,
            value: NZSHHStuff.appStuff.apps
        })
    }
}
