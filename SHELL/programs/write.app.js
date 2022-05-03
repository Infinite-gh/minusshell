module.exports = {
    name: "write",
    desc: "log something into the logs if you for some reason want to do it",
    version: "beta 0.0.1",
    usage: "write [filename] [something]",
    run: (args, line, user, apps, rl, programs, users) =>{

        // useless but cool gadget

        const NZTKc = require("../other/NZTK")
        const NZTK = new NZTKc("write", user)

        rl.question(`what do you want to name the file? \n`, (line1) =>{

            rl.question(`what do you want to write? \n`, (line2) =>{

                NZTK.log.normal(line2, 1, line1)
            })
        })
    }
}