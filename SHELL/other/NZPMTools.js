const install = require('./NZPM/install')
const update = require('./NZPM/upgrade')
const refresh = require('./NZPM/update')

module.exports = class{

    constructor(user){

        this.user = user
    }

    install(args, line){install(args, line, this.user)}
    update(rl){update(rl, this.user)}
    refresh(){refresh(this.user)}
}