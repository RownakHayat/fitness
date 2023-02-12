
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock} from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Activity.css'
const Activity = ({activity, handleClick}) => {
    // console.log(props.activity)
//    const {activity, handleClick}= props;
    const {name, picture, about, age, time_required } = activity;
    

    return (
        <div className='activity'>
            <img src={picture} alt=""></img>
            <div className='activity-info'>
            <h3 className='activity-name'>Gymnastics : {name}</h3>
            {/* <p>About : {about}</p> */}
            <p><small>Age : {age}</small></p>
            <p><small>Tome Required : {time_required}min</small></p>
            </div>
            <button onClick={()=>handleClick(activity)} className='btn-select'>
                <p className='btn-text'>Select</p>
                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Activity;