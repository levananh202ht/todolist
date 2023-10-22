import React from 'react';

import { IoCloseOutline } from "react-icons/io5";

class ContentList extends React.Component{
    constructor(){
        super();
    }
    render(){
        const {todolist} = this.props;
        return(
            <div className='ContentList'>
                {
                    todolist.map((item) => {
                        return(
                        <div key={item.id}>
                            {item.name}
                            <IoCloseOutline onClick={this.handleDelete(item.id)} />
                        </div>              
                        )
                    })
                }
            </div>
        )
    }
}
export default ContentList