import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../ui/Loading";
import VideoGridItem from "./VideoGridItem";

export default function VideGrid() {
    const dispatch = useDispatch();
    const { videos, isLoading, isError, error } = useSelector(state => state.videos);

    useEffect(() => {
        dispatch(fetchVideos());
    }, [dispatch]);
    let content;
    if (isLoading)
        content = <Loading />
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && videos.length === 0)
        content = <div className="col-span-12">No videos found</div>
    if (!isLoading && !isError && videos.length > 0)
        content = videos.map(video => {
            return <VideoGridItem key={video.id} video={video} />
        });



    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {content}
                </div>
            </section>
        </section>
    );
}
