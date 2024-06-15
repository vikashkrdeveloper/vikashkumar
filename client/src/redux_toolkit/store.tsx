import { configureStore } from '@reduxjs/toolkit'
import projectsLikeSlice from './slices/projectsLikeSlice'
import projectDisLikeSlice from './slices/projectDisLikeSlice'
export const store = configureStore({
    reducer: {
        projectsLikeSlice: projectsLikeSlice,
        projectDisLikeSlice: projectDisLikeSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch