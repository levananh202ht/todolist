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
    render(){
        const { todolist, getTodoEditing, todoEditing} = this.props;
        //const [name, setName] = useState(item.name);

        const isEditing = todoEditing === todolist.id
        return(
            <div className='ContentList'>
                <label className='Click'><IoChevronDown/></label>
                <ul  className='ContentList_Item'>
                    {
                        todolist.map((item, index) => {
                            return(
                                <li  >
                                    {!isEditing ?
                                        <div className='view'>
                                            <label  type='checkbox' checked = {todolist.isCompleted} className='view_item' onDoubleClick={() => getTodoEditing(console.log(item.id))}> {item.name}</label>                                            
                                            <button><IoCloseOutline onClick={this.handleDelete} /></button>
                                        </div> :
                                        (<input
                                            type='checkbox' checked = {todolist.isCompleted}
                                            id = {item.id}
                                            className='edit' 
                                            //type='name'
                                           // onChange={e => setName(e.target.value)}
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
}
export default ContentList;
