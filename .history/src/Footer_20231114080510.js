import React, {useEffect} from 'react';
import propstypes from "prop-types";
import { newFilter } from './App';
const Footer = ({todolist,renderFilter, deleteAll}) => {
    const countedLeft = todolist.filter((item) => !item.isCompleted).length;

    return(            
        <div className='Footer'>
            <p className='iteam' >{countedLeft} iteams left</p>
            <div className='filters'>
                <button
                    //className={`btn ${filterFunction === newFilter.All ? 'selected' : ''}`}
                    onClick={() => renderFilter(newFilter.All)}
                >
                    All
                </button>
                <button 
                    //className={`btn ${filterFunction === newFilter.Active ? "selected" : ''}`}
                    onClick={() => {renderFilter(newFilter.Active)}}
                >
                    Active  
                </button>
                <button
                    //className={`btn${filterFunction === newFilter.Completed ? "selected" : ''}`}
                    onClick={() => renderFilter(newFilter.Completed)}
                >
                    Completed
                </button>
            </div>
            <button className='clear-completed'
                onClick={deleteAll}
            >
                Clear completed
            </button>
        </div>
    )
}

export default Footer;