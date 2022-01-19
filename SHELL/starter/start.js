const globalConf = require(`../configs/globalConf.json`)
const startConf = require(`./startconf.json`)

const fs = require('fs')
const NZTK = require('../other/NZTK.js')

const programs = new Map()

const cmds = fs.readdirSync(`./SHELL${globalConf.programs.path}`).filter(file => file.endsWith(`.js`));
for(const file of cmds){
    const cmd = require(`..${globalConf.programs.path}/${file}`);
        
    NZTK.log(`found program ${cmd.name}`, `boot`, `loadprograms`)

    programs.set(cmd.name, cmd)
}

programs.get(startConf.loginManager.name).run(programs)