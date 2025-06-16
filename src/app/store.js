import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../slices/todoSlices.js'

export const store = configureStore({
    reducer: {
        todos: todoReducer
    },
})