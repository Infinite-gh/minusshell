const globalConf = require(`../configs/globalConf.json`)
const startConf = require(`./startconf.json`)
const user = {name: "no"}

const fs = require('fs')
const NZTKc = require('../other/NZTK')
const notuser = {name: "no"}
const NZTK = new NZTKc("start", notuser)

const programs = new Map()

const cmds = fs.readdirSync(`./SHELL${globalConf.programs.path}`).filter(file => file.endsWith(`.js`));
for(const file of cmds){
    const cmd = require(`..${globalConf.programs.path}/${file}`);
        
    NZTK.log.normal(`found program ${cmd.name}`, 2, "bootup")

    programs.set(cmd.name, cmd)
}

programs.get(startConf.loginManager.name).run(programs)