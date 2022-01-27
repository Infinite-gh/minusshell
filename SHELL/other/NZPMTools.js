const install = require('./NZPM/install')
const update = require('./NZPM/update')
const refresh = require('./NZPM/update')

module.exports = {

    install: (args, line, user) => install(args, line, user),
    update: () => update(),
    refresh: () => refresh()
}