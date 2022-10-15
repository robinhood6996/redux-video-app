import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTags } from "./tagsApi"

const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: ""
}

export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
    const tags = await getTags();
    return tags;
})

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTags.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
            state.error = ""
        })
        builder.addCase(fetchTags.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.error = "";
            state.tags = action.payload;
        })
        builder.addCase(fetchTags.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.error = action.error?.message;
            state.tags = [];
        })
    }
});


export default tagsSlice.reducer;