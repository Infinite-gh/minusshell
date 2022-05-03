module.exports = (dir, app, user) =>{

    const NZTKc = require('../NZTK')
    const NZTK = new NZTKc(app, user)

    const fs = require('fs')
    
    const removeDir = (dir) =>{

        if (fs.existsSync(dir)){

            const files = fs.readdirSync(dir)
        
            if(files.length > 0){

                files.forEach((filename) =>{

                if(fs.statSync(dir + "/" + filename).isDirectory()){

                    removeDir(dir + "/" + filename)
                }else{
                    
                    fs.unlinkSync(dir + "/" + filename)

                    NZTK.log.success(`removed ${filename}`, 1, 'removedir')
                }
            })
            fs.rmdirSync(dir)
            }else{

                fs.rmdirSync(dir)
                NZTK.log.success(`removed ${dir}`, 1, "removedir")
            }
        }else{

            NZTK.log.success(`${dir} doesn't exist`, 2, "nope")
        }
    }

    removeDir(dir)
}