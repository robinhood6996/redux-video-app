import { getVideo } from "./videoApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: ""
}

export const fetchVideo = createAsyncThunk('video/fetchVideo', async (id) => {
    const video = await getVideo(id);
    return video;
})

const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideo.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
            state.error = "";
            state.video = {};
        })

        builder.addCase(fetchVideo.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.error = "";
            state.video = action.payload
        })
        builder.addCase(fetchVideo.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.error = action.error.message;
            state.video = {}
        })
    }
});


export default videoSlice.reducer;