import React from 'react';

class Footer extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='Footer'>
                <p className='iteam'>iteams left</p>
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