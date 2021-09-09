import React from 'react';
import classes from './SidebarRow.module.css';

function SidebarRow({ selected, title, Icon }) {
    return (
        <div className={`${classes.sidebarRow} ${selected && classes.sidebarRow.selected}`}>
            <Icon className={classes.sidebarRow__icon} />
            <h2 className={classes.sidebarRow__title}>{title}</h2>
        </div>
    )
}

export default SidebarRow
