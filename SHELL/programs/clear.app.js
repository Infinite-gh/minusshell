module.exports = {
    name: "clear",
    desc: "clear the terminal screen",
    version: "beta 0.0.3",
    usage: "clear",
    run: (NZSHHStuff, cb) =>{

        const NZTKc = require("../other/NZTK")
        const NZTK = new NZTKc("clear", NZSHHStuff.users.current)

        // any configs you might need

        // ur code here lol
        // also put everything here. it keeps the code tidy

        console.clear()

        // end end the program

        cb({

            name: "clear",
            exitCode: 0,
            value: "complete"
        })
    }
}
