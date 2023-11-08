import React from 'react';
import propstypes from "prop-types";
import { newFilter } from './App';
const Footer = ({deleteAll,handleAllClick,todolist,CompletedFooter,handleActiveClick,handleCompletedClick}) => {
    const countedLeft = todolist.filter((item) => !item.isCompleted).length;
    return(            
        <div className='Footer'>
            <p className='iteam' >{countedLeft} iteams left</p>
            <div className='filters'>
                <button
                    className={`${CompletedFooter === newFilter.All ? 'selected' : ''}`}
                    onClick={handleAllClick}
                >
                    All
                </button>
                <button 
                    className={`${CompletedFooter === newFilter.Active ? "selected" : ''}`}
                    onClick={handleActiveClick}
                >
                    Active  
                </button>
                <button
                    className={`${CompletedFooter === newFilter.Completed ? "selected" : ''}`}
                    onClick={handleCompletedClick}
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
Footer.propTypes = {
    todoList: propstypes.array,
    CompletedFooter: propstypes.string,
    deleteAll: propstypes.func,
    handleCompletedClick: propstypes.string,
    handleActiveClick: propstypes.func.isRequired,
    handleAllClick: propstypes.func.isRequired,
};
export default Footer;