import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/realtedVideoSlice";
import Loading from "../ui/Loading";
import RelatedVideoListItem from "./RelatedVideoListItem";

export default function RelatedVideoList({ currentVideoId, tags }) {
    const dispatch = useDispatch();
    const { relatedVideos, isLoading, isError, error } = useSelector(state => state.relatedVideos);
    console.log('currentVideoId', currentVideoId)

    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id: currentVideoId }))
    }, [dispatch, tags, currentVideoId])

    let content;
    if (isLoading)
        content = <Loading />
    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && relatedVideos.length === 0)
        content = <div className="col-span-12">No videos found</div>
    if (!isLoading && !isError && relatedVideos.length > 0)
        content = relatedVideos.map(relatedVideo => {
            return <RelatedVideoListItem key={relatedVideo.id} video={relatedVideo} />
        });

    return (
        <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
}
