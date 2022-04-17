module.exports = {
    name: "echo",
    desc: "pretty much a useless command",
    version: "beta 0.0.1",
    usage: "echo [something]",
    run: (args) =>{

        if(!args[1]){

            console.log(`please input what am i supposed to echo`)
        }else{
            
            console.log(args[1])
        }
    }
}