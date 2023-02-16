import React, { useState } from 'react';
import './Owner.css'
import img from '../../images/Owner.jpg'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addTodb } from '../storage';

const Owner = ({excercisetime}) => {
    const [time, setTime] = useState(0);
    const handelClick = (e)=>{
        setTime(e);
        addTodb(e)
    }
    // console.log(excercisetime);
    let exerciseTotalTime = 0;
    for (const activity of excercisetime ){
        exerciseTotalTime = exerciseTotalTime + activity.time_required;
    }

    const notify = ()=>{
    //    console.log(notify);
       const total = exerciseTotalTime + time;
       toast.success('Total Time:' + '' + total + 'min',{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
       });

    }


    return (
        <div className='owner'>
            <div className='person'>
                <img src={img} alt="" className='photo' />
                <div className='person-info'>
                    <h3>Shayke Nobe</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='my-info'>
                <div className='weight'>
                    <h3>75<sub>Kg</sub></h3>
                    <p>Weight</p>
                </div>
                <div className='height'>
                    <h3>5.9</h3>
                    <p>Height</p>
                </div>
                <div className='age'>
                    <h3>34<sub>years</sub></h3>
                    <p>Age</p>
                </div>
            </div>
            <div assName='add_a_break'>
                <h3 className='add_a_break_title'>Add a Break</h3>
                <div className='add_a_break_circle'>
                    <button onClick={() => handelClick(10)}><p className='circle'>10min</p></button>
                    <button onClick={() => handelClick(20)}><p className='circle'>20min</p></button>
                    <button onClick={() => handelClick(30)}><p className='circle'>30min</p></button>
                    <button onClick={() => handelClick(40)}><p className='circle'>40min</p></button>
                    <button onClick={() => handelClick(50)}><p className='circle'>50min</p></button>
                </div>
            </div>
            <div className='exercise_detail'>
                <h3 className='exercise_detail_title'>Exercise Details</h3>
                <div className='exercise_time'>
                <h3>Exercise time</h3> 
                <p>{exerciseTotalTime}minute</p>
                </div>
                <div>
                    <h3>Break Time</h3>
                    <p>{time}minute</p>
                </div>
                <div>
                    <button onClick={notify} className='activity_btn'>Activity Complete</button>
                    <ToastContainer/>
                </div>
                
            </div>
        </div>
    );
};

export default Owner;