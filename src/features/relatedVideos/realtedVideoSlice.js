import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRelatedVideos } from "./relatedVideosAPI";

const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: ""
}

export const fetchRelatedVideos = createAsyncThunk('fetch/relatedVideos', async ({ tags, id }) => {
    const relatedVideos = await getRelatedVideos({ tags, id });
    return relatedVideos;
})


const relatedVideoSlice = createSlice({
    name: "realtedVideos",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchRelatedVideos.pending, (state) => {
            state.isError = false;
            state.error = "";
            state.isLoading = true;
        })
        builder.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.relatedVideos = action.payload;
        })
        builder.addCase(fetchRelatedVideos.rejected, (state, action) => {
            state.isLoading = false;
            state.relatedVideos = [];
            state.isError = true;
            state.error = action.error?.message
        })
    }
});


export default relatedVideoSlice.reducer;