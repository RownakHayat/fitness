import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Owner from '../Owner/Owner';
import { activityDb, addTodb, getStoredTime } from '../storage';


import './Activities.css';

const Activities = () => {
    const [activities, setActivitys] = useState([]);

   const [excercisetime, setExcerciseTime] = useState([]);
    useEffect(()=>{
        console.log('activity befor fatch')
        fetch('activityDB.json')
        .then(res =>res.json())
        .then(data =>setActivitys(data));
        console.log('loading');
    },[])

    useEffect(()=>{
        console.log('Local  first line', activities)
        const sotoredTime = getStoredTime();
        
        for (const id in sotoredTime){
            const addActivity = activities.find(activity => activity.id === id)
            // console.log(addActivity)

        }
        console.log('finished')
    },[])

    const handleAddClick = (activity)=>{
        // console.log(activity)
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