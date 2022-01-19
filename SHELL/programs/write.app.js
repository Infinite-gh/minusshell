module.exports = {
    name: "write",
    desc: "log something into the logs if you for some reason want to do it",
    version: "beta 0.0.1",
    usage: "write [filename] [something]",
    run: (args, line, user, programs, rl) =>{

        const NZTK = require("../other/NZTK")

        rl.question(`what do you want to name the file? \n`, (line1) =>{

            rl.question(`what do you want to write? \n`, (line2) =>{

                NZTK.log(line2, `write`, line1)
            })
        })
    }
}