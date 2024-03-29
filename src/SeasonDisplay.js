import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer : {
        text : 'Let\'s hit the beach!',
        iconName : 'sun'
    },
    winter : {
        text : 'It\'s cooooold',
        iconName : 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    // console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    // console.log(season);
    // const text = season === 'winter' ? 'it\'s cooooold' : 'it\'s a great summer!';
    // const icon = season === 'winter' ? 'snowflake' : 'summer';
    const { text, iconName } = seasonConfig[season]; // --> {text, iconName}
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>    
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;