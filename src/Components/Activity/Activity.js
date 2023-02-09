import React from 'react';
import './Activity.css'
const Activity = (props) => {
    const {name, picture, about, age, time_required } = props.activity;

    return (
        <div className='actvity'>
            <img src={picture} alt=""></img>
            <h3>Gymnastics{name}</h3>
            <p></p>
        </div>
    );
};

export default Activity;