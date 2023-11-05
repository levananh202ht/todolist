import React from 'react';
import propstypes from "prop-types";
class Footer extends React.Component{
    constructor(){
        super()
    }
    render(){
        const {deleteAll} = this.props;
        const {handleAllClick,handleActiveClick, handleCompletedClick, CompletedFooter, countedLeft,visibleTodos,filter} = this.props
        return(            
            <div className='Footer'>
                <p className='iteam' onClick={this.countClick}>{countedLeft} iteams left</p>
                <div className='filters'>
                    <button
                        className={`${filter === "All" ? 'selected' : ''}`}
                        onClick={visibleTodos}
                    >
                        All
                    </button>
                    <button 
                        className={`${filter === "Active" ? "selected" : ''}`}
                        onClick={visibleTodos}
                    >
                        Active  
                    </button>
                    <button
                        className={`${filter === "Completed" ? "selected" : ''}`}
                        onClick={visibleTodos}
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