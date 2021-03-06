module.exports = {
    name: "NZSHH",
    desc: "negative zero shell or something idk",
    version: "beta 0.0.2",
    usage: "NZSHH",
    run: (users, user) =>{

        // the heart of -SH. i wonder if anyone would want to make a better shell

        const fs = require('fs')
        const readline = require('readline')
        let rl = readline.createInterface({

            input: process.stdin,
            output: process.stdout
        })
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

        // memory

        let mem = new Map()

        setInterval(() =>{

            NZTK.setupps1(config.PS1, (data) =>{rl.setPrompt(data)})
        }, 1000)

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

            let NZSHHStuff ={

                input: {

                    raw: line,
                    args: args
                },
                users: {

                    current: user,
                    all: users
                },
                appStuff: {

                    apps: apps,
                    readline: rl,
                    memory: mem
                }
            }

            // if i didn't put this here, the nodeos would crash on unexistent commands

            if(!args[0]){

                NZTK.log.warn("please input something into the cmdline", 2, "echo")
            }else{

                if(apps.has(args[0])){

                    // really pretty way of handling commands
                    // also it has memory shtuff

                    let exit

                    try{

                        apps.get(`${args[0]}`).run(NZSHHStuff, (data) =>{

                            exit = data

                            // errors

                            if(exit.exitCode > 0) return NZTK.log.error(`program ${exit.name} crashed! reason: ${exit.value}`, 1, "crashes")

                            // memory

                            mem.set(exit.name, exit.value)

                            return
                        })
                    }catch(err){

                        // unexpected errors are being catched here
                        // i wish i didn't have to include this here 
                        // at the time of writing this i'm like the only person who makes shtuff for -SH
                        // which is sad

                        if(err){

                            NZTK.log.critError(`program ${args[0]} crashed! reason: ${err}`, 1, "crashes")
                        }
                    }

                    try{rl.close}catch(err){}

                    rl = readline.createInterface({

                        input: process.stdin,
                        output: process.stdout
                    })
                    
                    
                }else{

                    NZTK.log.error(`called out unexistent command ${args[0]}.`, 1, "yes")
                }
            }
      
            // repeat
            // i want to use something else but umm yeah

            await rl.prompt();

        }).on("close", () => {

            // a little thing

            NZTK.log.warn('disabled the CMDLINE', 2, "no")
        })
    }
}