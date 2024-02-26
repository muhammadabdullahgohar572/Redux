import { configureStore } from '@reduxjs/toolkit'
import  counterReducer from "./counter/Counter"
export const store = configureStore({
    reducer: {
        counter: counterReducer,
      },
})