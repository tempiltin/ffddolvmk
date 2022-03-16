const moment = require('moment')

function formatMessage(username, msg) {
    return {
        time: moment().format('h:mm a'),
        username: username,
        msg
    }
}

module.exports = formatMessage