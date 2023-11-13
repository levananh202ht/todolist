import React from 'react';
import propstypes from "prop-types";
import { newFilter } from './App';
const Footer = ({todolist,filterTodo, deleteAll,handleAll,handleActive,handleCompleted}) => {
    const countedLeft = todolist.filter((item) => !item.isCompleted).length;
    const renderFilter = todolist.filter(item => filterTodo === newFilter.All || filterTodo  === item.isCompleted)
  console.log(renderFilter);
    return(            
        <div className='Footer'>
            <p className='iteam' >{countedLeft} iteams left</p>
            <div className='filters'>
                <button
                    //className={`btn ${renderFilter === newFilter.All ? 'selected' : ''}`}
                    onClick={() => handleAll(newFilter.All)}
                >
                    All
                </button>
                <button 
                   // className={`btn ${renderFilter === newFilter.Active ? "selected" : ''}`}
                    onClick={() => handleActive(newFilter.Active)}
                >
                    Active  
                </button>
                <button
                    //className={`btn${renderFilter === newFilter.Completed ? "selected" : ''}`}
                    onClick={() => handleCompleted(newFilter.Completed)}
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