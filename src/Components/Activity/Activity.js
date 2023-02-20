
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock} from '@fortawesome/free-solid-svg-icons'


import './Activity.css'
import { useState } from 'react';
import { addTodb } from '../storage';



const Activity = ({activity, handleAddClick}) => {
    // console.log(props.activity)
//    const {activity, handleClick}= props;

const [active, setActive] = useState(false);

const {name, picture, about, age, time_required } = activity;
const [showMore, setShowMore]= useState(false);


const handelClick = ()=>{
    setActive(!active);
    addTodb(active.id)
}
    
    return (
        <div className='activity'>
            <img src={picture} alt=""/>
            <div className='activity-info'>
            <h3 className='activity-name'>Gymnastics : {name}</h3>
            <div>
            <p>About : {showMore ? about : `${about.substring(0, 150)}`}
            <button className="btn" onClick={()=>setShowMore(!showMore)}>{showMore ? "show less": "more"}
            </button>
            </p>
            </div>
            
            <p ><small>Age : {age}</small></p>
            <p id="active"><small>Time Required : {time_required}min</small></p>
            </div>
            <button onClick={()=>handleAddClick(activity)} className='btn-select'>
                <p className='btn-text'>Select</p>
                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Activity;