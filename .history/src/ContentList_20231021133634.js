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
    //handleDelete = () => {    
       // const {item, deleteItem} = this.props;
      //  deleteItem(item.id);
   // } 
    //{
        //todolist.map((item) => {
           // return(                            
                //<ul  className='ContentList_Item' key={item.id}>
                   // <li>
                   // <label>{item.name}</label>
                  //  <button><IoCloseOutline onClick={this.handleDelete} /></button>
                  //  </li>
               // </ul>     
           // )
       // })
   // }
    render(){
        const {todolist, iteam, getTodoEditing, todoEditing} = this.props;

        const isEditing = todoEditing === todolist.id
        return(
            <div className='ContentList'>
                <label className='Click'><IoChevronDown/></label>
                <ul  className='ContentList_Item'>
                    {
                        todolist.map((iteam, index) => {
                            return(
                                <li index = {index} className={`${isEditing ? 'editing' : ''} ${iteam.isCompleted ? 'completed' : ''} `} >
                                    {!isEditing ?
                                        <div>
                                            <label onDoubleClick={() => getTodoEditing(console.log(todolist.name))}> {iteam.name}</label>                                            
                                            <button><IoCloseOutline onClick={this.handleDelete} /></button>
                                        </div> :
                                        <input
                                            className='edit' 
                                            type='name'
                                            //onChange={e => setText(e.target.value)}
                                            //value={name}
                                        />
                                    }
                                </li>
                            )
                            
                        })
                    }
                </ul>   
            </div>
        )
    }
}
export default ContentList;
