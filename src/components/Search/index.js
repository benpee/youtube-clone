import { TuneOutlined } from '@material-ui/icons';
import React from 'react';
import ChannelRow from './ChannelRow';
import classes from './Search.module.css';
import VideoRow from './VideoRow';

function Search() {
    return (
        <div className={classes.search}>
            <div className={classes.searchPage__filter}>
                <TuneOutlined />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://image.google.com"
                channel="Ajibola Pius"
                verified
                subs="659k"
                noOfVideos={382}
                description="You can find awesome programming"
            />

            <hr />
            <VideoRow
                views="1.4M"
                subs="659k"
                description="Do you want a FREE one hour training..."
                timestamp="59 seconds ago"
                channel="Ajibola Pius"
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginner"
                image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?"
            />
        </div>
    )
}

export default Search
