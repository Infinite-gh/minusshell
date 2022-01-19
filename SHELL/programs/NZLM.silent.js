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

        const NZTK = require("../other/NZTK")

        // get users
    
        const users = new Map()

        const usrs = fs.readdirSync(`./SHELL/configs/users`).filter(file => file.endsWith(`.json`));
        for(const file of usrs){
            const cmd = require(`../configs/users/${file}`);
            
            NZTK.log(`found user ${cmd.name}`, `boot`, `loadprograms`)

            users.set(cmd.name, cmd)
        }
        
        // log in

        const login = () =>{
            rl.question('please enter the username: ', (answer1) => {

                // check if the user exists
        
                    if(!users.get(answer1)){
        
                        console.log(`can't find a user named ${answer1}`)
                        login()
                        
                    }else{

                        // get da password

                        rl.question('please enter the password: ', (answer2) => {

                            // check if the password is correct 
                            
                            var pswd = users.get(answer1).password
                            if(pswd === answer2){
                                programs.get(globalConfig.shell.name).run(users, users.get(answer1), rl, programs)
                            }else{

                                console.log(`incorrect password`)
                                login()
                                    
                            }
                        });
                    }
            });
        }

        login()
    }
}