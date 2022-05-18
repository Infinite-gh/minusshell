const install = require('./NZPM/install')
const update = require('./NZPM/upgrade')
const refresh = require('./NZPM/update')

module.exports = class{

    constructor(user){

        this.user = user
    }

    install(args, line, cb){install(args, line, this.user, cb)}
    update(NZSHHStuff, cb){update(NZSHHStuff, cb)}
    refresh(){refresh(this.user)}
}