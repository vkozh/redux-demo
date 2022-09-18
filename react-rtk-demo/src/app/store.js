import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/iceCream/icecreamSlice'
import userReducer from '../features/user/userSlice'
// import reduxLogger from 'redux-logger'

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // middleware: (gerDefaultMiddleware) => gerDefaultMiddleware().concat(logger),
})

export default store