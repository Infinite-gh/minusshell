
// saves the time and space i guess

module.exports = (json, value, cb, app, user) =>{

    const NZTKc = require("../NZTK");
    const NZTK = new NZTKc(app, user)

    const jsons = JSON.stringify(json)
    var objectValue = JSON.parse(jsons);
    if(!objectValue){

        NZTK.log.error(`can't find ${value}`, 2, "nada")
        cb("ERROR//404")
    }else{
        
        cb(objectValue[value])
    }
}