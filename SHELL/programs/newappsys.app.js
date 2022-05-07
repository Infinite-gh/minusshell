module.exports = {
    name: "test",
    desc: "test the new app system",
    version: "69",
    usage: "command [arg]",
    run: (args, rawUserInput, user, apps, readline, programs, users, mem) =>{

        const NZTKc = require("../other/NZTK")
        const NZTK = new NZTKc("name", user)

        // any configs you might need

        // ur code here lol
        // also put everything here. it keeps the code tidy

        // end end the program

        return exit = {

            name: "test",
            value: "something saved to memory"
        }
    }
}
