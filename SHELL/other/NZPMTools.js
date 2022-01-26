const install = require('./NZPM/install')
const update = require('./NZPM/update')
const refresh = require('./NZPM/update')

module.exports = {

    install: (args, rl) => install(args, rl),
    update: () => update(),
    refresh: () => refresh()
}