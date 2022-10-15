import { configureStore } from '@reduxjs/toolkit';
import videosSlice from '../features/videos/videosSlice';
import tagsSlice from '../features/tags/tagsSlice';
import video from '../features/video/videoSlice';
import relatedVideoSlice from '../features/relatedVideos/realtedVideoSlice';
export const store = configureStore({
  reducer: {
    videos: videosSlice,
    tags: tagsSlice,
    video: video,
    relatedVideos: relatedVideoSlice
  },
});
