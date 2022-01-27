module.exports = {
    name: "NZSHH",
    desc: "negative zero shell or something idk",
    version: "beta 0.0.1",
    usage: "NZSHH",
    run: (users, user, rl, programs) =>{

        const fs = require('fs')
        const NZTK = require('../other/NZTK')

        // load config

        const globalConfig = require('../configs/globalConf.json')
        const config = require('../configs/NZSHHConf.json')

        rl.setPrompt(NZTK.setupps1(config.PS1, user.name));

        NZTK.log(`started a session. \nuser: ${user.name}\nPS1:${NZTK.setupps1(config.PS1, user.name)}`, 'sessionmanager', 'sessions')
        
        // a little "hello"

        console.log(`\nHEY YOU! yes, you! \ntype help for a list of commands\n`)

        rl.prompt();

        // actual cmdline
        
        rl.on("line", async function(line){

            // load programs

            let apps = new Map()

            let cmds = fs.readdirSync(`./SHELL${globalConfig.programs.path}`).filter(file => file.endsWith(`.app.js`));
            for(const file of cmds){
                const cmd = require(`./${file}`);
                    
                apps.set(cmd.name, cmd)
            }

            // set up the ps1 again

            rl.setPrompt(NZTK.setupps1(config.PS1, user.name, users))

            // history logging

            NZTK.silentlog(`entered ${line} into the cmd.`, 'NZSHH', 'history')

            // normal command handler stuff

            const args = line.split(" ")

            const command = apps.get(args[0])

            // if i didn't put this here, the nodeos would crash on unexistent commands

            if(!args[0]){

                console.log(`please input something into the command line. \n`)
            }else{

                if(apps.has(args[0])){

                    apps.get(`${args[0]}`).run(args, line, user, apps, rl, programs, users)
                }else{

                    NZTK.log(`called out unexistent command ${args[0]}`, `NZSHH`, `cmdhandler`)
                }
            }
      
            // make it work 

            await rl.prompt();

        }).on("close", () => {

            // a little thing

            console.log("disabled the readline.")
        })
    }
}