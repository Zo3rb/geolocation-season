import React from 'react';
import './DisplaySeason.css';

const DisplaySeason = (props) => {

    function getSeason(latitude, month) {
        if (month > 2 && month < 9) {
            return latitude > 0 ? 'summer' : 'winter'
        }
        else {
            return latitude > 0 ? 'winter' : 'summer'
        }
    }

    const seasonConfig = {
        winter: {
            text: `Burr, it's Cold`,
            iconName: `snowflake`
        },
        summer: {
            text: `Let's Hit The Beach`,
            iconName: `sun`
        }
    }

    const season = getSeason(props.lat, new Date().getMonth())

    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`display-season ${season}`}>
            <i className={`icon massive icon-left ${iconName}`}></i>
            <h1>{text}</h1>
            <i className={`icon massive icon-right ${iconName}`}></i >
        </div >
    );
}

export default DisplaySeason;
