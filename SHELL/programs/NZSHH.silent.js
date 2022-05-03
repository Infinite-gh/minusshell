module.exports = {
    name: "NZSHH",
    desc: "negative zero shell or something idk",
    version: "beta 0.0.2",
    usage: "NZSHH",
    run: (users, user, rl, programs) =>{

        // the heart of -SH. i wonder if anyone would want to make a better shell

        const fs = require('fs')
        const NZTKc = require('../other/NZTK')
        const NZTK = new NZTKc("NZSHH", user)

        // load config

        const globalConfig = require('../configs/globalConf.json')
        const config = require('../configs/NZSHHConf.json')

        NZTK.setupps1(`${config.PS1}`, (data) =>{rl.setPrompt(data)})


        NZTK.log.success(`started a session. \nuser: ${user.name}`, 1, "sessions")

        
        // a little "hello"

        NZTK.log.warn('type help for a list of commands', 2, "yes")

        rl.prompt();

        // actual cmdline
        
        rl.on("line", async (line) =>{

            // load programs

            let apps = new Map()

            let cmds = fs.readdirSync(`./SHELL${globalConfig.programs.path}`).filter(file => file.endsWith(`.app.js`));
            for(const file of cmds){
                const cmd = require(`./${file}`);
                    
                apps.set(cmd.name, cmd)
            }

            // set up the ps1 again

            NZTK.setupps1(config.PS1, (data) =>{rl.setPrompt(data)})

            // history logging

            NZTK.log.normal(`entered ${line} into the cmdline`, 0, 'cmdhandler')

            // normal command handler stuff

            const args = line.split(" ")

            const command = apps.get(args[0])

            // if i didn't put this here, the nodeos would crash on unexistent commands

            if(!args[0]){

                NZTK.log.warn("please input something into the cmdline", 2, "echo")
            }else{

                if(apps.has(args[0])){

                    apps.get(`${args[0]}`).run(args, line, user, apps, rl, programs, users)
                }else{

                    NZTK.log.error(`called out unexistent command ${args[0]}.`, 1, "yes")
                }
            }
      
            // make it work 

            await rl.prompt();

        }).on("close", () => {

            // a little thing

            NZTK.log.warn('disabled the CMDLINE', 2, "no")
        })
    }
}