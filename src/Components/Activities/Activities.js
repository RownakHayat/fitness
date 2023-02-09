import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'
const Activities = () => {
    const [activities, setActivitys] = useState([]);
    useEffect(()=>{
        fetch('activityDB.json')
        .then(res =>res.json())
        .then(data =>setActivitys(data))
    },[])

    return (
        <div className='activities-container'>
            <div className='activity-container'>
               {
                activities.map(activity =><Activity key={activity.id}
                activity={activity}
                
                ></Activity>)
               }
            </div>
            <div className='time-container'>
                <h4>Time Required:</h4>
            </div>
        </div>
    );
};

export default Activities;