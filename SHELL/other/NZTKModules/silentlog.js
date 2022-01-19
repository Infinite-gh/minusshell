module.exports = (loggedMsg, dir, file) =>{

    // stuff

    const setupPs1 = require('./setupps1.js')
    const fs = require('fs')
    const config = require('../../configs/logConf.json')

    const stuff = 
`
${setupPs1(config.start)}
${setupPs1(loggedMsg)} 
${setupPs1(config.footer)}
${setupPs1(config.end)}
`
    fs.mkdir(`./SHELL/logs/${dir}`, (err) =>{
        
    })

    fs.appendFile(`./SHELL/logs/${dir}/${file}.txt`, stuff, (err) => {
        if(err) console.log(" ")
    });
}