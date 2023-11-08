import React from 'react';
import propstypes from "prop-types";
import { newFilter } from './App';
const Footer = ({todolist,filter,deleteAll,setFilter}) => {
    debugger
    const {All,Active,Completed} = newFilter
    const countedLeft = todolist.filter((item) => !item.isCompleted).length;
    const handleFilter = (index) => {
        setFilter(index);

    }
    return(            
        <div className='Footer'>
            <p className='iteam' >{countedLeft} iteams left</p>
            <div className='filters'>
                <button
                    className={`btn ${filter === All ? 'selected' : ''}`}
                    onClick={() => handleFilter(All)}
                >
                    All
                </button>
                <button 
                    className={`btn ${filter === Active ? "selected" : ''}`}
                    onClick={() => handleFilter(Active)}
                >
                    Active  
                </button>
                <button
                    className={`btn ${filter === Completed ? "selected" : ''}`}
                    onClick={() => handleFilter(Completed)}
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