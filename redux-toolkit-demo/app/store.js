const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReduces = require('../features/iceCream/icecreamSlice')
const userReducer = require('../features/user/userSlice')
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReduces,
        user: userReducer
    },
    middleware: (gerDefaultMiddleware) => gerDefaultMiddleware().concat(logger),
})

module.exports = store