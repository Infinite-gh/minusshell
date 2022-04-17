const install = require('./NZPM/install')
const update = require('./NZPM/upgrade')
const refresh = require('./NZPM/update')

module.exports = {

    install: (args, line, user) => install(args, line, user),
    update: (rl, user) => update(rl, user),
    refresh: () => refresh()
}