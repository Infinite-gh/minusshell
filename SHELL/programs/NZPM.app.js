
module.exports = {
    name: "NZPM",
    desc: "negative zero package manager (HEAVY WIP)",
    version: "beta 0.0.4",
    usage: "NZPM [refresh/install/help]",
    run: async (args, line, user, programs) =>{

        const NZTK = require("../other/NZTK")
        const NZPMTools = require('../other/NZPMTools')

        // check if the user has inputed any arguments
        
        if(!args[1]){

            console.log(`please run install help or refresh`)
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

                    NZPMTools.install(args)
                break;
                    
                case "i":

                    NZPMTools.install(args)
                break;

                case "help":

                    console.log(`commands\nNZPM refresh => refresh the repository\nNZPM install [package name] => install [package name]\nNZPM update => update all the installed packages`)
                break;

                case "h":

                    console.log(`commands\nNZPM refresh => refresh the repository\nNZPM install [package name] => install [package name]\nNZPM update => update all the installed packages`)
                break;

                case "update":

                    NZPMTools.update()
                break;

                case "u":

                    NZPMTools.update()
                break;
                
                default:

                    console.log(`can't find a function of NZPM ${args[1]}`, `NZPM`, `manager`)
                break;
            }

            await NZTK.log(`(NZPM) used ${args[1]}`, `NZPM`, `manager`)
        }
    }
}