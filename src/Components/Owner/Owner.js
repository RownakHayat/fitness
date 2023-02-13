import React, { useState } from 'react';
import './Owner.css'
import { ToastContainer, toast } from 'react-toastify';
import img from '../../images/Owner.jpg'
const Owner = ({exerciseTime}) => {

       const [time, setTime] = useState(0);
       const handleToTime = () =>{
        // console.log(exerciseTime);
        setTime();
        let excericseTimetotal = 0;

        for (const activity of exerciseTime){
            excericseTimetotal = excericseTimetotal + activity.time_required;
        }


       }
    return (
        <div className='owner'>
            <div className='person'>
                <img src={img} alt="" className='photo' />
                <div className='person-info'>
                    <h3>Shayke Nobe</h3>
                    <p>Dhaka ,Bangladesh</p>
                </div>
            </div>
            <div className='my-info'>
                <div className='weight'>
                    <h3>75<sub>Kg</sub></h3>
                    <p>Weight</p>
                </div>
                <div className='height'>
                    <h3>6.8</h3>
                    <p>Height</p>
                </div>
                <div className='age'>
                    <h3>34<sub>years</sub></h3>
                    <p>Age</p>
                </div>
            </div>

            <div className='add_a_break'>
                <h3 className='add_a_break_title'>Add A Break</h3>
                <div className='add_a_break_circle'>
                    <button onClick={handleToTime(10)}><p className='circle'>10min</p></button>
                    <button onClick={handleToTime(20)}><p className='circle'>20min</p></button>
                    <button onClick={handleToTime(30)}><p className='circle'>30min</p></button>
                    <button onClick={handleToTime(40)}><p className='circle'>40min</p></button>
                    <button onClick={handleToTime(50)}><p className='circle'>50min</p></button>
                </div>
            </div>
            <div className='exercise_detail'>
                <h3 className='exercise_detail_title'>Exercise Details</h3>
                <div className='exercise_time'>
                    <h3>Exercise time</h3>
                    <p>{exerciseTime} minute</p>
                </div>
                <div className='break_time'>
                    <h3>Break time</h3>
                    <p>{time} minute</p>
                </div>
            </div>
            <div className='activity_complete_btn'>
                <button  className='activity_btn'>Activity Complete</button>
               <ToastContainer/>
            </div>
        </div>
    );
};

export default Owner;