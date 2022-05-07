module.exports = {
    name: "help",
    desc: "help menu",
    version: "beta 0.0.2",
    usage: "help",
    run: function help(args, line, user, apps, rl, programs, users){

        // well it at least works

        console.log(programs)

        return {

            name: "help",
            exitCode: 0,
            value: "complete"
        }
    }
}