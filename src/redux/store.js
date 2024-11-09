import { configureStore } from '@reduxjs/toolkit'
import MenuSlice from './feature/MenuSlice'

export const store = configureStore({
    reducer: {
        menu: MenuSlice
    },
})
