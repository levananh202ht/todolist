import React from 'react';

class Footer extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    countClick = (e) => {
        if (e.key === "Enter") {
        const count = this.state.count;
        const countNew =  count + 1
        this.setState({ 
            count : countNew,
        });
        }
    };
    render(){
        const {count} = this.state
        const {handleAllClick,handleActiveClick, handleCompletedClick, CompletedFooter} = this.props
        return(            
            <div className='Footer'>
                <p className='iteam' onClick={this.countClick}>{count} iteams left</p>
                <div className='filters'>
                    <button
                        href="#/"
                        className={CompletedFooter === false ? 'selected' : ''}
                        onClick={handleAllClick}
                    >
                        All
                    </button>
                    <button 
                        href="#/active"
                        className={CompletedFooter === 'Active' ? 'selected' : ''}
                        onClick={console.log('1')}
                    >
                        Active
                    </button>
                    <button
                        href="#/completed"
                        className={CompletedFooter === "Completed" ? "selected" : ""}
                        onClick={() =>console.log("aaaa")}
                    >
                        Completed
                    </button>
                </div>
                <button className='clear-completed'>
                    Clear completed
                </button>
            </div>
        )
    }
}
export default Footer;