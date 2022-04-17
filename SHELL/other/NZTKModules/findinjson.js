
// saves the time and space i guess

module.exports = (json, value) =>{

    const jsons = JSON.stringify(json)
    var objectValue = JSON.parse(jsons);
    if(!objectValue){

        return `404`
    }else{
        
        return objectValue[value]
    }
}