import React from 'react';

import { IoClose } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { BsPencilFill } from "react-icons/bs";
const ContentList = ({todolist,isEditing,deleteItem,toggleCompleteStatus, handleEdit,onScroll,filterTodo,numberTodolist}) => {
    return(
        <div className='ContentList'
        ref={numberTodolist}
        >
            <label className='Click'><IoChevronDown/></label>
            <ul  className='ContentList_Item' 
                onScroll={onScroll}
                style={{height: "40vh",  overflowY: "scroll" }}
            >
                {
                    todolist.map((item, index) => {
                        return(
                            <li className='completed' >
                                {!isEditing ?
                                    <div className='view'>
                                        <input 
                                        className='toggle' 
                                        type='checkbox'  
                                        checked = {item.isCompleted} 
                                        onChange = {() => toggleCompleteStatus(item.id)}
                                        />
                                        <label   checked = {todolist.isCompleted} className='view_item' > {item.name}</label>    
                                        <div>
                                            <button
                                                className='updateClick'
                                                value={filterTodo.text}
                                                onChange={handleEdit}
                                                //onClick = {() => handleEdit(item.id)}
                                               
                                            >
                                                <BsPencilFill />
                                            </button>
                                            <button className='deleClick'
                                                onClick={() => deleteItem(item.id)}
                                            >
                                                <IoClose />
                                                
                                            </button>   
                                        </div>                                     
                                    </div> :
                                    (<input
                                        
                                        id = {item.id}
                                        className='edit' 
                                        value={todolist.name}
                                    />)
                                }
                            </li>
                        )
                        
                    })
                }
            </ul>   
        </div>
    )

}
export default ContentList;
