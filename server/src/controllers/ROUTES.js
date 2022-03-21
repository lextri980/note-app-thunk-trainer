const userRouter = require('./user')
const noteRouter = require('./note')

function route(app) {
    app.use('/auth', userRouter)
    app.use('/note', noteRouter)
}

module.exports = route