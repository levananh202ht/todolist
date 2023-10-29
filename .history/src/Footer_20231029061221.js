import React from 'react';

class Footer extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    // countClick = (e) => {
    //     if (e.key === "Enter") {
    //     const count = this.state.count;
    //     const countNew =  count + 1
    //     this.setState({ 
    //         count : countNew,
    //     });
    //     }
    // };
    render(){
        const {deleteAll} = this.props;
        const {handleAllClick,handleActiveClick, handleCompletedClick, CompletedFooter, filterButton} = this.props
        return(            
            <div className='Footer'>
                <p className='iteam' onClick={this.countClick}> iteams left</p>
                <div className='filters'>
                    <button
                        className={`${CompletedFooter === false ? 'selected' : ''}`}
                        onClick={handleAllClick}
                    >
                        All
                    </button>
                    <button 
                        className={`${CompletedFooter === "Active" ? "selected" : ''}`}
                        onClick={handleActiveClick}
                    >
                        Active  
                    </button>
                    <button
                        className={`${CompletedFooter === "Completed" ? "selected" : ''}`}
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
}
export default Footer;