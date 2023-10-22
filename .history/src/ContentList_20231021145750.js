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
        handleChange = (event) => {
			if (this.props.editing) {
				this.setState({editText: event.target.value});
			}
		}
    render(){
        const { todolist, name, getTodoEditing, todoEditing} = this.props;
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
                                        <div>
                                            <label onDoubleClick={this.handleChange}> {item.name}</label>                                            
                                            <button><IoCloseOutline onClick={this.handleDelete} /></button>
                                        </div> :
                                        (<input
                                            id = {item.id}
                                            className='edit' 
                                            type='name'
                                            //onChange={e => setName(e.target.value)}
                                            value={name}
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
