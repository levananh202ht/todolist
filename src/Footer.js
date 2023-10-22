import React from 'react';

class Footer extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='Footer'>
                <p>iteams left</p>
                <div>
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
                <button>
                    Clear completed
                </button>
            </div>
        )
    }
}
export default Footer;