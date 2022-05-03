
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

            NZTK.log.warn(`please run install help or refresh`, 2, 'yes')
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

                    NZTK.log.normal(`commands\nNZPM refresh => refresh the repository\nNZPM install [package name] => install [package name]\nNZPM update => update all the installed packages`, 2, "yes")
                break;

                case "update":

                    NZPMTools.update(line)
                break;

                case "u":

                    NZPMTools.update(line)
                break;
                
                default:

                    NZTK.log.error(`can't find a function of NZPM ${args[1]}`, 2, `manager`)
                break;
            }

            await NZTK.log.normal(`(NZPM) used ${args[1]}`, 0, `manager`)
        }
    }
}