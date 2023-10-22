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
        const {todolist} = this.props;
        console.log(todolist)
        //const {value} = this.state    
        const {newItem, deleteItem} = this.props;
        //const items = {id: Math.random(), name: value, status: false};
        //console.log(items)
        //deleteItem(newItem.todolist);
    } 

    render(){
        const {todolist, deleteItem} = this.props;
        return(
            <div className='ContentList'>
                {
                    todolist.map((item) => {
                        return(
                            <ul>
                                <li  className='ContentList_Item' key={item.id}>
                                    <label>{item.name}</label>
                                    <button><IoCloseOutline onClick={() => this.handleDelete(item.id)} /></button>
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