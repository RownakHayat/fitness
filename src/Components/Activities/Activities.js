import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Owner from '../Owner/Owner';
import { addTodb } from '../storage';


import './Activities.css';

const Activities = () => {
    const [activities, setActivitys] = useState([]);
   const [excercisetime, setExcerciseTime] = useState([]);
    useEffect(()=>{
        
        fetch('activityDB.json')
        .then(res =>res.json())
        .then(data =>setActivitys(data));
       
    },[])

    

    const handleAddClick = (activity)=>{
        
        const newactivity =[...excercisetime, activity];
        setExcerciseTime(newactivity);
        addTodb(activity.id)
        
    }
    return (
        <div className='activities-container'>
            <div className='activity-container'>
               {
                activities.map(activity =><Activity 
                key={activity.id}
                activity={activity}
                handleAddClick ={handleAddClick}
                ></Activity>)
               }
            </div>
            <div className='owner-container'>
                
                <Owner excercisetime={excercisetime}></Owner>

            </div>
        </div>
    );
};

export default Activities;