import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Owner from '../Owner/Owner';
import './Activities.css';

const Activities = () => {
    const [activities, setActivitys] = useState([]);
    const [exerciseTime, setExercisetime] = useState([])
    useEffect(()=>{
        fetch('activityDB.json')
        .then(res =>res.json())
        .then(data =>setActivitys(data))
    },[])

    const handleClick =(activity)=>{
        console.log(activity)
        const newActivity = [...exerciseTime, activity];
        setExercisetime(newActivity);
    }
    return (
        <div className='activities-container'>
            <div className='activity-container'>
               {
                activities.map(activity =><Activity 
                key={activity.id}
                activity={activity}
                handleClick ={handleClick}
                
                ></Activity>)
               }
            </div>
            <div className='owner'>
                <Owner exerciseTime={exerciseTime}></Owner>

            </div>
            <div  className='time-exercise'>
                <h4>Time Required</h4>
                <p>Time Start : {exerciseTime.length}</p>
            </div>
        </div>
    );
};

export default Activities;