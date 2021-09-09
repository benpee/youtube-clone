import { Avatar } from '@material-ui/core';
import React from 'react';
import classes from './Video.module.css';

function VideoCard({ title, views, channel, timestamp, image, channelImage }) {
    return (
        <div className={classes.videoCard}>
            <img
                className={classes.videoCard__thumbnail}
                src={image}
                alt={title}
            />
            <div className={classes.videoCard__info}>
                <Avatar
                    className={classes.videoCard__avatar}
                    alt={channel}
                    src={channelImage}
                />
                <div className={classes.videoCard__text}>
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} * {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
