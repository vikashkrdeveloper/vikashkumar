import { createSlice } from '@reduxjs/toolkit';
export interface disLike {
    disLike: number;
}
const initialState: disLike = {
    disLike: 0
}
const projectDisLikeSlice = createSlice({
    name: 'projectDisLike',
    initialState,
    reducers: {
        removeDisLike: (state) => {
            state.disLike -= 1;
        },
        disLike: (state) => {
            state.disLike += 1;
        },
        setProjectDisLike: (state, action) => {
            state.disLike += action.payload;
        }
    }
});

export const { setProjectDisLike, disLike, removeDisLike } = projectDisLikeSlice.actions;
export default projectDisLikeSlice.reducer;