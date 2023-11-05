import React from 'react';
import propstypes from "prop-types";
class Footer extends React.Component{
    constructor(){
        super()
    }
    render(){
        const {deleteAll} = this.props;
        const {handleAllClick,handleActiveClick, handleCompletedClick, CompletedFooter, countedLeft, setStatusFilter,status} = this.props
        return(            
            <div className='Footer'>
                <p className='iteam' onClick={this.countClick}>{countedLeft} iteams left</p>
                <div className='filters'>
                    <button
                        className={`${status === 'All' ? 'selected' : ''}`}
                        onClick={() => setStatusFilter('All')}
                    >
                        All
                    </button>
                    <button 
                        className={`${status === 'Active' ? "selected" : ''}`}
                        onClick={() =>  setStatusFilter('Active')}
                    >
                        Active  
                    </button>
                    <button
                        className={`${status === 'Completed' ? "selected" : ''}`}
                        onClick={() =>  setStatusFilter('Completed')}
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
export default Footer;