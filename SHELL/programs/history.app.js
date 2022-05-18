module.exports = {
    name: "history",
    desc: "load the history of -SH",
    version: "1.1.1",
    usage: "history",
    run: (NZSHHStuff, cb) =>{

        const NZTKc = require("../other/NZTK")
        const NZTK = new NZTKc("history", NZSHHStuff.users.current)

        // any configs you might need

        // ur code here lol
        // also put everything here. it keeps the code tidy

        NZTK.readFile('./SHELL/logs/NZSHH/cmdhandler.txt', false, '', (data) =>{

            NZTK.log.normal(data, 2, 'f')
        })

        // end end the program

        cb({

            name: "history",
            exitCode: 0,
            value: {

                something: "bruh"
            }
        })
    }
}
