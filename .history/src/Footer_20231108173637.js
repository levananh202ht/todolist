import React from 'react';
import propstypes from "prop-types";
import { newFilter } from './App';
const Footer = ({todolist,filter,deleteAll,setFilter}) => {
    const countedLeft = todolist.filter((item) => !item.isCompleted).length;
    const handleFilter = (filter) => {
        setFilter(filter);

    }
    return(            
        <div className='Footer'>
            <p className='iteam' >{countedLeft} iteams left</p>
            <div className='filters'>
                <button
                    className={`${filter === "All" ? 'selected' : ''}`}
                    onClick={() => handleFilter("All")}
                >
                    All
                </button>
                <button 
                    className={`${filter === newFilter.Active ? "selected" : ''}`}
                    onClick={() => handleFilter("Active")}
                >
                    Active  
                </button>
                <button
                    className={`${filter === "Completed" ? "selected" : ''}`}
                    onClick={() => handleFilter("Completed")}
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