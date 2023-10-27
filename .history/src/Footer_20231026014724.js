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
        return(            
            <div className='Footer'>
                <p className='iteam' onClick={this.countClick}>{count} iteams left</p>
                <div className='filters'>
                    <button>
                        All
                    </button>
                    <button>
                        Active
                    </button>
                    <button>
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