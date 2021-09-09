import { Avatar, Menu } from '@material-ui/core';
import { Apps, Notifications, Search, VideoCall } from '@material-ui/icons';
import React, { useState } from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState("");

    const changeHandler = (e) => {
        setInputSearch(e.target.value);
    }
    return (
        <div className={classes.header}>

            <div className={classes.header__left}>
                <Menu />
                <Link to="/">
                    <img
                        src="https://upload.wikimedia/commons/org/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                        alt="Youtube logo"
                        className={classes.header__logo}
                    />
                </Link>
            </div>
            <div className={classes.header__search}>
                <input
                    type="text"
                    placeholder="Search"
                    value={inputSearch}
                    onChange={changeHandler}
                />
                <Link to={`/search/${inputSearch}`}>
                    <Search className={classes.header_searchButton} />
                </Link>
            </div>
            <div className={classes.header__right}>
                <VideoCall className={classes.header__icon} />
                <Apps className={classes.header__icon} />
                <Notifications className={classes.header__icon} />
                <Avatar
                    alt="Ajibola Pius"
                    src="https://avatars2.githunusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e427ad44&v=4"
                />
            </div>
        </div>
    )
}

export default Header
