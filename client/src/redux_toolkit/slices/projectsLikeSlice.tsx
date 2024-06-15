import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
export interface ProjectLike {
    like: number
}
const initialState: ProjectLike = {
    like: 0
}
export const projectsLikeSlice = createSlice({
    name: 'projectLike',
    initialState,
    reducers: {
        removeLike: (state) => {
            state.like -= 1;
        },
        like: (state) => {
            state.like += 1;
        },
        setProjectLike: (state, action: PayloadAction<number>) => {
            state.like += action.payload;
        }
    }
})
export const { setProjectLike, like, removeLike } = projectsLikeSlice.actions
export default projectsLikeSlice.reducer