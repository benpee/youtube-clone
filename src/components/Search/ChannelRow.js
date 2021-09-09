import { Avatar } from '@material-ui/core';
import { CheckCircleOutlineOutlined } from '@material-ui/icons';
import React from 'react';
import classes from './ChannelRow.module.css';

function ChannelRow({ image, channel, subs, noOfVideos, verified, description }) {
    return (
        <div className={classes.channelRow}>
            <Avatar
                className={classes.channelRow__logo}
                alt={channel}
                src={image}
            />
            <div className={classes.channelRow__text}>
                <h4>{channel} {verified && <CheckCircleOutlineOutlined />}</h4>
                <p>{subs} subscribers * {noOfVideos} videos</p>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default ChannelRow
