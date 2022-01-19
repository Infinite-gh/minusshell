const install = require('./NZPM/install')
const update = require('./NZPM/update')
const refresh = require('./NZPM/update')

module.exports = {

    install: (args) => install(args),
    update: () => update(),
    refresh: () => refresh()
}