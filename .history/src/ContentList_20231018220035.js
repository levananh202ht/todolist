import React from 'react';

import { IoCloseOutline } from "react-icons/io5";

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
                {
                    todolist.map((item) => {
                        return(
                            <ul>
                                <li  className='ContentList_Item' key={item.id}>
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