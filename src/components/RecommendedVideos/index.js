import React from 'react';
import classes from './RecommendedVideos.module.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className={classes.recommendedVideos}>
            <h2>Recommended</h2>
            <div className={classes.recommendedVideos__videos}>
                <VideoCard
                    title="Become a Web Developer in 10 minuted | 2019/2020"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://encryted-tbn0.gstatic.com/immages"
                    channel="Ajibola Pius"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
                />
                <VideoCard
                    title="Whether we like it or not"
                    views="2M Views"
                    timestamp="4 days ago"
                    channelImage="https://encryted-tbn0.gstatic.com/immages"
                    channel="Christian Guzman"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
                />
                <VideoCard
                    title="5 Uses for cloud functions"
                    views="850k Views"
                    timestamp="1 day ago"
                    channelImage="https://encryted-tbn0.gstatic.com/immages"
                    channel="Firebase"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
                />
                <VideoCard
                    title="The Truth about OnePlus Nord"
                    views="5M Views"
                    timestamp="3 days ago"
                    channelImage="https://encryted-tbn0.gstatic.com/immages"
                    channel="Ajibola Pius"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
                />
                <VideoCard
                    title="The Truth about OnePlus Nord"
                    views="5M Views"
                    timestamp="58 minutes ago"
                    channelImage="https://encryted-tbn0.gstatic.com/immages"
                    channel="Marques Brownlee"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
                />
                <VideoCard
                    title="Elon Musks says Teslas are too expensive!"
                    views="1.2M Views"
                    timestamp="3 days ago"
                    channelImage="https://encryted-tbn0.gstatic.com/immages"
                    channel="Ajibola Pius"
                    image="https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg"
                />

            </div>
        </div>
    )
}

export default RecommendedVideos
