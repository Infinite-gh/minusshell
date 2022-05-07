module.exports = {
    name: "NZLM",
    desc: "log into minus shell",
    version: "beta 0.0.1",
    usage: "(set it in bootconfig)",
    run: (programs) =>{

        // dependencies 

        const fs = require('fs')
        const readline = require("readline");
        
        // readline

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const globalConfig = require('../configs/globalConf.json')

        const NZTKc = require("../other/NZTK")
        const notuser = {name: "no"}
        const NZTK = new NZTKc("NZLM", notuser)

        // get users
    
        const users = new Map()

        const usrs = fs.readdirSync(`./SHELL/configs/users`).filter(file => file.endsWith(`.json`));
        for(const file of usrs){
            const cmd = require(`../configs/users/${file}`);
            
            NZTK.log.normal(`found user ${cmd.name}`, 1, `loadprograms`)

            users.set(cmd.name, cmd)
        }
        
        // log in

        const login = () =>{
            rl.question('please enter the username: ', (answer1) => {

                // check if the user exists
        
                    if(!users.get(answer1)){
        
                        NZTK.log.error(`can't find a user named ${answer1}`, 2, "yes")
                        login()
                        
                    }else{

                        // get da password

                        rl.question('please enter the password: ', (answer2) => {

                            // check if the password is correct 
                            
                            var pswd = users.get(answer1).password
                            if(pswd === answer2){
                                
                                rl.close()
                                programs.get(globalConfig.shell.name).run(users, users.get(answer1))
                            }else{

                                NZTK.log.error(`incorrect password`, 2, "yes")
                                login()
                            }
                        });
                    }
            });
        }

        login()
    }
}