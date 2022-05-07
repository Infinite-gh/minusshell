
module.exports = {
    name: "NZPM",
    desc: "negative zero package manager (HEAVY WIP)",
    version: "beta 0.0.5",
    usage: "NZPM [refresh/install/help]",
    run: async (args, rawUserInput, user, apps, line, programs) =>{

        // delicious spaghet

        const NZTKc = require("../other/NZTK")
        const NZTK = new NZTKc("NZPM", user)
        const NZPMToolsc = require('../other/NZPMTools')
        const NZPMTools = new NZPMToolsc(user)

        // check if the user has inputed any arguments
        
        if(!args[1]){

            return {

                name: "NZPM",
                exitCode: 1,
                value: "please use help list refresh or install"
            }
        }else{

            // check what operation does the user want to do

            switch(args[1]){

                case "refresh":

                    NZPMTools.refresh()
                break;

                case "r":

                    NZPMTools.refresh()
                break;

                case "install":

                    NZPMTools.install(`${args[2]}`, line)
                break;
                    
                case "i":

                    NZPMTools.install(`${args[2]}`, line)
                break;

                case "help":

                    NZTK.log.normal(`commands\nNZPM refresh => refresh the repository\nNZPM install [package name] => install [package name]\nNZPM update => update all the installed packages`, 2, "yes")
                break;

                case "h":

                    NZTK.log.normal(`commands\nNZPM list => list all available packages\nNZPM refresh => refresh the repository\nNZPM install [package name] => install [package name]\nNZPM update => update all the installed packages`, 2, "yes")
                break;

                case "update":

                    NZPMTools.update(line)
                break;

                case "u":

                    NZPMTools.update(line)
                break;

                case "l":
                    NZTK.log.normal(NZTK.readFile('./SHELL/configs/NZPM/packagelist.txt', 'a', false), 2, 'f')
                break;

                case "list":
                    NZTK.log.normal(NZTK.readFile('./SHELL/configs/NZPM/packagelist.txt', 'a', false), 2, 'f')
                break;
                
                default:

                    return {

                        name: "NZPM",
                        exitCode: 1,
                        value: `can't find the option ${args[1]}`
                    }
            }

            await NZTK.log.normal(`(NZPM) used ${args[1]}`, 0, `manager`)

            return {

                name: "NZPM",
                exitCode: 0,
                value: `option ${args[1]}, pkg ${args[2]}`
            }
        }
    }
}