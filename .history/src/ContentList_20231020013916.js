import React from 'react';

import { IoCloseOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
class ContentList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            value: ''
        }
    }
    handleDelete = () => {    
        const {item, deleteItem} = this.props;
        deleteItem(item.id);
    } 

    render(){
        const {todolist} = this.props;
        return(
            <div className='ContentList'>
                <label className='Click'><IoChevronDown/></label>
                {
                    todolist.map((item) => {
                        return(                            
                            <ul  className='ContentList_Item' key={item.id}>
                                <li>
                                <label>{item.name}</label>
                                <button><IoCloseOutline onClick={this.handleDelete} /></button>
                                </li>
                            </ul>     
                        )
                    })
                }
            </div>
        )
    }
}
export default ContentList