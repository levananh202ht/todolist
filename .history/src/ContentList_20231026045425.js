import React from 'react';

import { IoCloseOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
class ContentList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            value: '',
            isEditing: false
        }
    }
    render(){
        const { todolist,item, todoEditing, markCompleted} = this.props;
        //const [name, setName] = useState(item.name);
        debugger;
        const isEditing = todoEditing === todolist.id
        
        return(
            <div className='ContentList'>
                <label className='Click'><IoChevronDown/></label>
                <ul  className='ContentList_Item'>
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
                                            onChange = {() => markCompleted(item.id)}
                                            />
                                            <label   checked = {todolist.isCompleted} className='view_item' > {item.name}</label>                                            
                                            
                                        </div> :
                                        (<input
                                            
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
